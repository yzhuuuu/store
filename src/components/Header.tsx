import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className={
        "flex justify-center items-center sm:justify-end py-2 align-element"
      }
    >
      <div className={"flex justify-center gap-x-6 -mr-2"}>
        <Button asChild variant={"link"} size={"sm"}>
          <Link to={"/login"}>Sign in / Guest</Link>
        </Button>
        <Button asChild variant={"link"} size={"sm"}>
          <Link to={"/register"}>Register</Link>
        </Button>
      </div>
    </header>
  );
}

export default Header;
