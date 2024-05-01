import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Sun } from "lucide-react";
import { Theme, themes } from "@/utils/types.ts";
import { useThemeStore } from "@/store.ts";

function ThemesToggle() {
  const setTheme = useThemeStore((state) => state.setTheme);
  function onClick(theme: Theme): void {
    setTheme(theme as Theme);
  }
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
            <DropdownMenuItem
              key={theme}
              className={"capitalize"}
              onClick={() => onClick(theme as Theme)}
            >
              {theme}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemesToggle;
