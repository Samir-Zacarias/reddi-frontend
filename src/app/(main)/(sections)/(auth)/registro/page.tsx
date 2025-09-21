import Image from "next/image";
import facebookLogo from "@/src/assets/images/facebookLogo.png";
import googleLogo from "@/src/assets/images/googleLogo.png";
import AppleIcon from "@/src/components/icons/AppleIcon";
import PhoneIcon from "@/src/components/icons/PhoneIcon";
import SessionButton from "@/src/components/basics/LinkButton";
import FormTitle from "@/src/components/basics/auth/FormTitle";

export default function Registro() {
  const sessionsButtonData = [
    {
      provider: "Facebook",
      icon: <Image src={facebookLogo} alt="" className="h-8 w-8"></Image>,
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
      href: "/registro/celular",
    },
  ];

  return (
    <>
      <FormTitle title="Crea una cuenta" />
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
    </>
  );
}
