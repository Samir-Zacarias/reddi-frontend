import RecoveryWizard from "@/src/components/basics/auth/RecoveryWizard";
import Image from "next/image";
import logo from "@/src/assets/images/logo.svg";

export default function PasswordRecoveryPage() {
  return (
    <>
      <div className="md:w-4/5">
        <Image src={logo} alt="logo text" className="my-6 mx-auto" />
        <RecoveryWizard />
      </div>
    </>
  );
}
