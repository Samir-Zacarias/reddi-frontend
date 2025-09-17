import Image from "next/image";
import Link from "next/link";
import SessionButton from "@/src/components/basics/LinkButton";
import facebookLogo from "@/src/assets/images/facebookLogo.png";
import googleLogo from "@/src/assets/images/googleLogo.png";
import AppleIcon from "@/src/components/icons/AppleIcon";
import PhoneIcon from "@/src/components/icons/PhoneIcon";
import FormTitle from "@/src/components/features/user/FormTitle";

const sessionsButtonData = [
  {
    provider: "Facebook",
    icon: <Image src={facebookLogo} alt=""></Image>,
    href: "",
  },
  {
    provider: "Google",
    icon: <Image src={googleLogo} alt=""></Image>,
    href: "",
  },
  {
    provider: "Apple",
    icon: <AppleIcon />,
    href: "",
  },
  {
    provider: "Celular",
    icon: <PhoneIcon />,
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
          className="w-full h-14 gap-2 hover:bg-primary hover:border-white md:w-[60%]"
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
