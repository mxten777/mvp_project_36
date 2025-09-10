import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [isLight, setIsLight] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("light")
      : false
  );

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setIsLight(true);
    else if (saved === "dark") setIsLight(false);
    else {
      // 시스템 모드 반영
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      setIsLight(prefersLight);
    }
  }, []);

  return (
    <button
      aria-label={isLight ? "다크 모드로 전환" : "라이트 모드로 전환"}
      className="ml-4 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-transparent"
      onClick={() => setIsLight((v) => !v)}
      type="button"
    >
      {isLight ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
