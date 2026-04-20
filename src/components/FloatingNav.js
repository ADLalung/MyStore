import React from "react";
import Link from "next/link";

export default function FloatingNav() {
  return (
      <header className="flex items-center mx-auto w-full">
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-4
            container flex justify-center
            bg-olive-800 w-60 font-bold rounded-full
            hover:bg-olive-600 transition-all duration-300
            hover:shadow-lg hover:shadow-olive-400/50
            hover:scale-102 hover:w-64 "
        >
          <Link className="text-white-500 px-2 hover:text-black transition-all duration-300" href="/">Home</Link>
          {/* <Link className="text-white-500 px-2 hover:text-black transition-all duration-300" href="/products">Products</Link> */}
          <Link className="text-white-500 px-2 hover:text-black transition-all duration-300" href="/about">About</Link>
          <Link className="text-white-500 px-2 hover:text-black transition-all duration-300" href="/contact">Contact</Link>
        </nav>
        
        
        <Link href="/" className="fixed top-4 right-4 mt-2 w-10 h-10 z-50
            rounded-full flex items-center justify-center
            border border-olive-800
            hover:scale-110 transition-all duration-300
            hover:shadow-lg hover:shadow-olive-400/50
            "
        >
          <object type="image/svg+xml" data="/acc.svg"
            className="p-1 hover:bg-white-500 transition-all duration-300 rounded-full w-8 h-8"
          >
            Your browser does not support SVG.
          </object>
        </Link>
        
      </header>
  );
}