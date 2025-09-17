import Image from "next/image";
import loginImage from "@/src/assets/images/loginImage.svg";
import logo from "@/src/assets/images/logo.svg";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center p-6 pb-20 md:flex-row-reverse md:p-6 grow">
      <Image
        priority={true}
        src={loginImage}
        alt=""
        className="w-full md:aspect-square md:object-cover md:rounded-[32px]"
      ></Image>
      <div className="flex flex-col items-center gap-4 w-full">
        <Image src={logo} alt="logo text" className="my-6" />
        {children}
      </div>
    </section>
  );
}
