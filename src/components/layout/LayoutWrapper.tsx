"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RFQProvider } from "@/components/providers/RFQProvider";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <RFQProvider>
      <Navbar />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </RFQProvider>
  );
}
