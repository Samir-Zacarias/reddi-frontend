"use client";

import { useState } from "react";
import BasicButton from "../../basics/LinkButton";
import LoginIcon from "../../icons/LoginIcon";
import Image from "next/image";
import Link from "next/link";
import BurgerButton from "./BurgerButton";
import logo from "../../../assets/images/logo.svg";
import NavigationMenu from "./NavigationMenu";
import CarIcon from "@/src/components/icons/CarIcon";

export default function RootHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const linksData = [
    { name: "Iniciar Sesión", href: "/login" },
    { name: "Categorías", href: "/categorías" },
    { name: "Cómo funciona", href: "/productos" },
    { name: "Beneficios", href: "/beneficios" },
    { name: "Ser socio", href: "/ser-socio" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white text-sm">
      <div className="flex justify-between p-4 border-b-2 border-mainBorder md:px-12 items-center">
        <Link href="/">
          <Image src={logo} alt="logo" className="min-w-[100px]" />
        </Link>
        <nav className="hidden md:flex">
          {linksData
            .filter(({ href }) => href != "/login")
            .map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="font-semibold px-5 hover:text-primary"
              >
                {name}
              </Link>
            ))}
        </nav>
        <nav className="flex align-center items-center gap-6">
          <Link
            href=""
            className="items-center gap-4 md:flex hover:text-primary"
          >
            <CarIcon className="text-primary"></CarIcon>
            <span className="hidden md:block">Tu carrito (0)</span>
          </Link>
          <BurgerButton
            className="md:hidden"
            isOpen={isOpen}
            onClick={toggleMenu}
          ></BurgerButton>
          <BasicButton
            href="/login"
            className="px-8 py-2 hidden md:flex bg-black text-white hover:bg-primary hover:border-primary hover:text-black"
          >
            <LoginIcon className="text-primary group-hover:text-black"></LoginIcon>
            {linksData.find(({ href }) => href === "/login")?.name}
          </BasicButton>
        </nav>
      </div>
      <NavigationMenu
        myOnClick={toggleMenu}
        className="md:hidden"
        isOpen={isOpen}
        linksData={linksData}
      />
    </header>
  );
}
