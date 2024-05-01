import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { AlignLeft } from "lucide-react";
import { links } from "@/utils/types.ts";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

function LinksDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={"md:hidden"}>
        <Button variant={"outline"} size={"icon"} asChild>
          <AlignLeft />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={15} align={"start"}>
        <DropdownMenuGroup>
          {links.map((link) => {
            return (
              <DropdownMenuItem key={link.text}>
                <NavLink to={link.href}>{link.text}</NavLink>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropDown;
