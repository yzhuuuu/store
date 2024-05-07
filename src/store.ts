import { create } from "zustand";

import { Theme } from "@/utils/types.ts";
import applyTheme from "@/utils/applyTheme.ts";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
const initialTheme = () => {
  const theme = (localStorage.getItem("theme") as Theme) || "light";
  applyTheme(theme);
  return theme;
};

const useThemeStore = create<ThemeState>()((set) => ({
  theme: initialTheme(),
  setTheme: (theme: Theme) => {
    set({ theme });
    applyTheme(theme);
  },
}));
export { useThemeStore };
