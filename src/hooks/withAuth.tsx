"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import PageLoader from "@/components/loader/PageLoader";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AuthenticatedComponent = (props: P) => {
    const router = useRouter();
    const { user, isLoading } = useAuth();

    useEffect(() => {
      if (!isLoading && !user) {
        router.replace("/login");
      }
    }, [isLoading, user, router]);

    if (isLoading || !user) {
      return <PageLoader />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
