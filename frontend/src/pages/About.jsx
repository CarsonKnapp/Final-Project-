import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-700 mb-6">
                Welcome to our testimonial slider app! This platform showcases real feedback from our amazing users. 
                Our mission is to deliver exceptional experiences while providing an engaging interface that works seamlessly 
                across all devices.
            </p>
            <p className="text-lg text-gray-700 mb-6">
                Our team values innovation, accessibility, and user satisfaction. Whether you're browsing on a desktop, 
                tablet, or smartphone, we ensure an optimal experience for every screen size.
            </p>
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700">
                <li>Dynamic testimonial content served through our backend API.</li>
                <li>Intuitive navigation for both keyboard and mouse users.</li>
                <li>Responsive design for various screen sizes and devices.</li>
            </ul>
        </div>
    );
};

export default About;