'use client';

import { useState } from "react";
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Wallet,
    BarChart3,
    ShieldCheck,
    Settings,
    TrendingUp,
    CheckCircle,
    Clock,
    CreditCard,
    Plus,
    Menu,
    X
} from "lucide-react";

const productsData = [
    { id: 1, name: "Fresh Tomatoes", price: 12000, unit: "basket", available: 50, status: "In Stock", harvestedDate: "Feb 10" },
    { id: 2, name: "Sweet Peppers", price: 15000, unit: "crate", available: 30, status: "In Stock", harvestedDate: "Feb 9" }
];

export default function FarmerDashboard() {
    const [products, setProducts] = useState(productsData);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const SidebarContent = () => (
        <>
            <div className="p-8">
                <h1 className="text-[20px] font-semibold text-[#2D5A27] tracking-tight flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#2D5A27] rounded-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    GOfarm Palace
                </h1>
            </div>

            <nav className="flex flex-col gap-3 px-4">
                <div className="flex items-center gap-3 bg-[#F0F7EE] text-[#2D5A27] px-4 py-2.5 rounded-lg font-bold text-[15px] cursor-pointer">
                    <LayoutDashboard size={18} strokeWidth={2.5} />
                    Dashboard
                </div>

                {[
                    { name: "My Products", icon: Package },
                    { name: "Orders", icon: ShoppingCart },
                    { name: "Wallet", icon: Wallet },
                    { name: "Analytics", icon: BarChart3 },
                    { name: "Verification", icon: ShieldCheck },
                    { name: "Settings", icon: Settings },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-[#666666] hover:bg-gray-50 cursor-pointer transition-colors text-base font-normal">
                        <item.icon size={19} />
                        {item.name}
                    </div>
                ))}
            </nav>

            <div className="mt-auto p-6 border-t border-gray-50 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C7E9B0] rounded-full flex items-center justify-center text-[#2D5A27] text-sm font-bold shrink-0">
                    AJ
                </div>
                <div className="overflow-hidden">
                    <p className="text-[14px] font-bold text-gray-900 truncate">Adewale Johnson</p>
                    <p className="text-[12px] text-gray-500 font-medium">Sunrise Farms</p>
                </div>
            </div>
        </>
    );

    return (
        <div className="flex min-h-screen bg-[#F9F8F3] text-[#1A1A1A] font-sans">
            <aside className="hidden lg:flex w-[260px] bg-white border-r border-gray-100 flex-col sticky top-0 h-screen">
                <SidebarContent />
            </aside>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            <aside className={`fixed inset-y-0 left-0 w-[280px] bg-white z-50 transform transition-transform duration-300 lg:hidden flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="absolute top-4 right-4">
                    <button onClick={() => setSidebarOpen(false)}><X className="text-gray-500" /></button>
                </div>
                <SidebarContent />
            </aside>
            <div className="flex-1 flex flex-col min-w-0">
                <header className="bg-white px-6 lg:px-10 py-5 lg:py-7 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-gray-100 z-10 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-normal text-gray-900 leading-tight">Dashboard</h2>
                        <p className="hidden sm:block text-[#666666] text-normal">Welcome back, Adewale Johnson</p>
                    </div>
                    <button
                        className="lg:hidden p-2 bg-gray-50 rounded-md"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </header>

                <main className="p-4 lg:p-8 overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-8">
                        <StatCard icon={<TrendingUp size={20}/>} title="₦1,250,000" label="Total Sales" iconColor="text-green-600" />
                        <StatCard icon={<Clock size={20}/>} title="5" label="Pending Orders" iconColor="text-[#A67C52]" />
                        <StatCard icon={<CheckCircle size={20}/>} title="32" label="Delivered Orders" iconColor="text-green-600" />
                        <StatCard icon={<CreditCard size={20}/>} title="₦240,000" label="Wallet Balance" iconColor="text-[#CC9933]" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-white rounded-[20px] p-5 lg:p-8 shadow-sm border border-gray-100">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                                    <h3 className="text-[22px] font-bold text-gray-800">Your Products</h3>
                                    <button className="w-full sm:w-auto bg-[#2D5A27] text-white px-5 py-2.5 rounded-lg font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-[#24481f]">
                                        <Plus size={20} /> Add Product
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {products.map((product) => (
                                        <div key={product.id} className="p-4 lg:p-6 border border-gray-200 rounded-2xl bg-white">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                                <div className="flex items-center gap-4 lg:gap-5">
                                                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#E5E7EB] rounded-xl shrink-0" />
                                                    <div className="min-w-0">
                                                        <p className="text-base lg:text-[18px] font-normal text-gray-900 truncate">{product.name}</p>
                                                        <p className="text-xs lg:text-[14px] text-gray-600">
                                                            ₦{product.price.toLocaleString()} / {product.unit} • {product.available} units available
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="sm:text-right flex sm:block justify-between items-center">
                                                    <p className="text-[#4CAF50] text-[14px] font-normal">In Stock</p>
                                                    <p className="text-[12px] text-gray-600">Harvested: {product.harvestedDate}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="flex-1 sm:flex-none px-5 lg:px-6 py-3 border-2 border-[#2D5A27] text-[#2D5A27] rounded-lg font-normal text-[14px] hover:bg-gray-50">
                                                    Edit
                                                </button>
                                                <button className="flex-1 sm:flex-none px-5 lg:px-6 py-3 bg-[#E33B32] text-white rounded-lg font-normal text-[14px] hover:bg-red-700">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white rounded-[24px] p-5 lg:p-8 shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-normal text-gray-800 mb-5">Recent Orders</h3>
                                <div className="space-y-4">
                                    <div className="p-5 lg:p-6 border border-gray-200 rounded-[15px]">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="min-w-0">
                                                <p className="text-base lg:text-[18px] font-normal text-gray-900">Fresh Tomatoes</p>
                                                <p className="text-xs lg:text-[14px] text-gray-500 mb-2 truncate">50 baskets • Lagos Market</p>
                                                <p className="text-[#2D5A27] font-normal text-[16px]">₦600,000</p>
                                            </div>
                                            <span className="bg-[#FEF9C3] text-[#854D0E] px-3 lg:px-4 py-1 rounded-full text-[11px] lg:text-[13px] font-bold border border-[#FEF08A] shrink-0">
                                                Pending
                                            </span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3 mt-6">
                                            <button className="flex-1 bg-[#2D5A27] text-white py-3 rounded-lg font-bold text-[15px] hover:bg-[#23461e]">
                                                Accept
                                            </button>
                                            <button className="flex-1 bg-white text-[#2D5A27] py-3 rounded-lg font-bold text-[15px] border border-[#2D5A27] hover:bg-gray-50">
                                                Decline
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-6 border border-gray-200 rounded-[15px]">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-[18px] font-normal text-gray-900">Sweet Peppers</p>
                                                <p className="text-[14px] font-normal text-gray-500">30 crates • Green Grocers Ltd</p>
                                                <p className="text-[#2D5A27] font-normal text-[15px]">₦450,000</p>
                                            </div>
                                            <span className="bg-[#EFF6FF] text-[#1E40AF] px-4 py-1 rounded-full text-[14px] font-normal border border-[#DBEAFE]">
                                                Accepted
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 border border-gray-200 rounded-[15px]">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <p className="text-[18px] font-normal text-gray-900">Fresh Tomatoes</p>
                                                <p className="text-[14px] font-normal text-gray-500">75 baskets • City Wholesale</p>
                                                <p className="text-[#2D5A27] font-normal text-[15px]">₦900,000</p>
                                            </div>
                                            <span className="bg-[#F0FDF4] text-[#166534] px-4 py-1 rounded-full text-[14px] font-normal border border-[#DCFCE7]">
                                                In Transit
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-2 mb-4">
                                    <BarChart3 size={20} className="text-[#2D5A27]" />
                                    <h3 className="text-[20px] font-normal text-gray-800">Analytics</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                                    <div>
                                        <p className="text-[14px] font-normal text-gray-700 font-medium">Best-selling Product</p>
                                        <p className="text-[16px] font-normal text-gray-900">Fresh Tomatoes</p>
                                    </div>
                                    <div>
                                        <p className="text-[14px] font-normal text-gray-700 font-medium">This Month Sales</p>
                                        <p className="text-[26px] font-normal text-[#2D5A27]">₦489,000</p>
                                        <p className="text-[#4CAF50] text-[14px] font-normal">+12% from last month</p>
                                    </div>
                                    <div>
                                        <p className="text-[14px] font-normal text-black font-medium">Active Buyers</p>
                                        <p className="text-[24px] font-normal text-gray-900">28</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-sm border border-gray-100">
                                <h3 className="text-[20px] font-normal text-gray-800 mb-4">AI Price Suggestions</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                                    <div className="bg-[#F0FDF4] p-4 rounded-xl border border-[#DCFCE7]">
                                        <p className="font-semibold text-gray-900 text-[14px] mb-1">Tomatoes</p>
                                        <p className="text-[14px] text-gray-700 mb-1">Market average in Kaduna:
                                            <span className="text-[14px] font-bold text-gray-900">₦13,500/basket
                                            </span>
                                        </p>
                                        <p className="text-[11px] text-gray-600">Consider adjusting price for better sales</p>
                                    </div>
                                    <div className="bg-[#F0F9FF] p-4 rounded-xl border border-[#E0F2FE]">
                                        <p className="font-semibold text-gray-900 text-[14px]">Market Trend</p>
                                        <p className="text-[14px] text-gray-600">High demand for organic vegetables in your area</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function StatCard({ icon, title, label, iconColor }) {
    return (
        <div className="bg-white p-5 lg:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col min-h-[140px] lg:min-h-[180px]">
            <div className={`${iconColor} mb-4 lg:mb-8`}>{icon}</div>
            <p className="text-2xl lg:text-3xl font-normal text-gray-900 mb-0.5 tracking-tight">{title}</p>
            <p className="text-[#666666] font-normal text-sm lg:text-base">{label}</p>
        </div>
    );
}