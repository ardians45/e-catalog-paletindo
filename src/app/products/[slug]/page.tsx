import Link from "next/link";
import { ChevronRight, ArrowLeft, Download, ShoppingCart, MessageCircle, FileText, CheckCircle2, ShieldCheck } from "lucide-react";
import productsData from "../../../../dummy_data.json";

// Helper to slugify names for IDs
const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // Find product by slug/id
  const productIndex = parseInt(params.slug.split('-').pop() || "0");
  const rawProduct = productsData[productIndex];

  if (!rawProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Link href="/products" className="text-[#D4A373] hover:underline">Kembali ke Katalog</Link>
        </div>
      </div>
    );
  }

  const product = {
    id: params.slug,
    name: rawProduct.name,
    slug: params.slug,
    category: rawProduct.categories[0] || "Produk Industri",
    description: rawProduct.description.replace(/<[^>]+>/g, ' ').trim(),
    images: [rawProduct.image || "/images/products/placeholder.png"],
    specs: {
      dimension: `${rawProduct.dimensions.length_outer} x ${rawProduct.dimensions.width_outer} x ${rawProduct.dimensions.height_outer} mm`,
      material: rawProduct.material || "Plastik PP/HDPE",
      color: rawProduct.color || "Sesuai Gambar",
      applications: rawProduct.applications.join(", "),
    },
    features: [
      "Material berkualitas tinggi",
      "Standar industri nasional",
      "Tahan banting dan awet",
      "Mudah dibersihkan",
      "Cocok untuk logistik & gudang"
    ]
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen pt-24 pb-20">
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav className="flex items-center text-sm font-medium text-zinc-500 gap-2">
          <Link href="/" className="hover:text-zinc-900 transition-colors">Beranda</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-zinc-900 transition-colors">Produk</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/categories/palet" className="hover:text-zinc-900 transition-colors">{product.category}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-zinc-900 font-bold truncate max-w-[200px] sm:max-w-xs">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Product Section */}
        <div className="bg-white rounded-[2.5rem] border border-zinc-200/50 overflow-hidden shadow-xl shadow-zinc-200/30 mb-20">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left: Interactive Image Gallery */}
            <div className="w-full lg:w-3/5 p-6 md:p-10 bg-white lg:border-r border-zinc-100 flex flex-col">
              <Link href="/products" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors font-medium mb-8 w-fit tracking-wide">
                <ArrowLeft className="w-5 h-5" /> Kembali
              </Link>
              
              <div className="flex-1 bg-zinc-50 rounded-3xl border border-zinc-100 p-8 flex items-center justify-center relative overflow-hidden group">
                {/* Decorative glow */}
                <div className="absolute inset-0 bg-transparent transition-opacity group-hover:opacity-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4A373]/5 rounded-full blur-[80px] pointer-events-none"></div>
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      loading="lazy"
                      className="w-full max-w-lg object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-700 shadow-2xl rounded-xl"
                    />
                  </div>
    
                  {/* Thumbnails */}
                  <div className="flex gap-4 mt-6">
                    {product.images.map((img, i) => (
                      <button key={i} className={`w-24 h-24 rounded-2xl bg-white border-2 overflow-hidden ${i === 0 ? 'border-[#D4A373] shadow-md shadow-[#D4A373]/10' : 'border-zinc-200 hover:border-zinc-300'} transition-all`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img} alt={`Thumbnail ${i}`} loading="lazy" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
            </div>

            {/* Right: Sticky Details & Specs */}
            <div className="w-full lg:w-2/5 p-8 md:p-12 relative bg-zinc-50/50">
               <div className="sticky top-32">
                 <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                   {product.category}
                 </div>
                 
                 <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight tracking-tight">
                   {product.name}
                 </h1>

                 {/* Quick Specs Highlight */}
                 <div className="bg-white border border-zinc-100 shadow-sm rounded-2xl p-6 mb-8 flex flex-col gap-4">
                    <div className="flex justify-between items-center pb-4 border-b border-zinc-100">
                      <span className="text-zinc-500 font-light text-sm w-1/3">Dimensi</span>
                      <span className="text-zinc-900 font-medium text-right">{product.specs.dimension}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500 font-light text-sm w-1/3">Material</span>
                      <span className="text-zinc-900 font-bold text-right text-lg">{product.specs.material}</span>
                    </div>
                 </div>

                 <p className="text-zinc-500 font-light leading-relaxed mb-10">
                   {product.description}
                 </p>

                 {/* Sticky Actions */}
                 <div className="flex flex-col gap-3">
                    <button className="w-full flex items-center justify-center gap-3 bg-zinc-900 text-white py-4 rounded-xl font-medium text-lg hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                      <ShoppingCart className="w-5 h-5 text-[#D4A373]" />
                      Tambah ke Keranjang RFQ
                    </button>
                    <a href="https://wa.me/6287877662097" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-white text-zinc-900 border border-zinc-200 py-4 rounded-xl font-medium text-lg hover:bg-zinc-50 hover:border-zinc-300 transition-colors shadow-sm">
                      <MessageCircle className="w-5 h-5 text-emerald-600" />
                      Tanya via WhatsApp
                    </a>
                 </div>
                 
                 <button className="w-full mt-6 flex items-center justify-center gap-2 text-zinc-400 text-sm font-medium hover:text-[#D4A373] transition-colors py-2">
                   <Download className="w-4 h-4" /> Unduh Spesifikasi PDF (2.1 MB)
                 </button>

               </div>
            </div>
          </div>
        </div>

        {/* Deep Dive Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
           {/* Detailed Specs */}
           <div className="bg-white rounded-3xl p-8 md:p-12 border border-zinc-200/50 shadow-xl shadow-zinc-200/30">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 text-[#D4A373] rounded-xl flex items-center justify-center shadow-sm">
                 <FileText className="w-6 h-6 stroke-[1.5]" />
               </div>
               <h3 className="text-2xl font-bold text-zinc-900">Spesifikasi Teknis</h3>
             </div>
             
             <table className="w-full text-left border-collapse">
               <tbody>
                 {Object.entries(product.specs).map(([key, val], idx) => (
                   <tr key={key} className={idx % 2 === 0 ? "bg-zinc-50/50" : "bg-white"}>
                     <th className="py-4 px-4 font-light text-zinc-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</th>
                     <td className="py-4 px-4 font-medium text-zinc-900">{val}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>

           {/* Features */}
           <div className="bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-2xl shadow-zinc-900/10 relative overflow-hidden">
             {/* Decor */}
             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#D4A373]/10 rounded-full blur-3xl"></div>
             
             <div className="flex items-center gap-4 mb-8 relative z-10">
               <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 text-[#D4A373] rounded-xl flex items-center justify-center shadow-lg">
                 <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
               </div>
               <h3 className="text-2xl font-bold text-white tracking-tight">Keunggulan Utama</h3>
             </div>

               <ul className="space-y-6 relative z-10">
               {product.features.map((feature, i) => (
                 <li key={i} className="flex gap-4 items-start group">
                   <div className="mt-0.5 shrink-0 bg-zinc-800 rounded-full p-1 group-hover:bg-[#D4A373] group-hover:bg-opacity-20 transition-colors">
                     <CheckCircle2 className="w-5 h-5 text-[#D4A373] transition-colors" />
                   </div>
                   <p className="text-zinc-400 font-light text-lg leading-relaxed">{feature}</p>
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
