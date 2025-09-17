import RootHeader from "@/src/components/features/layout/RootHeader";
import RootFooter from "@/src/components/features/layout/RootFooter";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RootHeader />
      <div className="mt-[4.5rem] flex flex-col items-center md:flex-row-reverse md:p-6 grow">
        {children}
      </div>
      <RootFooter />
    </>
  );
}
