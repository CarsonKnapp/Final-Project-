import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to Our Testimonial Slider App</h1>
                <p className="text-lg text-gray-700">
                    Explore feedback from our amazing users and learn more about what makes our app exceptional!
                </p>
            </header>
            
            <section className="mb-8">
                <Slider />
            </section>

            <section className="text-center">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">Ready to Learn More?</h2>
                <p className="text-gray-700 mb-6">
                    Discover how our app can provide value to you and why our users love it!
                </p>
                <div className="flex justify-center space-x-4">
                    <Link
                        to="/about"
                        className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300"
                    >
                        About Us
                    </Link>
                    <Link
                        to="/testimonials"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 focus:ring focus:ring-gray-300"
                    >
                        View Testimonials
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;