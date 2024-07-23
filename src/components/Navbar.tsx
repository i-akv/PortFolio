"use client";

import React from "react";
import { SunIcon, MoonIcon, MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="flex justify-between py-2">
      <h1 className="text-[50px] font-mono bg-gradient-to-r from-black/90 dark:from-white/90 via-orange-500 dark:via-orange-700 to-white/10 inline-block text-transparent bg-clip-text">
        ./iakv
      </h1>
      <div className="flex gap-1 justify-center items-center">
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex"
        >
          <SunIcon className="h-[50px] w-[50px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[50px] w-[50px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>
        <MenuIcon className="h-[50px] w-[50px] scale-100" />
      </div>
    </nav>
  );
};

export default Navbar;
