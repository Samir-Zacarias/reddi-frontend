import Image from "next/image";
import facebookLogo from "@/src/assets/images/facebookLogo.png";
import googleLogo from "@/src/assets/images/googleLogo.png";
import AppleIcon from "@/src/components/icons/AppleIcon";
import PhoneIcon from "@/src/components/icons/PhoneIcon";
import SessionButton from "@/src/components/basics/LinkButton";
import FormTitle from "@/src/components/features/user/FormTitle";

export default function Registro() {
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
          className="w-full h-14 gap-2 hover:bg-primary hover:border-white md:w-[60%]"
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
