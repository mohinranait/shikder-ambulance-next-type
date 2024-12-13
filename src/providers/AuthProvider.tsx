"use client";
import useAxios from "@/hooks/useAxios";
import { TUser } from "@/types/usersTypes";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from "react";

export const AuthContext = createContext<TContextType | null>(null);

type TContextType = {
  user: TUser | null;
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  signOut: () => void;
};

type Props = {
  children: React.ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const axios = useAxios();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<TUser | null>(null);
  console.log(isLoading);

  const signOut = async () => {
    try {
      const { data } = await axios.post(`/user/logout`, {});
      if (data?.success) {
        setUser(null);
        router.push("/");
      }
    } catch (error) {
      console.log("Signout not working");
    }
  };

  const obj: TContextType = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    signOut,
  };

  useEffect(() => {
    (async function () {
      try {
        if (user) return;
        setIsLoading(true);
        const { data } = await axios.get(`/user`);

        if (data?.success) {
          setUser(data?.payload);
          setIsLoading(false);
        } else {
          //   const { data } = await axios.post(`/user/logout`, {});
          setUser(null);
          setIsLoading(false);
        }
      } catch (error) {
        setUser(null);
        setIsLoading(false);
        console.log("Unauthenticated");
      }
    })();
  }, []);

  if (isLoading) {
    return <div>Loading user...</div>;
  }

  return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

// Export useAuth hooks for use all components
export const useAuth = (): TContextType => {
  const authCon = useContext(AuthContext);
  if (!authCon) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authCon;
};

export default AuthProvider;
