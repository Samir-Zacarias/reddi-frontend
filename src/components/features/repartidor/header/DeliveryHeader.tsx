// components/Header.tsx

"use client";
import Link from "next/link";
import Logo from "@/src/components/basics/Logo";
import Image from "next/image";
import Avatar from "@/public/carlosAvatar.svg";
import { useEffect, useState } from "react";
import { createClient } from "@/src/lib/supabase/client";

const logoFill = "white";
const logoURL = "/repartidor/home";

export default function Header() {
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      const user = data.user;
      const meta = (user?.user_metadata as Record<string, any>) || {};
      const name =
        meta.full_name ||
        meta.name ||
        meta.first_name ||
        (typeof user?.email === "string" ? user.email.split("@")[0] : null) ||
        "Repartidor";
      setDisplayName(name as string);
    });
  }, []);

  return (
    <>
      <header
        className={`
        relative px-4 py-3
        text-white
        rounded-b-3xl shadow-lg
        pt-safe 
        overflow-hidden
      `} // INSTALAR EL PLUGIN PARA EL PTSAFE
      >
        <div
          className="
          absolute inset-0
          bg-primary
          -z-10
        "
        >
          <div
            className="
            absolute inset-0
            bg-pattern-food
            bg-repeat
            opacity-20
           bg-[length:750px]
          "
          ></div>
        </div>
        <div className="flex flex-col p-4">
          {/* --- Fila Superior: Usuario e Imagen --- */}
          <div className="flex items-end justify-between">
            <div className="space-y-3">
              {/* Lado Izquierdo: Logo y bienvenida*/}
              <Link href={logoURL}>
                <Logo fill={logoFill} />
              </Link>
              <p className="block font-bold">
                Hola, {displayName || "Repartidor"} 👋
              </p>
            </div>

            {/* Lado Derecho: Imagen de repartidor */}
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={Avatar}
                  alt="Foto de perfil de usuario"
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
