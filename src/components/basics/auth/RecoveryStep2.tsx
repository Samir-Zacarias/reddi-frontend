"use client";

import { useState } from "react";
import OtpInput from "./OtpInput";

export default function RecoveryStep2({
  title = "Inserte su mensaje",
  onSubmit,
}: {
  title?: string;
  onSubmit: (code: string) => void;
}) {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de validación
    onSubmit(code);
  };

  return (
    <>
      {/* --- TÍTULO --- */}
      <h1 className="text-2xl font-semibold text-center text-gray-800 m-1 pointer-events-none">
        {title}
      </h1>
      <h2 className="text-center text-[#6A6C71] mb-2 pointer-events-none">
        Por favor ingrese el código que se envió a su correo electrónico para
        restablecer la contraseña
      </h2>

      {/* --- FORMULARIO --- */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* --- CAMPO DE CÓDIGO OTP --- */}
        <div className="md:w-3/5 m-auto">
          <OtpInput myOnChange={setCode} value={code} />
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
