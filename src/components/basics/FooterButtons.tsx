"use client";

import React from "react";
import ArrowLeftIcon from "@/src/components/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/src/components/icons/ArrowRightIcon";

// --- DEFINICIÓN DE PROPS ---
type FooterButtonsProps = {
  onGoBack: () => void;
  onPreview: () => void;
  onSaveAndExit: () => void;
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void; // onSubmit puede recibir el evento

  backText?: string;
  previewText?: string;
  saveAndExitText?: string;
  nextText?: string;

  isSubmitting?: boolean;
};

export default function FooterButtons({
  onGoBack,
  onPreview,
  onSaveAndExit,
  onSubmit,
  backText = "Volver",
  previewText = "Vista previa",
  saveAndExitText = "Guardar y salir",
  nextText = "Siguiente",
  isSubmitting = false,
}: FooterButtonsProps) {
  return (
    <div className="flex items-center justify-between mt-12 border-t pt-6">
      {/* Botón de Volver */}
      <button
        type="button"
        className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={onGoBack}
        disabled={isSubmitting}
      >
        <ArrowLeftIcon />
        {backText}
      </button>

      {/* Grupo de botones de acción */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Botón de Vista Previa */}
        <button
          type="button"
          className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-green-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          onClick={onPreview}
          disabled={isSubmitting}
        >
          {previewText}
        </button>

        {/* Botón de Guardar y Salir */}
        <button
          type="button"
          className="px-5 py-2.5 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-xl hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          onClick={onSaveAndExit}
          disabled={isSubmitting}
        >
          {saveAndExitText}
        </button>

        {/* Botón de Siguiente/Enviar */}
        <button
          type="submit"
          className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-xl hover:bg-green-700 focus:outline-none flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Guardando..." : nextText}{" "}
          {/* Muestra un texto de carga */}
          {!isSubmitting && <ArrowRightIcon fill="#ffffff" />}
        </button>
      </div>
    </div>
  );
}
