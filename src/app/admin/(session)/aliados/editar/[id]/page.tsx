import EditPartnerProfile from "@/src/components/features/admin/partners/editPartner/EditPartnerProfile";

export default function EditPage() {
  return (
    <div className="bg-[#F0F2F5] px-8 py-6 min-h-screen">
      {/* Título */}
      <h1 className="font-normal">
        <span className="font-semibold">Perfil del</span> Pizza Express
      </h1>
      {/* Fila 1: Sección de filtros */}
      <div className="mt-4 bg-white p-6 rounded-xl">
        <div className="">
          <EditPartnerProfile />
        </div>
      </div>
    </div>
  );
}
