import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-[#6EBA70] font-medium ">
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl hover:text-white">
              <Link href="/" className=" hover:font-extrabold">
                खेत-to-Kitchen
              </Link>
            </span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:font-extrabold">
              Home
            </Link>
            <Link href="/get-started" className="mr-5 hover:font-extrabold">
              Products
            </Link>
            <Link href="/good-reads" className="mr-5 hover:font-extrabold">
              About Us
            </Link>
            <Link href="/confess" className="mr-5 hover:font-extrabold">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
