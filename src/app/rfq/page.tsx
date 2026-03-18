import Link from "next/link";
import { Trash2, ArrowRight, MessageCircle, FileText, Package, Minus, Plus } from "lucide-react";

export default function RFQPage() {
  // Mock Cart Items
  const cartItems = [
    {
      id: 1,
      name: "Palet Heavy Duty NP-1000",
      material: "HDPE",
      qty: 50,
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Jolly Box Food Grade JB-205",
      material: "PP Co-Polymer",
      qty: 200,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] min-h-[90vh] pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">Draft <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] to-[#C19263]">Penawaran (RFQ)</span></h1>
            <p className="text-lg text-zinc-500 font-light">Review barang-barang yang ada di daftar permintaan Anda sebelum kami buatkan surat penawaran resmi melalui WhatsApp.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Cart Items */}
            <div className="w-full lg:w-2/3 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-3xl border border-zinc-200/60 shadow-xl shadow-zinc-200/40 flex flex-col sm:flex-row items-center gap-6 group hover:border-[#D4A373]/30 transition-colors">
                  <div className="w-full sm:w-32 h-32 bg-zinc-50 rounded-2xl border border-zinc-100 p-2 overflow-hidden shrink-0 relative flex items-center justify-center">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2" />
                  </div>
                  
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between w-full h-full gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#D4A373] transition-colors mb-1">{item.name}</h3>
                      <p className="text-sm font-light text-zinc-500 mb-4">{item.material}</p>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50 h-10 shadow-sm">
                          <button className="px-3 hover:bg-zinc-200 text-zinc-500 transition-colors"><Minus className="w-3 h-3"/></button>
                          <input type="number" value={item.qty} readOnly className="w-16 text-center bg-transparent border-none focus:ring-0 font-medium text-zinc-900 p-0" />
                          <button className="px-3 hover:bg-zinc-200 text-zinc-500 transition-colors"><Plus className="w-3 h-3"/></button>
                        </div>
                        <span className="text-sm font-medium text-zinc-400 uppercase tracking-widest">Pcs</span>
                      </div>
                    </div>

                    <button className="w-10 h-10 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors self-end sm:self-auto shrink-0 border border-red-100 hover:border-red-500">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              
              <Link href="/products" className="inline-flex items-center gap-2 text-zinc-500 font-medium hover:text-zinc-900 transition-colors py-4">
                 <ArrowRight className="w-4 h-4 rotate-180" /> Lanjut Pilih Produk
              </Link>
            </div>

            {/* Right: Summary & Action */}
            <div className="w-full lg:w-1/3">
              <div className="bg-zinc-900 rounded-[2rem] p-8 sticky top-32 shadow-2xl shadow-zinc-900/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4A373]/10 blur-2xl rounded-full"></div>
                
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                  <FileText className="w-6 h-6 text-[#D4A373]" />
                  Kirim Permintaan
                </h2>
                
                <div className="space-y-4 mb-8 relative z-10">
                  <div className="flex justify-between items-center text-zinc-400 font-light border-b border-white/5 pb-4">
                    <span>Total Item</span>
                    <span className="font-medium text-white text-lg">2 Model</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400 font-light border-b border-white/5 pb-4">
                    <span>Total Kuantitas</span>
                    <span className="font-medium text-white text-lg">250 Pcs</span>
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                  <p className="text-xs text-zinc-500 font-light leading-relaxed mb-4">
                    Format daftar permintaan akan dikurasi dan dikirim langsung menuju representatif sales B2B PT Paletindo Prakarsa Unggul via WhatsApp.
                  </p>
                  <button className="w-full flex items-center justify-center gap-2 bg-[#D4A373] text-zinc-900 py-4 rounded-xl font-medium text-lg hover:bg-[#C19263] hover:shadow-lg hover:shadow-[#D4A373]/20 transition-all">
                    <MessageCircle className="w-5 h-5 flex-shrink-0" />
                    Kirim via WhatsApp
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 bg-transparent text-white border border-white/10 py-3.5 rounded-xl font-medium hover:bg-white/5 transition-all">
                    Konsultasi Dulu
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
