"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { isTheme, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

function applyTheme(theme: Theme) {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncWithSystem = (event: MediaQueryListEvent) => {
      const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

      if (!isTheme(savedTheme)) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", syncWithSystem);
    return () => mediaQuery.removeEventListener("change", syncWithSystem);
  }, []);

  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";

    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="absolute right-4 top-4 size-9 print:hidden md:right-8 md:top-8"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <SunIcon className="hidden size-4 dark:block" aria-hidden="true" />
      <MoonIcon className="size-4 dark:hidden" aria-hidden="true" />
    </Button>
  );
}
