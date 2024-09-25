import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Divider,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import {
  Phone,
  Info,
  Menu,
  MessageCircleQuestion,
  ShoppingCart,
} from "lucide-react";
import { Dancing_Script, Quicksand } from "next/font/google";
import Image from "next/image";

import logo_white from "../../../../public/logo_white.png";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });

export default function Navbar() {
  return (
    <NextUINavbar
      className="shadow-2xl bg-gradient-to-b from-black to-stone-900"
      shouldHideOnScroll={true}
      isBlurred={true}
    >
      <NavbarBrand className="flex items-center text-sm sm:text-base">
        <Image
          src={logo_white}
          alt="Company Logo"
          className="w-40 h-44 lg:w-64 lg:h-64"
        />
        <h1
          className={`${dancingScript.className} text-s sm:text-base md:text-lg lg:text-2xl text-shadow-md text-white`}
        >
          Where Metal Becomes Art
        </h1>
      </NavbarBrand>
      <Divider orientation="vertical" className="hidden sm:block" />
      <NavbarContent
        className="hidden sm:flex gap-2 sm:gap-4 items-center justify-center"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className={`${quicksand.className} flex items-center gap-1 sm:gap-2 text-xs sm:text-xs md:text-sm lg:text-lg`}
          >
            <ShoppingCart size={14} />
            Shop
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className={`${quicksand.className} flex items-center gap-1 sm:gap-2 text-xs sm:text-xs md:text-sm lg:text-lg`}
          >
            <MessageCircleQuestion size={14} />
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className={`${quicksand.className} flex items-center gap-1 sm:gap-2 text-xs sm:text-xs md:text-sm lg:text-lg`}
          >
            <Phone size={14} />
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className={`${quicksand.className} flex items-center gap-1 sm:gap-2 text-xs sm:text-xs md:text-sm lg:text-lg`}
          >
            <Info size={14} />
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenuToggle
        className="sm:hidden"
        icon={<Menu className="text-white" size={20} />}
      />
      <NavbarMenu
        className="sm:hidden"
        css={{
          padding: "0.5rem 1rem",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          "@media screen and (orientation: landscape)": {
            padding: "0.5rem 1rem",
          },
        }}
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className={`${quicksand.className} flex items-center gap-1 text-base`}
          >
            <ShoppingCart size={14} />
            Shop
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className={`${quicksand.className} flex items-center gap-1 text-base`}
          >
            <Phone size={14} />
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className={`${quicksand.className} flex items-center gap-1 text-base`}
          >
            <MessageCircleQuestion size={14} />
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className={`${quicksand.className} flex items-center gap-1 text-base`}
          >
            <Info size={14} />
            FAQ
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}
