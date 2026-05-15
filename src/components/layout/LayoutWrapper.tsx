"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RFQProvider } from "@/components/providers/RFQProvider";

import Breadcrumbs from "@/components/layout/Breadcrumbs";

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
      <div className="pt-24 md:pt-32">
        <Breadcrumbs />
      </div>
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />
    </RFQProvider>
  );
}
