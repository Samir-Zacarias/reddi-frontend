"use server";

import ClientShell from "@/src/components/features/admin/dashboard/partners/ClientShell";
import FiltersSection from "@/src/components/features/admin/dashboard/partners/FiltersSection";
import RestaurantlistServer from "@/src/components/features/admin/dashboard/partners/RestaurantListServer";
import RestaurantListSkeleton from "@/src/components/features/admin/dashboard/partners/RestaurantListSkeleton";
import { Suspense } from "react";

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

const businessSelect = [
  { value: "res", label: "Restaurante" },
  { value: "caf", label: "Cafetería" },
];

const stateSelect = [
  { value: "open", label: "Activo" },
  { value: "closed", label: "Inactivo" },
];

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const searchParamsKey = Object.values(params).join("");

  return (
    <div className="bg-[#F0F2F5] px-8 py-6 min-h-screen">
      {/* Título */}
      <h1 className="font-semibold">Gestión de aliados</h1>
      <h2 className="font-roboto font-normal mb-5">
        Comprueba los datos de tus aliados
      </h2>
      {/* Fila 1: Sección de filtros */}

      <ClientShell />

      {/*<FiltersSection businessTypes={businessSelect} states={stateSelect} />

      {/* Fila 2: Tabla de Restaurants */}
      {/*<Suspense fallback={<RestaurantListSkeleton />}>*/}
      {/*</div><RestaurantlistServer*/}
      {/*searchParams={searchParams}*/}
      {/*key={searchParamsKey}*/}
      {/*/>*/}
      {/*</Suspense>*/}
    </div>
  );
}
