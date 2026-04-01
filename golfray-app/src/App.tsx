'use client';


// Product Data to keep the JSX clean
const products = [
    { id: 1, name: "Fresh Tomatoes", price: "₦12,000", unit: "per basket", location: "Kaduna State", farm: "Sunrise Farms", rating: "4.8", img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80", organic: true },
    { id: 2, name: "Yellow Corn (Maize)", price: "₦18,500", unit: "per bag", location: "Kano State", farm: "Golden Harvest", rating: "4.6", img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80", organic: false },
    { id: 3, name: "Fresh Cassava", price: "₦8,500", unit: "per bag", location: "Ogun State", farm: "Heritage Roots", rating: "4.9", img: "https://images.unsplash.com/photo-1635338140417-66b93108f97b?auto=format&fit=crop&q=80", organic: true },
    { id: 4, name: "Organic Spinach", price: "₦6,500", unit: "per crate", location: "Plateau State", farm: "Green Valley Organic", rating: "5.0", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80", organic: true },
    { id: 5, name: "Sweet Peppers", price: "₦15,000", unit: "per crate", location: "Kaduna State", farm: "Sunrise Farms", rating: "4.7", img: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80", organic: true },
    { id: 6, name: "White Rice", price: "₦45,000", unit: "per bag", location: "Kebbi State", farm: "Rice Valley Cooperative", rating: "4.5", img: "https://images.unsplash.com/photo-1586201327693-866199f1230e?auto=format&fit=crop&q=80", organic: false },
];

export default function App() {
    return (
        <div className="bg-[#F9F9F7] font-lato text-[#111111]">

            {/* HEADER */}
            <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-[100] px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#2D5A27] rounded-lg flex items-center justify-center text-white text-xs font-bold">GP</div>
                    <h1 className="text-[#2D5A27] font-bold text-xl tracking-tight font-serif">GOfarm Palace</h1>
                </div>
                <nav className="hidden lg:flex gap-8 text-[#666666] font-medium">
                    <a href="#" className="text-[#2D5A27]">Home</a>
                    <a href="#" className="hover:text-[#2D5A27] transition">Marketplace</a>
                    <a href="#" className="hover:text-[#2D5A27] transition">How It Works</a>
                    <a href="#" className="hover:text-[#2D5A27] transition">About</a>
                    <a href="#" className="hover:text-[#2D5A27] transition">Contact</a>
                </nav>
                <div className="flex items-center gap-4 md:gap-6">
                    <a href="#" className="text-[#666666] font-medium hidden sm:block">Login</a>
                    <button className="bg-[#2D5A27] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#23471f] transition shadow-md">
                        Register
                    </button>
                </div>
            </header>

            {/* HERO */}
            <section className="relative h-[90vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1594488651099-001691372d3b?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="African Farming" />
                    <div className="absolute inset-0 bg-black/45"></div>
                </div>
                <div className="relative z-10 container mx-auto px-6">
                    <div className="max-w-4xl text-white">
                        <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-serif">
                            Empowering Farmers. <br /> Connecting Markets. <br /> Growing Africa.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed opacity-90">
                            Nigeria's leading agricultural marketplace connecting farmers directly with buyers. Fair prices, verified farms, reliable delivery.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#2D5A27] px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg">
                                Sell Your Produce
                            </button>
                            <button className="bg-white text-[#2D5A27] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg">
                                Explore Marketplace
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED PRODUCTS */}
            <section className="py-16 px-6 bg-[#F9F9F7]">
                <div className="container mx-auto">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h3 className="text-[32px] font-bold text-[#111111] mb-1 font-serif">Featured Products</h3>
                            <p className="text-[#666666] text-sm">Fresh from verified farms across Nigeria</p>
                        </div>
                        <button className="border border-[#2D5A27] text-[#2D5A27] px-5 py-2 rounded-lg font-medium hover:bg-[#2D5A27] hover:text-white transition">
                            View All <span>→</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition">
                                <div className="relative h-[240px]">
                                    <img src={product.img} className="w-full h-full object-cover" alt={product.name} />
                                    {product.organic && (
                                        <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded-full text-[11px] font-bold text-[#2D5A27]">🌿 Organic</div>
                                    )}
                                    <div className="absolute top-3 right-3 bg-white rounded-full p-1.5">
                                        <div className="w-4 h-4 bg-[#2D5A27] rounded-full flex items-center justify-center text-[10px] text-white">✓</div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h4 className="text-[18px] font-bold">{product.name}</h4>
                                    <div className="flex items-center gap-1 mb-3 text-yellow-400 text-sm">
                                        ★ <span className="text-black font-bold text-[13px]">{product.rating}</span>
                                    </div>
                                    <div className="text-[13px] text-[#666666] mb-5">
                                        <p>{product.farm}</p>
                                        <p>📍 {product.location}</p>
                                    </div>
                                    <p className="text-[22px] font-bold text-[#2D5A27] mb-6">
                                        {product.price} <span className="text-[12px] font-normal text-gray-400">{product.unit}</span>
                                    </p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <button className="bg-[#2D5A27] text-white py-2.5 rounded-lg text-[13px] font-bold hover:bg-[#23471f]">Add to Cart</button>
                                        <button className="border border-[#2D5A27] text-[#2D5A27] py-2.5 rounded-lg text-[13px] font-bold hover:bg-gray-50">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CHALLENGE SECTION */}
            <section className="py-24 bg-[#FAF9F6] px-6">
                <div className="container mx-auto text-center max-w-3xl mb-16">
                    <h2 className="text-5xl font-bold mb-4 font-serif">The Challenge We're Solving</h2>
                    <p className="text-[#666666] text-lg">Breaking down barriers in Nigerian agriculture</p>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: "↗", title: "Middlemen Exploitation", text: "Farmers lose up to 60% of profits to intermediaries", stat: "60%" },
                        { icon: "📦", title: "Post-Harvest Losses", text: "Billions lost annually due to poor storage", stat: "₦4B+" },
                        { icon: "🛡️", title: "Lack of Trust", text: "No transparency in sourcing or fair pricing", stat: "0%" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-3xl text-center shadow-sm">
                            <div className="w-16 h-16 bg-green-50 text-[#2D5A27] rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">{item.icon}</div>
                            <h5 className="text-xl font-bold mb-4">{item.title}</h5>
                            <p className="text-gray-500 mb-6 leading-relaxed">{item.text}</p>
                            <p className="text-4xl font-bold text-[#2D5A27]">{item.stat}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-3 font-serif">How GOfarm Works</h2>
                    <p className="text-[#666666] text-lg">Simple, transparent, effective</p>
                </div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl">
                    {[
                        { step: 1, title: "Register & Get Verified", desc: "Simple onboarding process with farm verification." },
                        { step: 2, title: "List Your Produce", desc: "Upload products with photos. AI suggests market prices." },
                        { step: 3, title: "Sell & Track Delivery", desc: "Receive orders with real-time tracking from farm to customer." }
                    ].map((item) => (
                        <div key={item.step} className="text-center">
                            <div className="w-20 h-20 bg-[#2D5A27] text-white rounded-full flex items-center justify-center mx-auto mb-8 text-3xl font-bold shadow-xl">{item.step}</div>
                            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* IMPACT SECTION */}
            <section className="bg-[#2D5A27] py-28 text-white text-center px-6">
                <h2 className="text-5xl font-medium mb-6 font-serif">Our Impact</h2>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div>
                        <div className="text-5xl font-medium mb-4">12,500+</div>
                        <p className="text-green-100 text-lg font-semibold">Farmers Empowered</p>
                    </div>
                    <div>
                        <div className="text-6xl font-medium mb-4">45,000</div>
                        <p className="text-green-100 text-lg font-semibold">Tonnes Delivered</p>
                    </div>
                    <div>
                        <div className="text-6xl font-medium mb-4">250+</div>
                        <p className="text-green-100 text-lg font-semibold">Communities Impacted</p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#0A1121] text-white py-24 px-6">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-20">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-[#2D5A27] rounded-lg"></div>
                            <h1 className="text-white font-bold text-xl font-serif">GOfarm Palace</h1>
                        </div>
                        <p className="text-gray-400">Empowering farmers across Nigeria</p>
                    </div>
                    <div>
                        <h6 className="font-bold mb-8 text-lg">Product</h6>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Marketplace</a></li>
                            <li><a href="#" className="hover:text-white transition">For Farmers</a></li>
                            <li><a href="#" className="hover:text-white transition">For Buyers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-bold mb-8 text-lg">Company</h6>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">About</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-bold mb-8 text-lg">Legal</h6>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                            <li><a href="#" className="hover:text-white transition">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2026 GOfarm Palace. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}