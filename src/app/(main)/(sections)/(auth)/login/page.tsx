import Image from "next/image";
import Link from "next/link";
import SessionButton from "@/src/components/basics/LinkButton";
import facebookLogo from "@/src/assets/images/facebooklogo.svg";
import googleLogo from "@/src/assets/images/googlelogo.svg";
import AppleIcon from "@/src/components/icons/AppleIcon";
import PhoneIcon from "@/src/components/icons/PhoneIcon";
import FormTitle from "@/src/components/basics/auth/FormTitle";

const sessionsButtonData = [
  {
    provider: "Facebook",
    icon: <Image src={facebookLogo} alt="" className="h-8 w-8 "></Image>,
    href: "",
  },
  {
    provider: "Google",
    icon: <Image src={googleLogo} alt="" className="h-8 w-8"></Image>,
    href: "",
  },
  {
    provider: "Apple",
    icon: <AppleIcon className="h-8 w-8" />,
    href: "",
  },
  {
    provider: "Celular",
    icon: <PhoneIcon className="h-8 w-8" />,
    href: "",
  },
];

export default function Login() {
  return (
    <>
      <FormTitle title="Iniciar sesión" />
      {sessionsButtonData.map((button) => (
        <SessionButton
          key={button.provider}
          href={button.href}
          className="w-full h-14 gap-2 hover:bg-primary hover:border-white md:w-[70%] lg:w-[50%] truncate"
        >
          {button.icon}
          <span>
            Continuar con <b>{button.provider}</b>
          </span>
        </SessionButton>
      ))}
      <p className="text-center">
        ¿Todavía no tienes una cuenta?{" "}
        <Link
          href="/registro"
          className="text-primary font-bold font-roboto hover:underline"
        >
          Regístrate
        </Link>
      </p>
    </>
  );
}
