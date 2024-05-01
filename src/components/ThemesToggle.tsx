import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Sun } from "lucide-react";
import { themes } from "@/utils/links.ts";

function ThemesToggle() {
  //<Sun />
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={"icon"}>
          <Sun className={"w-7 h-7"} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={10}>
        {themes.map((theme) => {
          return (
            <DropdownMenuItem key={theme} className={"capitalize"}>
              {theme}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemesToggle;
