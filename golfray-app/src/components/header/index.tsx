import React from "react";

const LandingPage: React.FC = () => {
    return (
        <div className="bg-[#F9F9F7] text-[#111111] font-lato">

            {/* HEADER */}
            <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-[100] px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#2D5A27] rounded-lg flex items-center justify-center text-white text-xs font-bold">GP</div>
                    <h1 className="text-[#2D5A27] font-bold text-xl font-serif">
                        GOfarm Palace
                    </h1>
                </div>

                <nav className="hidden lg:flex gap-8 text-[#666] font-medium">
                    <a href="#" className="text-[#2D5A27]">Home</a>
                    <a href="#" className="hover:text-[#2D5A27]">Marketplace</a>
                    <a href="#" className="hover:text-[#2D5A27]">How It Works</a>
                    <a href="#" className="hover:text-[#2D5A27]">About</a>
                    <a href="#" className="hover:text-[#2D5A27]">Contact</a>
                </nav>

                <div className="flex gap-4">
                    <a href="#" className="text-[#666] hidden sm:block">Login</a>
                    <button className="bg-[#2D5A27] text-white px-6 py-2 rounded-lg">
                        Register
                    </button>
                </div>
            </header>

            {/* HERO */}
            <section className="relative h-[90vh] flex items-center pt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1594488651099-001691372d3b"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 px-6 max-w-4xl text-white">
                    <h2 className="text-5xl md:text-7xl font-bold font-serif mb-6">
                        Empowering Farmers. <br /> Connecting Markets. <br /> Growing Africa.
                    </h2>

                    <p className="mb-10 text-lg text-gray-200">
                        Nigeria's leading agricultural marketplace connecting farmers directly with buyers.
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-[#2D5A27] px-8 py-4 rounded-lg">
                            Sell Your Produce
                        </button>
                        <button className="bg-white text-[#2D5A27] px-8 py-4 rounded-lg">
                            Explore Marketplace
                        </button>
                    </div>
                </div>
            </section>

            {/* FEATURED PRODUCTS */}
            <section className="py-16 px-6">
                <h3 className="text-3xl font-serif mb-10">Featured Products</h3>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: "Fresh Tomatoes", price: "₦12,000" },
                        { name: "Yellow Corn", price: "₦18,500" },
                        { name: "Fresh Cassava", price: "₦8,500" },
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-xl shadow p-5">
                            <div className="h-40 bg-gray-200 mb-4"></div>
                            <h4 className="font-bold">{item.name}</h4>
                            <p className="text-[#2D5A27] font-bold">{item.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-24 bg-white text-center">
                <h2 className="text-4xl font-serif mb-10">How It Works</h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {["Register", "List Produce", "Sell & Deliver"].map((step, i) => (
                        <div key={i}>
                            <div className="w-16 h-16 bg-[#2D5A27] text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                                {i + 1}
                            </div>
                            <h4 className="font-bold">{step}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <h2 className="text-4xl font-serif mb-6">
                    Join Nigeria's Smart Agricultural Marketplace
                </h2>

                <button className="bg-[#2D5A27] text-white px-10 py-4 rounded-lg">
                    Get Started
                </button>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#0A1121] text-white py-10 text-center">
                <p>© 2026 GOfarm Palace</p>
            </footer>
        </div>
    );
};

export default LandingPage;