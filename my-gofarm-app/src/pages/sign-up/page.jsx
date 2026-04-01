'use client';

import { useEffect } from "react";
import { Sprout, ShoppingCart, Truck, Users } from "lucide-react";

const roles = [
    {
        title: "Farmer",
        desc: "Sell your produce directly to buyers without middlemen",
        icon: Sprout,
        bgColor: "bg-green-800",
        delay: "0s",
        path: "/dashboard"
    },
    {
        title: "Buyer",
        desc: "Purchase fresh produce directly from verified farms",
        icon: ShoppingCart,
        bgColor: "bg-[#8B4513]",
        delay: "0.1s",
        path: "/marketplace"
    },
    {
        title: "Distributor",
        desc: "Provide logistics and delivery services for farm produce",
        icon: Truck,
        bgColor: "bg-green-700",
        delay: "0.2s",
        path: "/distributor"
    },
    {
        title: "Cooperative",
        desc: "Manage multiple farms and collective sales",
        icon: Users,
        bgColor: "bg-yellow-600",
        delay: "0.3s",
        path: "/cooperative"
    },
];

export default function SignIn() {

    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes fadeUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .animate-fadeUp {
                animation: fadeUp 0.8s ease forwards;
            }
        `;
        document.head.appendChild(style);
    }, []);

    return (
        <div className="min-h-screen bg-[#f5f1e8] flex flex-col items-center justify-center px-6 py-10 font-sans">
            <div className="flex items-center gap-2 mb-8 animate-fadeUp">
                <Sprout className="w-8 h-8 text-green-700" />
                <h1 className="text-green-800 font-semibold text-2xl">
                    GOfarm Palace
                </h1>
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-800 mb-4 text-center animate-fadeUp">
                Welcome to GOfarm Palace
            </h2>
            <p
                className="text-gray-600 text-xl mb-12 opacity-0 animate-fadeUp"
                style={{ animationDelay: "0.1s" }}
            >
                Who are you?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                {roles.map((role, index) => {
                    const Icon = role.icon;
                    return (
                        <a href={role.path} key={index}>
                        <div
                            key={index}
                            className="group bg-white rounded-xl shadow-md p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl opacity-0 animate-fadeUp"
                            style={{ animationDelay: role.delay }}
                        >
                            <div
                                className={`w-16 h-16 rounded-full ${role.bgColor} flex items-center justify-center text-xl mb-6 transition-transform duration-500 group-hover:rotate-6`}
                            >
                                <Icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-2xl text-gray-800 mb-2">
                                {role.title}
                            </h3>

                            <p className="text-gray-500">
                                {role.desc}
                            </p>
                        </div>
                        </a>
                    );
                })}
            </div>

            <a
                href="/"
                className="mt-10 text-gray-500 hover:text-gray-800 transition animate-fadeUp"
                style={{ animationDelay: "0.4s" }}
            >
                ← Back to Home
            </a>
        </div>
    );
}