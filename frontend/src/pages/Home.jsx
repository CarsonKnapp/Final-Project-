import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import "../index.css"
const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            
            
            <section className="mb-8">
                <Slider />
            </section>

            <style jsx>
                {`
                    .slider-container {
                        height: 500px; /* Adjust the height as needed */
                    }
                `}
            </style>
            <div className="flex justify-center mt-8">
                <Link
                    to="/about"
                    className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 focus:ring focus:ring-blue-300"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default Home;