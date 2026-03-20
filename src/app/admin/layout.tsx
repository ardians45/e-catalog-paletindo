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
  ExternalLink,
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
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-zinc-200 border-t-[#D4A373] rounded-full animate-spin"></div>
          <p className="text-zinc-500 text-sm font-medium">Memuat...</p>
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
    <div className="min-h-screen bg-zinc-50 flex font-sans selection:bg-[#D4A373]/30">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-zinc-950/20 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-zinc-200 z-50 flex flex-col transition-all duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-8">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <Box className="w-5 h-5 text-[#D4A373]" />
              </div>
              <div>
                <h2 className="text-zinc-900 font-bold text-base leading-none tracking-tight">
                  Paletindo
                </h2>
                <p className="text-zinc-400 text-[10px] uppercase font-bold tracking-[0.15em] mt-1.5 grayscale group-hover:grayscale-0 transition-all">
                  CMS Control
                </p>
              </div>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
          <div className="px-4 py-2">
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Main Menu</p>
          </div>
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[#D4A373]/10 text-[#B8860B] shadow-sm shadow-[#D4A373]/5"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isActive ? "bg-white text-[#D4A373]" : "text-zinc-400 group-hover:text-zinc-900"}`}>
                  <item.icon className="w-4.5 h-4.5" />
                </div>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User Info & Sign Out */}
        <div className="p-6 border-t border-zinc-100">
          <div className="bg-zinc-50 rounded-2xl p-4 mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-[#D4A373] font-bold text-sm shrink-0">
              {profile?.full_name?.charAt(0)?.toUpperCase() || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-zinc-900 truncate">
                {profile?.full_name || user?.email || "Admin"}
              </p>
              <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">
                Administrator
              </p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-zinc-500 hover:text-red-500 hover:bg-red-50 transition-all text-sm font-bold"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0 relative">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-zinc-200 px-4 sm:px-8 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden w-10 h-10 border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-colors bg-white shadow-sm shrink-0"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Breadcrumb - Hidden on very small screens */}
              <nav className="hidden md:flex items-center gap-2 text-sm">
                <Link href="/admin" className="text-zinc-400 hover:text-zinc-900 transition-colors font-medium">Dashboard</Link>
                {breadcrumbs.filter(b => b.label !== "Admin").map((crumb, i) => (
                  <span key={crumb.href} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-zinc-300" />
                    {crumb.isLast ? (
                      <span className="text-zinc-900 font-bold tracking-tight">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-zinc-400 hover:text-zinc-900 transition-colors font-medium"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </span>
                ))}
              </nav>

              {/* Mobile Title (visible only on mobile) */}
              <div className="md:hidden">
                <h1 className="text-zinc-900 font-bold text-sm tracking-tight">Paletindo CMS</h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                target="_blank"
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-zinc-900 text-white text-[10px] sm:text-xs font-bold rounded-xl hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-950/10"
              >
                <span className="hidden xs:inline">Visit Site</span>
                <ExternalLink className="w-3 h-3 text-[#D4A373]" />
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 w-full px-4 sm:px-8 py-6 sm:py-8 lg:px-12 lg:py-10 max-w-[1400px] mx-auto">
          {children}
        </main>
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
