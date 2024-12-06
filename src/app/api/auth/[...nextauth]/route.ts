import connectDb from "@/config/databaseConfig";
import User from "@/models/UserModal";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";
// import { NextResponse } from "next/server";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          console.error("Missing credentials");
          return null;
        }

        await connectDb();
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          console.error("User not found");
          return null;
        }

        const checkPassword = bcrypt.compareSync(credentials.password, user.password);
        if (!checkPassword) {
          console.error("Password not matched");
          return null;
        }

        // Exclude sensitive fields (e.g., password)
        const userData = {
          id: user._id.toString(),
          name: `${user.name.firstName} ${user.name.lastName}`,
          email: user.email,
          status: user.status,
        };

        console.log("Login successful", userData);
        return userData;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // When user logs in, add user data to token
      if (user) {
        token.user = user; // Attach user object to the token
      }
      return token;
    },
    async session({ session, token }) {
      // Expose user data from the token in the session
      session.user = token.user as typeof token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
