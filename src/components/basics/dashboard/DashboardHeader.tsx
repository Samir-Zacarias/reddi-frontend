// src/components/layout/Header.tsx
"use client";

import Image from "next/image";
import BellIcon from "@/src/components/icons/BellIcon";
import LogoutIcon from "@/src/components/icons/LogoutHeaderIcon";
import Badge from "@/src/components/basics/header/Badge";
import ReddiLogo from "@/src/components/icons/ReddiLogo";
import { createClient } from "@/src/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  };
  return (
    <header className="fixed bg-white w-full font-manrope z-50">
      <div className="flex items-center">
        {/* Logo */}
        <div className="py-6 px-14 w-[14rem]">
          <ReddiLogo />
        </div>
        <div className="flex border-b-2 border-gray-200 py-6 px-[32px] grow justify-end">
          <div className="flex items-center space-x-6 px-4">
            {/* Icono de Notificaciones */}
            <div className="flex items-center space-x-4 ">
              <button className="relative">
                <BellIcon fill="#454545" />
                <Badge className="rounded-sm" />
              </button>
            </div>
          </div>

          {/* Perfil de Usuario */}
          <div className="flex items-center space-x-3 border-x-2 px-4">
            <div className="relative">
              <Image
                className="h-9 w-9"
                src="/guyhawkins.svg"
                alt="Avatar de Guy Hawkins"
                width={36}
                height={36}
              />
              {/* Punto verde de estado "Online" */}
              <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Guy Hawkins</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>

          {/* Icono de Logout */}
          <button
            type="button"
            className="rounded-full p-1 text-gray-400  px-4"
            onClick={handleLogout}
          >
            <LogoutIcon className="h-6 w-6" aria-hidden="true" fill="#454545" />
          </button>
        </div>
      </div>
    </header>
  );
}
