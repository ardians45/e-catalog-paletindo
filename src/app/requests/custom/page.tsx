import { Wrench, Ruler, Weight, PackageOpen, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Request Custom Palet Plastik & Box - PT Paletindo",
  description: "Bentuk, dimensi, dan material bisa disesuaikan dengan kebutuhan pergudangan Anda.",
};

export default function CustomRequestPage() {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen pt-32 pb-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-96 bg-zinc-900 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
           <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A373]/30 bg-[#D4A373]/10 px-4 py-2 text-sm text-[#D4A373] font-medium mb-6 backdrop-blur">
             <Wrench className="w-4 h-4" /> Molding Engineering
           </div>
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
             Rancang Dimensi Sesuai <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-[#D4A373]">Ekosistem Kargo Anda.</span>
           </h1>
           <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
             Pabrik, conveyor, dan tipe kontainer logistik tiap perusahaan berbeda. Beri tahu kami spesifikasi unik Anda, dan tim teknisi kami akan merancangkan palet / box ideal untuk Anda.
           </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-zinc-900/5 overflow-hidden border border-zinc-200/60 relative z-20">
           
           {/* Steps Indicator */}
           <div className="bg-zinc-50 border-b border-zinc-100 px-8 py-6 flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4A373] text-zinc-900 flex items-center justify-center font-bold text-sm">1</div>
                <span className="font-bold text-zinc-900">Spesifikasi Dasar</span>
              </div>
              <div className="h-px bg-zinc-200 flex-1 hidden sm:block mx-4"></div>
              <div className="flex items-center gap-3 opacity-40 grayscale">
                <div className="w-8 h-8 rounded-full bg-zinc-300 text-zinc-600 flex items-center justify-center font-bold text-sm">2</div>
                <span className="font-medium text-zinc-700">Informasi Beban</span>
              </div>
              <div className="h-px bg-zinc-200 flex-1 hidden sm:block mx-4"></div>
              <div className="flex items-center gap-3 opacity-40 grayscale">
                <div className="w-8 h-8 rounded-full bg-zinc-300 text-zinc-600 flex items-center justify-center font-bold text-sm">3</div>
                <span className="font-medium text-zinc-700">Kontak</span>
              </div>
           </div>

           {/* Form Area (Step 1 Visualized) */}
           <form className="p-8 md:p-12 space-y-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 {/* Jenis Produk */}
                 <div className="space-y-4 text-left">
                   <label className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                     <PackageOpen className="w-5 h-5 text-[#D4A373]" /> Tipe Customization
                   </label>
                   <div className="grid grid-cols-2 gap-4">
                     <label className="relative border-2 border-[#D4A373] bg-[#D4A373]/5 rounded-2xl p-4 cursor-pointer hover:bg-[#D4A373]/10 transition-colors">
                        <input type="radio" name="type" value="pallet" className="absolute top-4 right-4 text-[#D4A373] border-zinc-300 focus:ring-[#D4A373]" defaultChecked />
                        <span className="block font-bold text-zinc-900 mb-1">Palet Plastik</span>
                        <span className="text-sm text-zinc-500 font-light">Custom Cetak / Molding</span>
                     </label>
                     <label className="relative border-2 border-zinc-200 bg-zinc-50 rounded-2xl p-4 cursor-pointer hover:border-zinc-300 transition-colors">
                        <input type="radio" name="type" value="box" className="absolute top-4 right-4 text-zinc-400 border-zinc-300" />
                        <span className="block font-bold text-zinc-700 mb-1">Box Container</span>
                        <span className="text-sm text-zinc-500 font-light">Food Grade / Industri</span>
                     </label>
                   </div>
                 </div>

                 {/* Material Preferensi */}
                 <div className="space-y-4">
                   <label className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                     Tingkat Material
                   </label>
                   <select className="w-full bg-white border border-zinc-200 rounded-xl p-4 focus:ring-[#D4A373] focus:border-[#D4A373] text-zinc-900 font-medium appearance-none transition-colors hover:border-zinc-300 shadow-sm">
                     <option>100% Original (Virgin HDPE) - Food Grade</option>
                     <option>Heavy Duty Recycled (Ramah Lingkungan)</option>
                     <option>Belum Tahu, Minta Rekomendasi</option>
                   </select>
                 </div>
              </div>

              {/* Dimensi */}
              <div className="space-y-6 pt-6 border-t border-zinc-100">
                 <label className="text-lg font-bold text-zinc-900 flex items-center gap-2">
                   <Ruler className="w-5 h-5 text-[#D4A373]" /> Target Dimensi Utama (mm)
                 </label>
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="relative">
                      <input type="number" placeholder="Panjang (L)" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-4 pl-12 focus:ring-[#D4A373] focus:border-[#D4A373] text-zinc-900 font-medium transition-colors shadow-sm" />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-medium">L</span>
                    </div>
                    <div className="relative">
                      <input type="number" placeholder="Lebar (W)" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-4 pl-12 focus:ring-[#D4A373] focus:border-[#D4A373] text-zinc-900 font-medium transition-colors shadow-sm" />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-medium">W</span>
                    </div>
                    <div className="relative">
                      <input type="number" placeholder="Tinggi (H)" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-4 pl-12 focus:ring-[#D4A373] focus:border-[#D4A373] text-zinc-900 font-medium transition-colors shadow-sm" />
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-medium">H</span>
                    </div>
                 </div>
              </div>

              {/* Requirement Khusus */}
              <div className="space-y-4 pt-6 border-t border-zinc-100">
                <label className="text-lg font-bold text-zinc-900">Keterangan Tambahan / Beban Spesifik</label>
                <textarea 
                  rows={4} 
                  placeholder="Misal: Harus bisa menahan beban statis min 5 Ton, akan ditaruh di cold storage suhu minus 10 derajat, dll..."
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-4 focus:ring-[#D4A373] focus:border-[#D4A373] text-zinc-900 font-light transition-colors shadow-sm"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10">
                <p className="text-zinc-500 text-sm flex items-center gap-2 font-light">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Data diamankan dengan enkripsi
                </p>
                <button type="button" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Lanjut Langkah 2
                  <Send className="w-4 h-4 text-[#D4A373]" />
                </button>
              </div>

           </form>
        </div>

      </div>
    </div>
  );
}
