"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import PageLoader from "@/components/loader/PageLoader";

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const AuthenticatedComponent = (props: P) => {
    const router = useRouter();
    const pathname = usePathname();
    const { user, isLoading } = useAuth();

    useEffect(() => {
      if (!isLoading && !user) {
        console.log("User acy");

        router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
      } else {
        console.log("User ni");
      }
    }, [isLoading, user, pathname, router]);

    if (isLoading || !user) {
      return <PageLoader />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
