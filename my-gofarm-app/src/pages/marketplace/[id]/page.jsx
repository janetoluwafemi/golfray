import { useParams, Link } from 'react-router-dom';
import { products } from '../../../data/products';
import Header from '../../../components/header';

const InfoCard = ({ label, value, icon }) => {
    const icons = {
        calendar: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        box: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        location: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        export: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    };

    return (
        <div className="flex items-center gap-4 bg-white rounded-lg p-4">
            {icons[icon]}
            <div>
                <p className="text-gray-500 text-sm">{label}</p>
                <p className="font-normal text-base">{value}</p>
            </div>
        </div>
    );
};

const Tag = ({ text, bgColor, textColor, icon }) => (
    <span className={`${bgColor} ${textColor} rounded-full px-4 py-1 font-semibold flex items-center`}>
        {icon === 'leaf' && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V7l-8 4-8-4v5c0 6 8 10 8 10z" />
            </svg>
        )}
        {text}
    </span>
);

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => String(p.id) === String(id));

    if (!product) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-2xl">Product not found</h1>
                <Link to="/marketplace" className="text-green-700 underline">
                    Back to Marketplace
                </Link>
            </div>
        );
    }

    const numericRating = Number(product.rating) || 0;

    return (
        <div className="min-h-screen bg-[#f3efe7] px-6 py-10">
            <Header />
            <div className="pt-20 max-w-[75rem] mx-auto">
                <Link to="/marketplace" className="text-black hover:underline mb-6 inline-block">
                    ← Back to Marketplace
                </Link>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <img
                        src={product.img}
                        alt={product.name}
                        className="rounded-xl object-cover w-full max-w-[600px] h-[400px] shadow-md"
                    />
                    <div className="space-y-4">
                        <h1 className="text-4xl font-light">{product.name}</h1>
                        <div className="flex items-center gap-2 text-yellow-500">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <svg
                                    key={i}
                                    className={`h-5 w-5 ${i < Math.floor(numericRating) ? 'fill-current' : 'text-gray-300'}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.39 2.46c-.785.57-1.838-.197-1.54-1.118l1.287-3.973a1 1 0 00-.364-1.118L3.602 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                                </svg>
                            ))}
                            <span className="text-gray-600 text-sm">{numericRating.toFixed(1)}</span>
                        </div>
                        <p className="text-5xl font-semibold text-green-700">
                            {product.price}
                            <span className="text-lg font-normal text-gray-600 ml-2">
                                {product.unit}
                            </span>
                        </p>
                        <p className="text-lg font-normal">{product.details}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 mt-6">
                            <InfoCard label="Harvest Date" value="2/10/2026" icon="calendar" />
                            <InfoCard label="Available Stock" value="50 units" icon="box" />
                            <InfoCard label="Distance" value="12 km away" icon="location" />
                            <InfoCard label="Export" value="Available" icon="export" />
                        </div>
                        <div className="flex flex-wrap gap-3 mt-4">
                            {product.organic && (
                                <Tag text="100% Organic" bgColor="bg-green-100" textColor="text-green-700" icon="leaf" />
                            )}
                            <Tag text={product.category} bgColor="bg-gray-200" textColor="text-gray-800" />
                        </div>
                        <div className="flex gap-4 mt-6">
                            <button className="flex-1 bg-green-700 text-white py-4 rounded-lg font-semibold hover:bg-green-800 transition">
                                🛒 Add to Cart
                            </button>
                            <button className="px-6 py-4 border-2 border-green-700 text-green-700 rounded-lg font-semibold hover:bg-green-50 transition">
                                Buy Now
                            </button>
                        </div>

                    </div>
                </div>
                <div className="mt-16 bg-white w-full rounded-2xl p-8 border border-[#E5E0D8]">
                    <h2 className="text-3xl font-normal text-[#1A1A1A] mb-5">
                        About the Farm
                    </h2>

                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="space-y-2">
                            <h3 className="text-xl font-normal text-[#1A1A1A]">
                                {product.farmerCompanyName || "Sunrise Farms"}
                            </h3>

                            <p className="text-base text-gray-600">
                                Farmer: {product.farmerName || "Adewale Johnson"}
                            </p>

                            <p className="text-base text-gray-600 flex items-center gap-2 mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {product.farmerLocation || "Kaduna State"}
                            </p>
                        </div>
                        <div className="flex items-start gap-4 max-w-[560px]">
                            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-green-100">
                                <span className="text-green-900 text-sm">✓</span>
                            </div>
                            <div>
                                <p className="text-base font-normal text-black">
                                    Verified by GOFarm Quality Team
                                </p>

                                <p className="text-base text-gray-600 mt-1 leading-relaxed">
                                    This farm has been verified and meets our quality standards for produce
                                    freshness, farming practices, and reliability.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;