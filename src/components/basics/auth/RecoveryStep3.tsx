"use client";

import { useState } from "react";
import PasswordInput from "./PasswordInput";

export default function RecoveryStep2({
  title = "Inserte su mensaje",
  onSubmit,
}: {
  title?: string;
  onSubmit: (code: string) => void;
}) {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de validación
    if (password1 === password2) onSubmit(password1);
  };

  return (
    <>
      {/* --- TÍTULO --- */}
      <h1 className="text-2xl font-semibold text-center text-gray-800 m-1 pointer-events-none">
        {title}
      </h1>
      <h2 className="text-center text-[#6A6C71] mb-2 pointer-events-none">
        Crea una nueva contraseña. Asegúrate de que sea diferente de las
        anteriores por razones de seguridad
      </h2>

      {/* --- FORMULARIO --- */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* --- CAMPO DE CONTRASEÑA 1--- */}
        <PasswordInput
          id="new-password"
          autoComplete="new-password"
          isPasswordDisplayed={showPassword1}
          passwordValue={password1}
          displayPassword={setShowPassword1}
          myOnChange={setPassword1}
          label="Nueva contraseña"
        />

        {/* --- CAMPO DE CONTRASEÑA 2--- */}
        <PasswordInput
          id="confirm-password"
          autoComplete="new-password"
          isPasswordDisplayed={showPassword2}
          passwordValue={password2}
          displayPassword={setShowPassword2}
          myOnChange={setPassword2}
          label="Confirmar contraseña"
        />

        {/* --- BOTÓN DE ENVÍO --- */}
        <button
          type="submit"
          className="w-full bg-primary text-white font-medium py-2 px-4 rounded-xl hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-300"
        >
          Cambiar contraseña
        </button>
      </form>
    </>
  );
}
