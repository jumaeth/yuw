'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import * as React from "react";
import {useTheme} from "next-themes";
import {Icons} from "@/components/icons";

export default function DarkmodeToggle() {
  const {setTheme, theme} = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const getThemeIcon = () => {
    switch (theme) {
      case "dark":
        return <Icons.dark className="h-4 w-4"/>;
      case "light":
        return <Icons.light className="h-4 w-4"/>;
      case "system":
      default:
        return <Icons.system className="h-4 w-4"/>;
    }
  };

  if (!mounted) return null;

  return (
    <NavigationMenu className="ml-5">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {getThemeIcon()}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 gap-1 w-[200px]">
              <ListItem
                onClick={() => setTheme("light")}
                title="Light"
              >
                <Icons.light className="mr-2 h-4 w-4"/>
              </ListItem>
              <ListItem
                onClick={() => setTheme("dark")}
                title="Dark"
              >
                <Icons.dark className="mr-2 h-4 w-4"/>
              </ListItem>
              <ListItem
                onClick={() => setTheme("system")}
                title="System"
              >
                <Icons.system className="mr-2 h-4 w-4"/>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
                    title,
                    onClick,
                    ...props
                  }: React.ComponentPropsWithoutRef<"li"> & { onClick?: () => void }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild onClick={onClick}>
        <div className="flex flex-row text-sm leading-none font-medium cursor-pointer">
          {props.children}
          {title}
        </div>
      </NavigationMenuLink>
    </li>
  )
}