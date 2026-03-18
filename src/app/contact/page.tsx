import { Mail, MapPin, Phone, Instagram, Facebook, Globe, Clock, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Hubungi Kami - PT Paletindo Prakarsa Unggul",
  description: "Dapatkan penawaran harga terbaik untuk supply palet plastik industri. Kami melayani pengiriman logistik sekala nasional.",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white pt-24 pb-0 flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* Left Side: Solid Corporate Info */}
        <div className="w-full lg:w-5/12 bg-zinc-900 text-white p-10 md:p-16 lg:p-24 relative overflow-hidden flex flex-col justify-center border-r border-zinc-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A373]/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Mulai Sinergi <br/><span className="italic text-[#D4A373] font-serif font-light">Supply Chain.</span>
            </h1>
            <p className="text-zinc-400 font-light text-lg mb-12 max-w-md leading-relaxed">
              Tim komersial B2B kami selalu siap sedia memberikan harga korporat terbaik dan analisis kebutuhan logistik untuk pabrik Anda.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-zinc-800 border border-zinc-700/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#D4A373] group-hover:text-zinc-900 group-hover:border-[#D4A373] transition-colors duration-300 shadow-lg">
                  <MapPin className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#D4A373] mb-2">Pusat Operasional</h4>
                  <a href="https://maps.app.goo.gl/U49BaoBxpcoPw7hV8" target="_blank" rel="noopener noreferrer" className="font-light text-lg text-zinc-300 leading-relaxed hover:text-[#D4A373] transition-colors block">
                    Jelupang, Serpong Utara<br/>
                    South Tangerang City<br/>
                    Banten 15323
                  </a>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-zinc-800 border border-zinc-700/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#D4A373] group-hover:text-zinc-900 group-hover:border-[#D4A373] transition-colors duration-300 shadow-lg">
                  <Phone className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#D4A373] mb-2">Direct Channel</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-zinc-500 mb-1">Telp / Fax</p>
                      <a href="tel:0215374295" className="block text-xl font-medium text-white hover:text-[#D4A373] transition-colors">(021) 5374295</a>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 mb-1">Fast Respon HP</p>
                      <a href="tel:+6287877662097" className="block text-xl font-medium text-white hover:text-[#D4A373] transition-colors">087-877-66-2097</a>
                      <a href="tel:+6281288197597" className="block text-xl font-medium text-white hover:text-[#D4A373] transition-colors">0812-8819-7597</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-zinc-800 border border-zinc-700/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#D4A373] group-hover:text-zinc-900 group-hover:border-[#D4A373] transition-colors duration-300 shadow-lg">
                  <Mail className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold text-[#D4A373] mb-2">Email Korporat</h4>
                  <div className="space-y-1">
                    <a href="mailto:Paletindointimakmur@yahoo.co.id" className="block text-lg font-medium text-white hover:text-[#D4A373] transition-colors break-all">
                      Paletindointimakmur@yahoo.co.id
                    </a>
                    <a href="mailto:Marketing@paletindo.com" className="block text-lg font-medium text-white hover:text-[#D4A373] transition-colors break-all">
                      Marketing@paletindo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-zinc-800 flex gap-4">
              <a href="#" className="w-12 h-12 bg-zinc-800/50 border border-zinc-700/50 rounded-full flex items-center justify-center text-zinc-400 hover:bg-[#D4A373] hover:text-zinc-900 hover:border-[#D4A373] transition-colors"><Facebook className="w-5 h-5 stroke-[1.5]" /></a>
              <a href="#" className="w-12 h-12 bg-zinc-800/50 border border-zinc-700/50 rounded-full flex items-center justify-center text-zinc-400 hover:bg-[#D4A373] hover:text-zinc-900 hover:border-[#D4A373] transition-colors"><Instagram className="w-5 h-5 stroke-[1.5]" /></a>
              <a href="#" className="w-12 h-12 bg-zinc-800/50 border border-zinc-700/50 rounded-full flex items-center justify-center text-zinc-400 hover:bg-[#D4A373] hover:text-zinc-900 hover:border-[#D4A373] transition-colors"><Globe className="w-5 h-5 stroke-[1.5]" /></a>
            </div>
          </div>
        </div>

        {/* Right Side: Map & Direct Form Overlay */}
        <div className="w-full lg:w-7/12 relative min-h-[60vh] bg-zinc-100 flex items-center justify-center">
            
            {/* Interactive Full Screen Map */}
            <iframe 
              src="https://maps.google.com/maps?q=Jelupang,%20Serpong%20Utara,%20South%20Tangerang%20City,%20Banten%2015323&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Floating Quick Action */}
            <div className="relative z-10 bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl shadow-zinc-900/10 border border-white max-w-sm m-4">
               <div className="w-16 h-16 bg-[#D4A373] rounded-2xl flex items-center justify-center text-zinc-900 shadow-lg mb-6 -mt-12 mx-auto">
                 <MessageSquare className="w-8 h-8 stroke-[1.5]" />
               </div>
               <h3 className="text-2xl font-bold text-center text-zinc-900 mb-2 tracking-tight">Tanya Langsung</h3>
               <p className="text-center text-zinc-500 text-sm font-light mb-8">Butuh respon kilat dibawah 15 menit? Gunakan jalur prioritas WhatsApp kami.</p>
               
               <a href="https://wa.me/6287877662097" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#25D366]/20">
                 Kirim Pesan via WhatsApp
               </a>
               
               <div className="flex items-center justify-center gap-2 mt-6 text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                 <Clock className="w-4 h-4 stroke-[1.5]" /> Buka Senin - Sabtu (08.00 - 17.00)
               </div>
            </div>

        </div>
      </div>
    </div>
  );
}
