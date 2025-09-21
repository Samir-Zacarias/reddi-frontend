import React, { useRef, useEffect } from "react";

type OtpInputProps = {
  value: string;
  myOnChange: (value: string) => void;
  length?: number;
  labelMessage?: string;
};

export default function OtpInputAdvanced({
  value,
  myOnChange,
  length = 5,
  labelMessage,
}: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // El índice del siguiente input a enfocar es simplemente la longitud del valor actual.
    const nextFocusIndex = value.length;

    if (nextFocusIndex < length && inputRefs.current[nextFocusIndex]) {
      inputRefs.current[nextFocusIndex]?.focus();
    } else if (nextFocusIndex === length && inputRefs.current[length - 1]) {
      inputRefs.current[length - 1]?.focus();
    }
  }, [value, length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Obtenemos solo el último carácter introducido, ignorando el resto.
    const typedValue = e.target.value.slice(-1);

    // Si es un número, lo añadimos al final de nuestro estado 'value' actual.
    if (/^[0-9]$/.test(typedValue) && value.length < length) {
      myOnChange(value + typedValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      myOnChange(value.slice(0, -1));
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "") // Limpiamos y nos quedamos solo con números
      .slice(0, length);

    if (pastedData) {
      myOnChange(pastedData);
    }
  };

  return (
    <div>
      <label className="font-semibold mb-2 block">{labelMessage}</label>
      <div className="flex justify-center space-x-2">
        {Array.from({ length }).map((_, index) => (
          <input
            id={`otp-${index}`}
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            value={value[index] || ""}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onPaste={handlePaste}
            onClick={() => {
              // Al hacer click, movemos el foco a la posición correcta
              const focusIndex = Math.min(value.length, length - 1);
              inputRefs.current[focusIndex]?.focus();
            }}
            className="w-full h-14 text-center text-2xl font-semibold bg-gray-100 border-2 border-gray-300 rounded-lg  transition duration-200"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
          />
        ))}
      </div>
    </div>
  );
}
