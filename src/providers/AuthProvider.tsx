"use client";

import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { TUser } from "@/types/usersTypes";
import PageLoader from "@/components/loader/PageLoader";
import { getAuthUser, logoutUser } from "@/actions/userApi";

type TContextType = {
  user: TUser | null;
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  signOut: () => void;
};

export const AuthContext = createContext<TContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const signOut = async () => {
    try {
      const data = await logoutUser();
      if (data?.success) {
        setUser(null);
        router.push(`/login`);
      }
    } catch (error) {
      console.error("Signout failed", error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await getAuthUser();
        if (data?.success) {
          setUser(data.payload);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Authentication error:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, isLoading, setIsLoading, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): TContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
