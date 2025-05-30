"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide z-50">
      <div className="flex flex-wrap items-center justify-between w-full">
        <Link href="/" className="max-sm:hidden">
          <img src="/logos.png" alt="logo" className="w-14" />
        </Link>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {menuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="flex -30px flex-col lg:flex-row lg:space-x-4 mt-5 mr-8 lg:mt-0 text-[20px] font-medium max-lg:space-y-3">
            {/* Logo in mobile menu */}
            <li className="mb-4 lg:hidden">
              <Link href="/">
                <img src="/logos.png" alt="logo" className="w-36" />
              </Link>
            </li>

            {[
              { name: "Home", href: "/", active: true },
              { name: "Feature", href: "/feauture" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item, idx) => (
              <li
                key={idx}
                className="relative inline-block cursor-pointer after:block after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"
              >
                <Link
                  href={item.href}
                  className={`block ${
                    item.active ? "text-blue-700" : "text-slate-900"
                  } hover:text-blue-700`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Buttons */}
            <li className="flex space-x-2 mt-4 lg:mt-0 lg:ml-6 px-3">
              <Link href="/login">
              <button className="px-4 py-2 text-sm rounded-full text-slate-900 border border-gray-400 hover:bg-gray-50 ">
                Login
              </button>
              </Link>
          <Link href="/signup">
             <button className="px-4 py-2 text-sm rounded-full text-white bg-blue-600 border border-blue-600 hover:bg-blue-700">
            Sign up
           </button>
          </Link>

            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
