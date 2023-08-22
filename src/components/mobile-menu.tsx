import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "./icons/menu";

import Link from "next/link";
export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="w-8 h-8 p-0">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuItem asChild>
          <Button
            className="cursor-pointer flex justify-start pl-4"
            asChild
            variant="ghost"
          >
            <Link href={`/gallery`}>Gallery</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button
            className="cursor-pointer flex justify-start pl-4"
            asChild
            variant="ghost"
          >
            <Link href={`/albums`}>Albums</Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button
            className="cursor-pointer flex justify-start pl-4"
            asChild
            variant="ghost"
          >
            <Link href={`/favorites`}>Favorite</Link>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
