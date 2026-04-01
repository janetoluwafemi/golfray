import React from "react";

const Home: React.FC = () => {
    return (
        <div className="bg-[#f5f1e8] font-sans min-h-screen flex flex-col items-center justify-center px-6 py-10">

            {/* Logo */}
            <div className="flex items-center gap-2 mb-8 animate-fadeUp">
                <span className="text-green-700 text-xl">🌱</span>
                <h1 className="text-green-800 font-medium text-2xl">
                    GOfarm Palace
                </h1>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-normal text-gray-800 mb-5 animate-fadeUp">
                Welcome to GOfarm Palace
            </h2>

            <p className="text-gray-500 text-lg mb-10 animate-fadeUp">
                Who are you?
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">

                {/* Farmer */}
                <div className="bg-white rounded-xl shadow-md p-8 transition transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl animate-fadeUp">
                    <div className="w-16 h-16 rounded-full bg-green-700 flex items-center justify-center text-white text-xl mb-4 transition transform hover:rotate-6">
                        🌱
                    </div>
                    <h3 className="text-2xl font-normal text-gray-800 mb-1">Farmer</h3>
                    <p className="text-gray-500 mt-3 text-base">
                        Sell your produce directly to buyers without middlemen
                    </p>
                </div>

                {/* Buyer */}
                <div className="bg-white rounded-xl shadow-md p-8 transition transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl animate-fadeUp">
                    <div className="w-16 h-16 rounded-full bg-amber-800 flex items-center justify-center text-white text-xl mb-4 transition transform hover:rotate-6">
                        🛒
                    </div>
                    <h3 className="text-2xl font-normal text-gray-800 mb-1">Buyer</h3>
                    <p className="text-gray-500 mt-3 text-base">
                        Purchase fresh produce directly from verified farms
                    </p>
                </div>

                {/* Distributor */}
                <div className="bg-white rounded-xl shadow-md p-8 transition transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl animate-fadeUp">
                    <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white text-xl mb-4 transition transform hover:rotate-6">
                        🚚
                    </div>
                    <h3 className="text-2xl font-normal text-gray-800 mb-1">Distributor</h3>
                    <p className="text-gray-500 mt-3 text-base">
                        Provide logistics and delivery services for farm produce
                    </p>
                </div>

                {/* Cooperative */}
                <div className="bg-white rounded-xl shadow-md p-8 transition transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl animate-fadeUp">
                    <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xl mb-4 transition transform hover:rotate-6">
                        👥
                    </div>
                    <h3 className="text-2xl font-normal text-gray-800 mb-1">Cooperative</h3>
                    <p className="text-gray-500 mt-3 text-base">
                        Manage multiple farms and collective sales
                    </p>
                </div>

            </div>

            {/* Back */}
            <a
                href="#"
                className="mt-8 text-gray-500 hover:text-gray-800 transition animate-fadeUp"
            >
                ← Back to Home
            </a>

        </div>
    );
};

export default Home;