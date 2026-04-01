import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/page.jsx';
import Signup from './pages/sign-up/page.jsx';
import Marketplace from './pages/marketplace/page.jsx';
import ProductDetails from './pages/marketplace/[id]/page.jsx';
import Dashboard from './pages/dashboard/page.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/marketplace/:id" element={<ProductDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;