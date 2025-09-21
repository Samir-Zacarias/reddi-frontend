"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import RecoveryStep1 from "./RecoveryStep1";
import RecoveryStep2 from "./RecoveryStep2";
import RecoveryStep3 from "./RecoveryStep3";

// URL del que parte el wizard, en caso de mover estructura de carpetas actualizar
const actualUrl = "/admin/login/recuperar-cuenta";

export default function RegisterWizard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const currentStep = searchParams.get("step");

  useEffect(() => {
    const validSteps = ["1", "2", "3"];
    // Verifica que se esté en un paso válido
    if (!validSteps.includes(currentStep || "")) {
      router.replace(`${actualUrl}?step=1`);
      return;
    }
    // Si se intenta acceder al paso 2 sin haber completado el paso 1 redirige al paso 1
    if (currentStep === "2" && email === "") {
      router.replace(`${actualUrl}?step=1`);
      return;
    }
    // Si se intenta acceder al paso 3 sin haber verificado el teléfono redirige al paso 1
    if (currentStep === "3" && !isPhoneVerified) {
      router.replace(`${actualUrl}?step=1`);
      return;
    }
  }, [currentStep, router, email, isPhoneVerified]);

  const step1Handler = (emailValue: string) => {
    setEmail(emailValue);
    console.log("El correo es", emailValue);
    // Llamada a la API
    router.push(`${actualUrl}?step=2`);
  };

  const step2Handler = (codeValue: string) => {
    console.log("Se está enviando el código", codeValue);
    // Llamada a la API
    setIsPhoneVerified(true);
    router.push(`${actualUrl}?step=3`);
  };

  const step3Handler = (newPassword: string) => {
    console.log("La nueva contraseña...", newPassword);
    // Llamada a la API
  };

  if (!["1", "2", "3"].includes(currentStep || "")) {
    return null;
  }

  if (currentStep === "2" && email === "") {
    return null;
  }

  if (currentStep === "3" && !isPhoneVerified) {
    return null;
  }

  switch (currentStep) {
    case "1":
      return (
        <RecoveryStep1
          title="Has olvidado tu contraseña"
          onSubmit={step1Handler}
        />
      );
    case "2":
      return (
        <RecoveryStep2 title="Verificación de código" onSubmit={step2Handler} />
      );
    case "3":
      return (
        <RecoveryStep3
          title="Establezca una nueva contraseña"
          onSubmit={step3Handler}
        />
      );
    default:
      return null;
  }
}
