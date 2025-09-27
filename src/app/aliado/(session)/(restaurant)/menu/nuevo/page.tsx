import NewDishWizard from "@/src/components/features/partner/dashboard/menu/newDish/NewDishWizard";

export default function NewDishPage() {
  return (
    <div className="bg-[#F0F2F5] px-8 py-6 min-h-screen">
      {/* Título */}
      <h1 className="font-semibold">Crear plato</h1>
      {/* Formulario para crear un nuevo plato*/}
      <section className="bg-white p-6 rounded-xl shadow-sm mt-6">
        <NewDishWizard />
      </section>
    </div>
  );
}
