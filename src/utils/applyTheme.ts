import { Theme } from "@/utils/types.ts";

const applyTheme = (theme: Theme) => {
  console.log(theme);
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");
  if (theme === "system") {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    root.classList.add(systemTheme);

    return;
  }
  root.classList.add(theme);
};

export default applyTheme;
