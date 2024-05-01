import { Link } from "react-router-dom";
import { Sofa } from "lucide-react";

function Logo() {
  return (
    <Link
      to={"/"}
      className={
        "hidden md:flex justify-center items-center bg-primary p-2 rounded-lg text-white"
      }
    >
      <Sofa className={"w-8 h-8"} />
    </Link>
  );
}

export default Logo;
