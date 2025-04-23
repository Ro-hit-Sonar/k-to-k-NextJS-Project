import Link from "next/link";
import React from "react";
import Image from "next/image";

const Custom404: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f1119]">
      <Image
        className=" "
        src="/final404.png"
        alt="Next.js logo"
        width={500}
        height={300}
        priority
      />

      <h1 className="mt-4 text-3xl font-bold text-gray-100">
        Why are you here ?
      </h1>
      <h1 className="mt-2 text-2xl text-gray-100">
        you are not supposed to be here
      </h1>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Custom404;
