
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Navigation from './components/Navigation';

const App = () => (
    <Router> 
        <Navigation /> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
    </Router>
);

export default App;