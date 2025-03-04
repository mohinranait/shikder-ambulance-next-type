import CallButton from "@/components/utils/CallButton";
import MainFooter from "@/shared/MainFooter";
import MainHeader from "@/shared/MainHeader";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="bg-theme">
      <MainHeader />
      {children}
      <MainFooter />
      <CallButton />
    </main>
  );
};

export default MainLayout;
