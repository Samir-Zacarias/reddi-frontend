"use client";

import { useState } from "react";
import UserLoginIcon from "@/src/components/icons/UserLoginIcon";

export default function RecoveryStep1({
  title = "Inserte su mensaje",
  onSubmit,
}: {
  title?: string;
  onSubmit: (email: string) => void;
}) {
  const [email, setEmail] = useState("");

  // --- HANDLERS ---
  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de validación
    onSubmit(email);
  };

  return (
    <>
      {/* --- TÍTULO --- */}
      <h1 className="text-2xl font-semibold text-center text-gray-800 m-1 pointer-events-none">
        {title}
      </h1>
      <h2 className="text-center text-[#6A6C71] mb-2 pointer-events-none">
        Por favor ingresa el correo electrónico de administrador para
        restablecer la contraseña
      </h2>

      {/* --- FORMULARIO --- */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* --- CAMPO DE NOMBRE/EMAIL --- */}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-600 font-roboto"
          >
            Correo electrónico
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserLoginIcon className="h-5 w-5 " />
            </span>
            <input
              autoComplete="email"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa la información"
              className="w-full pl-10 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-roboto"
              required
            />
          </div>
        </div>

        {/* --- BOTÓN DE ENVÍO --- */}
        <button
          type="submit"
          className="w-full bg-primary text-white font-medium py-2 px-4 rounded-xl hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-300"
        >
          Enviar código de recuperación
        </button>
      </form>
    </>
  );
}
