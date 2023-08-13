import { useState } from "preact/hooks";
import { Button } from "@/components/DarkModeButton.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import {
  GrActions,
  GrMoon,
  GrSystem,
} from "https://deno.land/x/react_icons@0.2.3/gr/mod.ts";

interface DarkModeProps {
  prev: "light" | "dark" | "system";
}

export default function DarkMode(props: DarkModeProps) {
  /**
   * Used to format mode as text in screen
   */
  function getMode(): "light" | "dark" | "system" {
    if (!IS_BROWSER) {
      return props.prev;
    }
    if (localStorage.theme === "dark") {
      return "dark";
    }
    if (localStorage.theme) {
      return "light";
    }
    return "system";
  }

  function updateMode() {
    const w = (window as unknown as { isDark: boolean });
    w.isDark = localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[w.isDark ? "add" : "remove"]("dark");
  }

  const [mode, setMode] = useState(getMode());

  const setDarkModeOn = () => {
    localStorage.theme = "dark";
    updateMode();
    setMode("dark");
  };

  const setDarkModeAuto = () => {
    delete localStorage.theme;
    updateMode();
    setMode("system");
  };

  const setDarkModeOff = () => {
    localStorage.theme = "light";
    updateMode();
    setMode("light");
  };

  return (
    <div class="flex gap-2 w-full">
      <Button onClick={setDarkModeOn}>
        <GrMoon />
        Dark
      </Button>

      <Button onClick={setDarkModeAuto}>
        <GrSystem />
        System
      </Button>

      <Button onClick={setDarkModeOff}>
        <GrActions />
        Light
      </Button>
      <div class="bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-slate-700 font-semibold dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300 mt-8">
        Current Mode: <strong class="">{mode}</strong>
      </div>
    </div>
  );
}
