"use client";
import { useState } from "react";
import Link from "next/link";
import { smoothScroll } from "@/utils/scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: any, href: string) => {
    smoothScroll(e, href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop and Mobile Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl liquid-glass z-50 rounded-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Logo */}
            <div className="flex-shrink-0 md:hidden">
              <span className="text-zinc-300 font-bold text-lg px-2">VP</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block w-full">
              <div className="flex items-center justify-center space-x-4 lg:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative text-zinc-400 hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 group overflow-hidden"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-white/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-zinc-400 hover:text-zinc-300 focus:outline-none transition-colors"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu dropdown - separate from navbar */}
      <div
        className={`md:hidden fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md liquid-glass rounded-3xl z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-4 space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-zinc-400 hover:text-zinc-300 block px-4 py-3 rounded-2xl text-base font-medium transition-all duration-300 hover:bg-white/5 active:bg-white/10"
              style={{
                animation: isOpen
                  ? `slideIn 0.3s ease-out ${index * 0.05}s forwards`
                  : "none",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
