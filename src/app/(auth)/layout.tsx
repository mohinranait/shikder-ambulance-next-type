import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center">
        <div className="">{children}</div>
      </section>
    </main>
  );
};

export default LoginLayout;
