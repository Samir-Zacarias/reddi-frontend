"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SortButton from "./SortButton";
import { Restaurant, OrderDir, Sortables } from "@/src/lib/admin/type";

// Los nombres de las columnas de la tabla
const headerNames: Array<
  Partial<Record<keyof Restaurant | "actions", string>>
> = [
  { id: "Id aliado" },
  { name: "Nombre del negocio" },
  { nit: "NIT" },
  { address: "Dirección" },
  { type: "Tipo de Negocio" },
  { totalOrders: "Total Pedidos" },
  { state: "Estado" },
  { actions: "Acciones" },
];

// Columnas que son ordenables
const headerSortable: Sortables[] = ["id", "name", "totalOrders"];

export default function TableHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams(); // searchParams es un objeto de solo lectura
  const router = useRouter();

  // Estados locales que reflejan los searchParams
  const [orderBy, setOrderBy] = useState(searchParams.get("orderBy") || "");
  const [orderDirection, setOrderDirection] = useState<OrderDir | null>(
    (searchParams.get("order") as OrderDir) || null
  );

  // Sincronizar el estado local con los searchParams cuando cambian
  useEffect(() => {
    const currentOrderBy = searchParams.get("orderBy");
    const currentOrderDirection =
      (searchParams.get("order") as OrderDir) || null;

    // Solo actualizar si el valor del searchParam es diferente al estado actual
    if (orderBy !== (currentOrderBy || "")) {
      setOrderBy(currentOrderBy || "");
    }
    if (orderDirection !== currentOrderDirection) {
      setOrderDirection(currentOrderDirection);
    }
  }, [searchParams, orderBy, orderDirection]);

  const handleSorter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const params = new URLSearchParams(searchParams);
    const newOrderBy = e.currentTarget.id;

    // Lógica para determinar el nuevo orden y dirección
    let nextOrderDirection: OrderDir | null;

    if (orderBy !== newOrderBy) {
      // Si se cambia de columna, resetear la dirección a ascendente
      nextOrderDirection = "asc";
    } else {
      // Si se hace clic en la misma columna, alternar
      nextOrderDirection =
        orderDirection === "asc"
          ? "desc"
          : orderDirection === "desc"
          ? null
          : "asc";
    }

    // Actualizar los searchParams y navegar
    params.set("orderBy", newOrderBy); // Siempre setear orderBy
    if (nextOrderDirection) {
      params.set("order", nextOrderDirection);
    } else {
      params.delete("order");
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <thead className="bg-[#E7E7E7]">
      <tr>
        {headerNames.map((header) => {
          const key = Object.keys(header)[0];
          const value = Object.values(header)[0];

          // Comprobar si la clave es de tipo Restaurant (para headerSortable)
          const isSortableKey = headerSortable.includes(key as Sortables);
          const currentSortOrder = key === orderBy ? orderDirection : null;

          return (
            <th
              key={key}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-[#525252] uppercase tracking-wider truncate"
            >
              {isSortableKey ? (
                <SortButton
                  id={key}
                  name={value}
                  header={value}
                  onClick={handleSorter}
                  className="flex items-center gap-2 uppercase"
                  currentSortOrder={currentSortOrder}
                />
              ) : (
                <div className="flex items-center gap-2">{value}</div>
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
