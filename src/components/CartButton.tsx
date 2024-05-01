import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function CartButton() {
  return (
    <div>
      <Button asChild size={"icon"} variant={"outline"}>
        <Link to={"/cart"} className={"relative"}>
          <ShoppingCart />
          <span
            className={
              "absolute -top-2 -right-2 bg-primary rounded-full px-1 text-white"
            }
          >
            12
          </span>
        </Link>
      </Button>
    </div>
  );
}

export default CartButton;
