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
