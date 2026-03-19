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
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#D4A373]/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-800/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo & Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl mb-6 shadow-2xl">
            <Box className="w-8 h-8 text-[#D4A373]" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
            Admin Panel
          </h1>
          <p className="text-zinc-500 text-sm">
            PT Paletindo Prakarsa Unggul — CMS Dashboard
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-4 h-4 text-zinc-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@paletindo.com"
                  required
                  className="block w-full pl-11 pr-4 py-3.5 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 focus:border-[#D4A373]/50 transition-all text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-4 h-4 text-zinc-500" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="block w-full pl-11 pr-12 py-3.5 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#D4A373]/50 focus:border-[#D4A373]/50 transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || authLoading}
              className="group w-full flex items-center justify-center gap-3 bg-[#D4A373] hover:bg-[#C19263] text-zinc-900 font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider shadow-lg shadow-[#D4A373]/20"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin"></div>
              ) : (
                <>
                  Masuk ke Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-600 text-xs mt-8">
          &copy; {new Date().getFullYear()} PT Paletindo Prakarsa Unggul. Panel ini hanya untuk admin.
        </p>
      </div>
    </div>
  );
}
