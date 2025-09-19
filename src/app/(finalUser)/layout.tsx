import { Suspense } from "react";

import UserHeaderServer from "@/src/components/features/finalUser/header/UserHeaderServer";
import UserHeaderSkeleton from "@/src/components/features/finalUser/header/UserHeaderSkeleton";
import UserFooter from "@/src/components/features/finalUser/UserFooter";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<UserHeaderSkeleton />}>
        <UserHeaderServer />
      </Suspense>
      <main className="pt-[9rem] pb-[4.45rem]">{children}</main>
      <UserFooter />
    </>
  );
}
