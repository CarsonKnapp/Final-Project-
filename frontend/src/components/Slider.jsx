import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
    { id: 1, text: "This is amazing!", author: "User A" },
    { id: 2, text: "I love this!", author: "User B" },
    { id: 3, text: "Highly recommended!", author: "User C" },
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
    const prevSlide = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="slider">
            <button onClick={prevSlide} aria-label="Previous">◀</button>
            <TestimonialCard testimonial={testimonials[currentIndex]} />
            <button onClick={nextSlide} aria-label="Next">▶</button>
        </div>
    );
};

export default Slider;