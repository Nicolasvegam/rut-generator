"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Generador RUT", href: "/" },
    { name: "Validador RUT", href: "/validar" },
    { name: "RUT al Azar", href: "/rut-al-azar" },
    { name: "Creador RUT", href: "/creador-rut" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="bg-[#0033A0] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold hover:text-[#F8F8F8] transition-colors"
              >
                <Image
                  src="/icon.svg"
                  alt="Bandera de Chile"
                  width={24}
                  height={24}
                  className="rounded shadow-sm"
                />
                RUT Chile
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-[#1a47b8] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#1a47b8] transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 top-3" : "top-2"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out top-3 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 top-3" : "top-4"
                  }`}
                ></span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`transform transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-64"
            : "opacity-0 -translate-y-4 max-h-0"
        } overflow-hidden bg-[#0033A0]`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#1a47b8] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
