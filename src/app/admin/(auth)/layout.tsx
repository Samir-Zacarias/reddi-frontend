import Image from "next/image";
import GuestFooter from "@/src/components/features/layout/GuestFooter";
import loginImage from "@/src/assets/images/loginAdmin.svg";

export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex flex-col items-center justify-center md:justify-start p-6 md:flex-row-reverse md:p-6 min-h-screen bg-[#ECEFF0]">
        <div className="relative w-full md:w-3/4 md:aspect-square aspect-video">
          <Image
            priority={true}
            src={loginImage}
            alt="login del administrador"
            fill={true}
            className="object-cover md:rounded-[32px] rounded-2xl"
          />
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          {children}
        </div>
      </section>
      <GuestFooter />
    </>
  );
}
