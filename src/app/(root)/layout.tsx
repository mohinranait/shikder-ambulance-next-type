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
    </main>
  );
};

export default MainLayout;
