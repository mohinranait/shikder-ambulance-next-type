import React, { FC } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import ThemeModalButton from "@/components/themes/ThemeModalButton";
import { headerMenus } from "@/config/constData";

const MainHeader: FC = () => {
  return (
    <Navbar className="container px-0 " maxWidth="lg">
      <NavbarBrand>
        <p className="font-bold text-inherit">SKA</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {headerMenus?.map((menu, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={menu?.path}>
              {menu?.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeModalButton />
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MainHeader;
