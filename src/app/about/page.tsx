import Image from "next/image";
import { ShieldCheck, Target, TrendingUp, Handshake, MapPin, Quote, Star } from "lucide-react";

export const metadata = {
  title: "Tentang Kami - PT Paletindo Prakarsa Unggul",
  description: "Profil Perusahaan PT Paletindo Prakarsa Unggul, mitra tepercaya kebutuhan palet plastik industri dan container logistik.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-zinc-50 font-sans selection:bg-amber-400 selection:text-blue-950">
      
      {/* 1. Avant-Garde Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-end pb-24 pt-32 overflow-hidden bg-zinc-900 border-b border-zinc-800/50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent z-10"></div>
          {/* Abstract geometric shapes to represent packaging/pallets */}
          <div className="absolute top-1/4 right-[10%] w-96 h-96 border-[1px] border-zinc-700/50 rotate-12 bg-zinc-800/50 backdrop-blur-3xl rounded-3xl z-0"></div>
          <div className="absolute top-1/2 right-[5%] w-64 h-64 border-[1px] border-[#D4A373]/30 -rotate-12 bg-[#D4A373]/10 backdrop-blur-xl rounded-xl z-0"></div>
          <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-zinc-800/50 blur-[120px] rounded-full z-0 pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <h2 className="text-[#D4A373] font-medium tracking-widest uppercase text-sm mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#D4A373]"></span>
              Profil Perusahaan
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
              Pondasi<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A373] to-[#C19263]">Terkuat</span> Logistik Anda.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed border-l-2 border-[#D4A373] pl-6 ml-2">
              Lebih dari sekadar suplier, kami adalah mitra tepercaya bagi pelaku usaha dan manufaktur untuk kebutuhan palet plastik dan box container industri.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Story & Vision - Asymmetric Sticky Scroll Layout */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            
            {/* Sticky Left Column */}
            <div className="w-full lg:w-5/12">
              <div className="sticky top-32 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
                  Dedikasi Terhadap <br />
                  <span className="italic text-[#D4A373] font-serif font-light">Mutu & Integritas.</span>
                </h2>
                <div className="w-24 h-2 bg-zinc-900"></div>
                <p className="text-lg text-zinc-500 leading-relaxed font-light">
                  PT Paletindo Prakarsa Unggul berdedikasi melayani dunia industri dan pelaku usaha. Kami berfokus pada penyediaan alat bantu logistik esensial seperti palet plastik dan box plastik kualitas terbaik untuk memperlancar rantai pasok Anda.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-200">
                  <div>
                    <h4 className="text-5xl font-bold text-zinc-900 mb-2">Pusat</h4>
                    <p className="text-sm text-zinc-400 font-bold uppercase tracking-wider">Palet B2B</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-bold text-zinc-900 mb-2">100<span className="text-[#D4A373]">%</span></h4>
                    <p className="text-sm text-zinc-400 font-bold uppercase tracking-wider">Pelayanan Terbaik</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrolling Right Column (Content) */}
            <div className="w-full lg:w-7/12 space-y-24">
              
              {/* Block 1 */}
              <div className="relative p-8 md:p-12 bg-zinc-50 border border-zinc-100 rounded-3xl shadow-xl shadow-zinc-200/50 group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#D4A373] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 mt-4">Fokus Kami</h3>
                <p className="text-zinc-500 text-lg leading-relaxed font-light">
                  Menjadi penyedia palet plastik dan box container yang responsif dan dapat diandalkan oleh pabrik maupun pelaku usaha di seluruh Indonesia, baik melalui pemesanan online maupun offline.
                </p>
              </div>

              {/* Block 2 */}
              <div className="relative p-8 md:p-12 bg-zinc-900 rounded-3xl shadow-xl shadow-zinc-900/10 group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <TrendingUp className="w-8 h-8 text-[#D4A373]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 mt-4">Solusi Yang Kami Tawarkan</h3>
                <ul className="space-y-4 text-zinc-400 text-lg font-light">
                  <li className="flex gap-4 items-start">
                    <span className="w-2 h-2 rounded-full bg-[#D4A373] mt-2.5 shrink-0"></span>
                    <p>Katalog produk terstruktur dengan spesifikasi lengkap (dimensi, berat, material, fungsi, dan warna).</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-2 h-2 rounded-full bg-[#D4A373] mt-2.5 shrink-0"></span>
                    <p>Transparansi informasi untuk memudahkan proses Purchase Order (PO) perusahaan Anda.</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="w-2 h-2 rounded-full bg-[#D4A373] mt-2.5 shrink-0"></span>
                    <p>Layanan konsultasi dan fast-response via WhatsApp untuk kebutuhan *custom* atau stok mendesak.</p>
                  </li>
                </ul>
              </div>

              {/* Block 3 */}
              <div className="relative p-8 md:p-12 bg-[#D4A373] rounded-3xl shadow-xl shadow-[#D4A373]/20 group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <ShieldCheck className="w-8 h-8 text-zinc-900" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Kemudahan Akses</h3>
                <p className="text-zinc-900/80 text-lg font-medium leading-relaxed">
                  Kami memahami tingginya mobilitas Anda. Oleh karena itu, platform E-Catalog kami dirancang agar sangat mudah diakses melalui *smartphone* kapanpun Anda butuhkan.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. Social Proof & Marquee Testimonials */}
      <section id="testimonials" className="py-24 bg-zinc-900 overflow-hidden border-t border-white/5 relative">
        {/* Background typographic noise */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold text-white/[0.02] whitespace-nowrap select-none pointer-events-none tracking-tighter mix-blend-overlay">
          TRUSTED PARTNER
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Dipercaya Oleh <br />
              <span className="text-[#D4A373]">Pabrik & Distibutor Besar.</span>
            </h2>
            <div className="flex -space-x-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center font-bold text-white text-xs">
                  User
                </div>
              ))}
              <div className="w-12 h-12 rounded-full bg-[#D4A373] border-2 border-zinc-900 flex items-center justify-center font-bold text-zinc-900 text-xs">
                +1K
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for Marquee (Requires added styles in globals.css, but we'll inline a complex layout here) */}
        <div className="flex space-x-6 pb-8 overflow-x-auto snap-x snap-mandatory px-4 md:px-8 hide-scrollbar">
          {/* We use horizontal scroll with snap for a premium horizontal feel */}
          {[
            {
              text: "Seller Ramah, produk lengkap berkualitas, harga murah tapi bukan barang murahan. Infonya jokowi belum pernah beli disini.... Berarti harus beli duluan disini biar ga kalah sama beliau 👍👍👍",
              author: "Tri Puji Widyanto", role: "Local Guide", rating: 5
            },
            {
              text: "Recomended.. Barang bagus... Seller ramah.. Amanah... Ada kelebihan bayar... Pun tetap transparan... Berkah dan sehat selalu",
              author: "akhsany taqwim", role: "Customer", rating: 5
            },
            {
              text: "Lengkap, untuk kebutuhan rumah tangga ada, kebutuhan hobi ada, kebutuhan industri juga ada",
              author: "Heri St", role: "Local Guide", rating: 5
            },
            {
              text: "Item itemnya ok punya ,bisa buat usaha dan pakai sendri ,sukses selalu",
              author: "Teguh Wahyono", role: "Customer", rating: 5
            },
            {
              text: "Pelayanan Bagus, Packing Rapi, Respon Cepat.",
              author: "Mulki Sprei", role: "Customer", rating: 5
            }
          ].map((testi, idx) => (
            <div key={idx} className="min-w-[85vw] md:min-w-[400px] snap-center bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors flex flex-col">
              <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-zinc-300 font-light leading-relaxed mb-8 italic flex-grow">"{testi.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4A373] to-[#C19263] flex items-center justify-center shrink-0">
                  <span className="font-bold text-zinc-900 text-lg">{testi.author.charAt(0).toUpperCase()}</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">{testi.author}</h4>
                  <p className="text-sm text-zinc-400">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Grand Contact & Maps Interface */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl shadow-zinc-900/10 flex flex-col lg:flex-row">
            
            {/* Contact Details */}
            <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A373]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                 Mari Diskusi <br/>Kebutuhan Anda.
               </h2>
               <p className="text-zinc-400 font-light text-lg mb-12">
                 Kunjungi kantor representatif kami atau jadwalkan pertemuan. Kami berdedikasi memberikan konsultasi B2B terbaik untuk infrastruktur palet perusahaan Anda.
               </p>

               <div className="space-y-8 relative z-10">
                 <div className="flex gap-4 items-start group">
                   <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-zinc-900 transition-colors shrink-0">
                     <MapPin className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-white mb-2">Pusat / Kantor Representatif</h4>
                     <p className="text-zinc-400 font-light leading-relaxed">
                       Jl. Raya Ps. Kemis No.11, Kutajaya<br />Kec. Ps. Kemis, Kab. Tangerang, Banten 15560
                     </p>
                   </div>
                 </div>

                 <div className="flex gap-4 items-start group">
                   <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-zinc-900 transition-colors shrink-0">
                     <Handshake className="w-5 h-5" />
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-white mb-2">Kolaborasi B2B</h4>
                     <a href="mailto:Paletindointimakmur@yahoo.co.id" className="text-[#D4A373] hover:text-[#C19263] font-medium transition-colors">
                       Paletindointimakmur@yahoo.co.id
                     </a>
                     <div className="mt-2 text-zinc-400 font-light">
                      0878-7766-2097 / 0812-8819-7597
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Premium Maps Glass Wrapper */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full bg-zinc-200">
               {/* Embed Google maps using an iframe. 
                   We use Tangerang as the generic location. */}
               <iframe 
                 src="https://maps.google.com/maps?q=PT.%20Paletindo%20Prakarsa%20Unggul,%20Jl.%20Raya%20Ps.%20Kemis%20No.11&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                 className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               />
               
               {/* Overlay to give it a premium tint before hover */}
               <div className="absolute inset-0 bg-zinc-900/10 pointer-events-none mix-blend-multiply"></div>
               
               {/* Floating Tag over map */}
               <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white/50 text-center pointer-events-none">
                 <div className="mx-auto w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center mb-2">
                    <span className="text-[#D4A373] font-bold">PT</span>
                 </div>
                 <p className="font-bold text-zinc-900 text-sm">Headquarters</p>
               </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
