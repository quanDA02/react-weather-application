import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import SearchBar from "../search/SearchBar";
import type { Coords } from "@/schemas/coords";
import ThemeSwitch from "./ThemeSwitch";

type Props = {
  setCoords: React.Dispatch<React.SetStateAction<Coords>>;
};

export default function Navbar({ setCoords }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-10">
        <NavigationMenuItem>
          <SearchBar setCoords={setCoords} />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ThemeSwitch />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
