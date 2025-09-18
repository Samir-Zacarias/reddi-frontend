import UserHeader from "@/src/components/features/finalUser/UserHeader";
import UserFooter from "@/src/components/features/finalUser/UserFooter";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserHeader
        userName="Pepito Núñez"
        address="Cra. 123 #32-21"
        notificationCount={8}
        cartCount={2}
      />
      <main className="pt-[9rem] pb-[4.45rem]">{children}</main>
      <UserFooter />
    </>
  );
}
