import Link from "next/link";
import React from "react";

const CallButton = () => {
  return (
    <span className=" fixed right-5 bottom-5 z-10 flex md:hidden size-11">
      <span className="absolute inline-flex h-full w-full animate-ripple rounded-full bg-red-400 opacity-20"></span>
      <span
        className="absolute inline-flex h-full w-full animate-ripple rounded-full bg-red-400 opacity-20"
        style={{ animationDelay: "0.75s" }}
      ></span>
      <Link
        href={"tel:01710060020"}
        className="relative inline-flex size-11 rounded-full bg-red-500 text-white items-center justify-center text-2xl shadow-lg"
      >
        📞
      </Link>
    </span>
  );
};

export default CallButton;
