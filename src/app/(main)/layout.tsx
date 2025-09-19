import GuestHeader from "@/src/components/features/main/GuestHeader";
import RootFooter from "@/src/components/features/layout/GuestFooter";
//import SearchBar from "@/src/components/features/main/SearchBar";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GuestHeader />
      {children}
      <RootFooter />
    </>
  );
}
