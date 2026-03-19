"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShoppingCart, X } from "lucide-react";
import Link from "next/link";

export interface RFQItem {
  id: string | number;
  name: string;
  material: string;
  qty: number;
  image: string;
  category?: string;
}

interface RFQContextType {
  items: RFQItem[];
  addItem: (item: RFQItem) => void;
  removeItem: (id: string | number) => void;
  updateQuantity: (id: string | number, qty: number) => void;
  clearRFQ: () => void;
}

const RFQContext = createContext<RFQContextType | undefined>(undefined);

export function RFQProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RFQItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; name: string } | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("rfq_items");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse RFQ items:", e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("rfq_items", JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addItem = (item: RFQItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
        );
      }
      return [...prev, item];
    });

    // Show toast
    setToast({ show: true, name: item.name });
    setTimeout(() => setToast(null), 5000);
  };

  const removeItem = (id: string | number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string | number, qty: number) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
    );
  };

  const clearRFQ = () => {
    setItems([]);
  };

  return (
    <RFQContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearRFQ }}
    >
      {children}
      
      {/* Global Toast Notification */}
      <AnimatePresence>
        {toast?.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, scale: 0.95, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-[100] w-[90%] max-w-md"
          >
            <div className="bg-zinc-900 border border-white/10 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4A373]/20 to-transparent pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-xl bg-[#D4A373]/20 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#D4A373]" />
              </div>
              
              <div className="flex-grow min-w-0">
                <p className="text-xs font-bold text-[#D4A373] uppercase tracking-widest mb-0.5">Berhasil Ditambahkan</p>
                <p className="text-sm font-medium text-white truncate pr-4">{toast.name}</p>
              </div>

              <div className="flex items-center gap-3">
                <Link 
                  href="/rfq" 
                  onClick={() => setToast(null)}
                  className="bg-white text-zinc-900 px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#D4A373] hover:text-white transition-all flex items-center gap-2"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Lihat RFQ
                </Link>
                <button 
                  onClick={() => setToast(null)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-zinc-500" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </RFQContext.Provider>
  );
}

export function useRFQ() {
  const context = useContext(RFQContext);
  if (context === undefined) {
    throw new Error("useRFQ must be used within an RFQProvider");
  }
  return context;
}
