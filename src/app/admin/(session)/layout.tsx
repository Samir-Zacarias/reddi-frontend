import AdminAside, {
  NavLink,
} from "@/src/components/basics/dashboard/DashboardAside";
import AdminHeader from "@/src/components/basics/dashboard/DashboardHeader";

const actualURL = "/admin";

const navigationLinks: NavLink[] = [
  {
    name: "Dashboard",
    href: `${actualURL}/dashboard`,
  },
  {
    name: "Pedidos",
    href: `${actualURL}/orders`,
  },
  {
    name: "Usuarios",
    href: "#",
    subLinks: [
      { name: "Clientes", href: `${actualURL}/clientes` },
      { name: "Aliados", href: `${actualURL}/aliados` },
      { name: "Repartidores", href: `${actualURL}/repartidores` },
    ],
  },
  {
    name: "Banner",
    href: `${actualURL}/banner`,
  },
  {
    name: "Finanzas",
    href: `${actualURL}/finanzas`,
  },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminAside navigationLinks={navigationLinks} />
      <AdminHeader />
      <main className="md:ml-[14rem] mt-[86px] bg-[#F0F2F5B8]">{children}</main>
    </>
  );
}
