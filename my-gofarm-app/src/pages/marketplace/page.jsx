'use client'
import React, { useState } from 'react';
import Header from '../../components/header'
import {products} from "../../data/products";
import { Link } from 'react-router-dom';

export default function Marketplace() {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <div className="text-gray-700 min-h-screen bg-[#f3efe7]">
            <Header />
            <div className="pt-17">

            <div className="bg-white px-4 sm:px-10 py-5 border-b flex gap-3 items-center">
                <div className="relative flex-1 gap-5">
                    <img
                        src="https://cdn.iconscout.com/icon/free/png-256/free-search-icon-svg-download-png-1502246.png"
                        alt="search"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 opacity-60"
                    />

                    <input
                        type="text"
                        placeholder="Search products, farms, or locations..."
                        className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-4 text-base focus:ring-2 focus:ring-green-700 focus:border-green-700 outline-none"
                    />
                </div>
                <button
                    onClick={() => setIsFilterOpen(true)}
                    className="md:hidden bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
                >
                    Filters
                </button>
            </div>
            {isFilterOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setIsFilterOpen(false)}
                />
            )}
            <main className="px-4 sm:px-10 py-8 flex flex-col lg:flex-row gap-8">
                <aside className={`fixed lg:static top-0 left-0 h-full lg:h-fit w-80 bg-white rounded-xl px-6 py-8 shadow-sm space-y-6 transform transition duration-300 z-50 
                    ${isFilterOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

                    <div className="flex justify-between items-center lg:hidden">
                        <h2 className="font-semibold text-lg">Filters</h2>
                        <button onClick={() => setIsFilterOpen(false)} className="text-gray-600 text-xl">✕</button>
                    </div>

                    <div className="hidden lg:flex justify-between items-center">
                        <h2 className="font-medium text-2xl">Filters</h2>
                        <button className="text-green-700 text-base">Reset All</button>
                    </div>
                    <div className="space-y-3">
                        <p className="font-normal text-lg">Category</p>
                        <div className="space-y-3 text-base">
                            {['All Categories', 'Vegetables', 'Grains', 'Tubers'].map((cat, i) => (
                                <label key={cat} className="flex justify-between items-center">
                                    <span><input type="radio" name="cat" defaultChecked={i===0} className="mr-2 accent-green-700" /> {cat}</span>
                                    <span className="text-gray-400">({i === 0 ? 8 : i === 1 ? 4 : 2})</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p className="font-normal text-lg">Price Range</p>
                        <input type="range" className="w-full accent-green-700" />
                        <div className="flex justify-between text-base text-gray-500">
                            <span>₦0</span>
                            <span>₦100,000</span>
                        </div>
                        <div className="text-base space-y-6 pt-2">
                            <p className="cursor-pointer hover:text-green-700 transition">Under ₦15,000</p>
                            <p className="cursor-pointer hover:text-green-700 transition">₦15,000 - ₦30,000</p>
                            <p className="cursor-pointer hover:text-green-700 transition">₦30,000 and above</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="font-normal text-lg">Location</p>
                        <select className="w-full border rounded-lg px-3 py-2 text-base outline-none focus:ring-1 focus:ring-green-700">
                            <option>All Locations</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <p className="font-normal text-lg">Quality</p>
                        <label className="flex items-center text-base gap-2 cursor-pointer">
                            <input type="checkbox" className="accent-green-700" /> Verified Farms Only
                        </label>
                        <label className="flex items-center text-base gap-2 cursor-pointer">
                            <input type="checkbox" className="accent-green-700" /> Organic Only
                        </label>
                    </div>
                </aside>
                <section className="flex-1">
                    <h1 className="text-3xl font-normal mb-1 text-black">Fresh Produce Marketplace</h1>
                    <p className="text-base text-gray-500 mb-5">{products.length} products available</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((p) => (
                            <Link to={`/marketplace/${p.id}`} key={p.id}>
                                <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">                                <div className="relative">
                                    <img src={p.img} className="w-full h-48 object-cover" alt={p.name} />
                                    {p.organic && (
                                        <span className="absolute top-3 left-3 bg-white text-xs px-3 py-1 rounded-full shadow font-medium">🌿 Organic</span>
                                    )}
                                    <span className="absolute top-3 right-3 bg-white p-2 rounded-full shadow text-green-700 text-xs font-bold">✔</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-light text-2xl text-gray-800 leading-tight">{p.name}</h3>
                                    <p className="text-yellow-500 mt-2 text-sm">★ {p.rating}</p>
                                    <p className="text-sm mt-1 text-gray-500">{p.farm}</p>
                                    <p className="text-xs mt-1 text-gray-400">📍 {p.location}</p>
                                    <h3 className="text-green-700 mt-3 text-2xl font-semibold">{p.price}</h3>
                                    <p className="text-xs mt-1 text-gray-400">{p.unit}</p>

                                    <div className="flex gap-3 mt-5 font-semibold">
                                        <button className="flex-1 bg-green-700 text-white py-4 rounded-lg text-sm hover:bg-green-800 transition">Add to Cart</button>
                                        <button
                                            className="flex-1 border border-green-700 text-green-700 py-4 rounded-lg text-sm"
                                        >
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
            </div>
        </div>
    );
}