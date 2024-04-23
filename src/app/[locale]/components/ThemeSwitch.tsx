"use client";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { FiSun } from "react-icons/fi";
import { useOnClickOutside } from "usehooks-ts";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // New state to control dropdown visibility
  const { setTheme, resolvedTheme, themes, theme } = useTheme();
  const ref = useRef(null);
  useEffect(() => setMounted(true), []);
  useOnClickOutside(ref, () => setIsOpen(false));
  if (!mounted)
    return (
      <div className="relative inline-block min-w-[6.25rem] h-[40px] text-left"></div>
    );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={ref} className="relative inline-block min-w-[6.25rem] text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between items-center w-full rounded-md border shadow-sm px-4 py-2 bg-background text-sm font-medium text-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          id="options-menu"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          <FiSun />
          <span className="ml-2">{theme}</span>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right w-full absolute right-0 mt-2 rounded-md shadow-lg bg-dropdown">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {themes.map((themeItem) => {
              return (
                <button
                  key={themeItem}
                  onClick={() => {
                    setTheme(themeItem);
                    setIsOpen(false);
                  }}
                  className={`block px-4 w-full py-2 text-sm hover:bg-dropdownHover ${
                    themeItem === theme
                      ? "bg-selected text-primary hover:bg-selected"
                      : "text-secondary"
                  }`}
                >
                  {themeItem}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
