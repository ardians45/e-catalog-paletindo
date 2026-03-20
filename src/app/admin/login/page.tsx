"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { Lock, Mail, Eye, EyeOff, ArrowRight, Box } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const { signIn, isLoading: authLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { error: signInError } = await signIn(email, password);
      if (signInError) {
        setError(signInError.message);
      } else {
        router.push("/admin");
      }
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-[#D4A373]/30">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4A373]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#D4A373]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-[440px] relative z-10 transition-all duration-700 animate-in fade-in slide-in-from-bottom-8">
        {/* Logo & Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white border border-zinc-200 rounded-[2rem] mb-8 shadow-xl shadow-zinc-200/50 group hover:scale-105 transition-transform duration-500">
            <div className="w-12 h-12 bg-zinc-950 rounded-[1.2rem] flex items-center justify-center">
              <Box className="w-6 h-6 text-[#D4A373]" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-zinc-900 tracking-tight mb-3">
            Admin Panel
          </h1>
          <p className="text-zinc-500 text-sm font-medium tracking-wide">
            PT Paletindo Prakarsa Unggul — CMS Control Center
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white border border-zinc-200/60 rounded-[2.5rem] p-10 shadow-2xl shadow-zinc-200/50 relative overflow-hidden group">
          {/* Subtle line at top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#D4A373]/10"></div>
          
          <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
            {/* Email Field */}
            <div className="space-y-2.5">
              <label
                htmlFor="email"
                className="block text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1"
              >
                Identification
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none">
                  <Mail className="w-4.5 h-4.5 text-zinc-400 group-focus-within/input:text-[#D4A373] transition-colors" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@paletindo.com"
                  required
                  className="block w-full pl-12 pr-4 py-4 bg-zinc-50/50 border border-zinc-200 rounded-2xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-[#D4A373]/5 focus:border-[#D4A373]/20 transition-all text-sm font-medium"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2.5">
              <label
                htmlFor="password"
                className="block text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] ml-1"
              >
                Security Key
              </label>
              <div className="relative group/input">
                <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none">
                  <Lock className="w-4.5 h-4.5 text-zinc-400 group-focus-within/input:text-[#D4A373] transition-colors" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="block w-full pl-12 pr-12 py-4 bg-zinc-50/50 border border-zinc-200 rounded-2xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-4 focus:ring-[#D4A373]/5 focus:border-[#D4A373]/20 transition-all text-sm font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4.5 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4.5 h-4.5" />
                  ) : (
                    <Eye className="w-4.5 h-4.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-[13px] font-medium px-5 py-3.5 rounded-2xl flex items-center gap-2 animate-in fade-in zoom-in duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || authLoading}
              className="group w-full flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-4.5 rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-widest shadow-xl shadow-zinc-900/10 active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <div className="flex items-center gap-2.5">
                  <span className="text-[#D4A373]">Masuk</span> Ke Dashboard
                  <ArrowRight className="w-4 h-4 text-[#D4A373] group-hover:translate-x-1.5 transition-transform" />
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <div className="w-px h-12 bg-zinc-200"></div>
          <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} PT Paletindo Prakarsa Unggul
          </p>
        </div>
      </div>
    </div>
  );
}
