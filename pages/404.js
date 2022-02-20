import Header from "@/components/composite/Header";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col gap-10 justify-center items-center h-[85vh]">
        <h1 className="text-4xl">404 Not Found !</h1>
        <Link href="/">
          <a className="px-5 py-2 bg-black text-white rounded hover:bg-white hover:outline hover:outline-2 hover:outline-black hover:text-black">
            Got To Home Page
          </a>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
