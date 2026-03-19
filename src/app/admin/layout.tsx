"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  FileText,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Box,
} from "lucide-react";
import { AuthProvider, useAuth } from "@/components/providers/AuthProvider";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Produk", href: "/admin/products", icon: Package },
  { label: "Artikel", href: "/admin/articles", icon: FileText },
];

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, profile, isLoading, isAdmin, signOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Skip auth protection for login page
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (!isLoginPage && !isLoading && !user) {
      router.push("/admin/login");
    }
  }, [user, isLoading, router, isLoginPage]);

  useEffect(() => {
    if (!isLoginPage && !isLoading && user && profile && !isAdmin) {
      router.push("/");
    }
  }, [user, profile, isAdmin, isLoading, router, isLoginPage]);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Login page — render directly without sidebar
  if (isLoginPage) {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-zinc-800 border-t-[#D4A373] rounded-full animate-spin"></div>
          <p className="text-zinc-500 text-sm">Memuat dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user || (profile && !isAdmin)) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    router.push("/admin/login");
  };

  // Get breadcrumb from pathname
  const pathSegments = pathname.split("/").filter(Boolean);
  const breadcrumbs = pathSegments.map((segment, index) => ({
    label: segment.charAt(0).toUpperCase() + segment.slice(1),
    href: "/" + pathSegments.slice(0, index + 1).join("/"),
    isLast: index === pathSegments.length - 1,
  }));

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-zinc-900 border-r border-zinc-800/50 z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-zinc-800/50">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center">
                <Box className="w-5 h-5 text-[#D4A373]" />
              </div>
              <div>
                <h2 className="text-white font-bold text-sm leading-none">
                  Paletindo
                </h2>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">
                  Admin CMS
                </p>
              </div>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                  isActive
                    ? "bg-[#D4A373]/10 text-[#D4A373] border border-[#D4A373]/20"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User Info & Sign Out */}
        <div className="p-4 border-t border-zinc-800/50">
          <div className="flex items-center gap-3 px-4 py-3 mb-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4A373] to-[#C19263] flex items-center justify-center text-zinc-900 font-bold text-sm shrink-0">
              {profile?.full_name?.charAt(0)?.toUpperCase() || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {profile?.full_name || user?.email || "Admin"}
              </p>
              <p className="text-[10px] text-[#D4A373] uppercase tracking-widest font-bold">
                Administrator
              </p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-500 hover:text-red-400 hover:bg-red-500/5 transition-all text-sm font-medium"
          >
            <LogOut className="w-4 h-4" />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-zinc-400 hover:text-white transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-sm">
                {breadcrumbs.map((crumb, i) => (
                  <span key={crumb.href} className="flex items-center gap-1.5">
                    {i > 0 && (
                      <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
                    )}
                    {crumb.isLast ? (
                      <span className="text-white font-medium">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-zinc-500 hover:text-zinc-300 transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </span>
                ))}
              </nav>
            </div>

            <Link
              href="/"
              target="_blank"
              className="text-xs text-zinc-500 hover:text-[#D4A373] transition-colors font-medium"
            >
              Lihat Website →
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AuthProvider>
  );
}
