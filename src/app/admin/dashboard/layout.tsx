import AdminAside from "@/src/components/features/admin/AdminAside";
import AdminHeader from "@/src/components/features/admin/AdminHeader";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminAside />
      <AdminHeader />
      <main className="md:ml-[14rem] mt-[86px] bg-[#F0F2F5B8]">{children}</main>
    </>
  );
}
