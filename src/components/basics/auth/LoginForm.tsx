"use client";

import { useState } from "react";
import PasswordInput from "./PasswordInput";
import UserLoginIcon from "@/src/components/icons/UserLoginIcon";
import Link from "next/link";

const recoveryAccountLink = "/admin/login/recuperar-cuenta?step=1";

export default function LoginForm({
  title = "Inserte su mensaje",
}: {
  title?: string;
}) {
  // --- STATE MANAGEMENT ---
  // Guardamos los valores de los inputs y el estado de la UI
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // --- HANDLERS ---
  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado con:", {
      email,
      password,
      rememberMe,
    });
    // Aquí iría tu lógica de autenticación (ej. llamar a una API)
  };

  return (
    <>
      {/* --- TÍTULO --- */}
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6 pointer-events-none">
        {title}
      </h1>

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
              className="w-full pl-10 pr-4 py-3 border border-gray-400 rounded-xl font-roboto"
              required
            />
          </div>
        </div>

        {/* --- CAMPO DE CONTRASEÑA --- */}
        <PasswordInput
          isPasswordDisplayed={showPassword}
          passwordValue={password}
          displayPassword={setShowPassword}
          myOnChange={setPassword}
          label="Nueva contraseña"
        />
        {/* --- OPCIONES (RECORDARME Y OLVIDÉ CONTRASEÑA) --- */}
        <div className="flex items-center justify-between text-sm px-2 text-center">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-emerald-600 border-gray-300 rounded "
            />
            <label htmlFor="remember" className="text-gray-600">
              Recordarme
            </label>
          </div>
          <Link
            href={recoveryAccountLink}
            className="font-medium text-emerald-600 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {/* --- BOTÓN DE INICIAR SESIÓN --- */}
        <button
          type="submit"
          className="w-full bg-primary text-white font-medium py-2 px-4 rounded-xl hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-300"
        >
          Iniciar Sesión
        </button>
      </form>
    </>
  );
}
