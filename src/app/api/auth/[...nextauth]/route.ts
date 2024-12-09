import connectDb from "@/config/databaseConfig";
import User from "@/models/UserModal";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";

interface UserSession {
  id: string;
  name: string;
  email: string;
  status: string;
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
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
        const userData: UserSession = {
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
        token.user = user as UserSession; // Attach user object to the token
      }
      return token;
    },
    async session({ session, token }) {
      // Safely cast token.user and assign it to session.user
      if (token?.user) {
        session.user = token.user as UserSession;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
