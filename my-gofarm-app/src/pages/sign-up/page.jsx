'use client';

const roles = [
    {
        title: "Farmer",
        desc: "Sell your produce directly to buyers without middlemen",
        icon: "🌱",
        bgColor: "bg-green-700",
        delay: "0s"
    },
    {
        title: "Buyer",
        desc: "Purchase fresh produce directly from verified farms",
        icon: "🛒",
        bgColor: "bg-amber-800",
        delay: "0.1s"
    },
    {
        title: "Distributor",
        desc: "Provide logistics and delivery services for farm produce",
        icon: "🚚",
        bgColor: "bg-green-600",
        delay: "0.2s"
    },
    {
        title: "Cooperative",
        desc: "Manage multiple farms and collective sales",
        icon: "👥",
        bgColor: "bg-yellow-500",
        delay: "0.3s"
    },
];

export default function RoleSelection() {
    return (
        <div className="min-h-screen bg-[#f5f1e8] flex flex-col items-center justify-center px-6 py-10 font-sans text-[#111111]">
            <div className="flex items-center gap-2 mb-8 animate-fadeUp">
                <span className="text-xl">🌱</span>
                <h1 className="text-green-800 font-bold text-2xl tracking-tight">GOfarm Palace</h1>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-4 animate-fadeUp text-center">
                Welcome to GOfarm Palace
            </h2>

            <p className="text-gray-500 text-lg mb-12 animate-fadeUp opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
                Who are you?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                {roles.map((role, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl shadow-sm p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl animate-fadeUp opacity-0"
                        style={{ animationDelay: role.delay, animationFillMode: 'forwards' }}
                    >
                        <div className={`w-16 h-16 rounded-full ${role.bgColor} flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-inner`}>
                            {role.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{role.title}</h3>
                        <p className="text-gray-500 leading-relaxed">
                            {role.desc}
                        </p>
                    </div>
                ))}
            </div>
            <a href="/my-gofarm-app/public" className="mt-12 text-gray-400 hover:text-green-800 font-medium transition-colors animate-fadeUp flex items-center gap-2">
                <span>←</span> Back to Home
            </a>
        </div>
    );
}