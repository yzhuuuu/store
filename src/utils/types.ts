import hero1 from "../assets/1.jpg";
import hero2 from "../assets/2.jpg";
import hero3 from "../assets/3.jpg";
import hero4 from "../assets/4.jpg";
import hero5 from "../assets/5.jpg";
type Types = {
  text: string;
  href: string;
};

export const links: Types[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Products",
    href: "/products",
  },
  {
    text: "Cart",
    href: "/cart",
  },
];
export const themes: string[] = ["light", "dark", "system"];

export type Theme = "dark" | "light" | "system";

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export const imageLinks: string[] = [hero1, hero2, hero3, hero4, hero5];
