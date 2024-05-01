import LinksDropDown from "@/components/LinksDropDown.tsx";
import Logo from "@/components/Logo.tsx";
import NavLinks from "@/components/NavLinks.tsx";
import ThemesToggle from "@/components/ThemesToggle.tsx";
import CartButton from "@/components/CartButton.tsx";

function Navbar() {
  return (
    <nav className={" mb-2 bg-muted py-4  "}>
      <div
        className={"flex items-center gap-x-12 align-element justify-around"}
      >
        <Logo />
        <LinksDropDown />
        <NavLinks />
        <div className={"flex justify-center items-center gap-x-4"}>
          <ThemesToggle />
          <CartButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
