import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { useEffect } from 'react';


const Slider = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const fetchTestimonials = async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_HOST_API}/api/testimonials`)
            const data = await response.json()
            setTestimonials(data)
          } catch (err) {
            console.error("Error fetching testimonials:", err)
          }
        }
    
        fetchTestimonials()
      }, [])


    const nextSlide = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
    const prevSlide = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

    return (
      <div className="slider">
        {testimonials && testimonials.length > 0 && (
          <>
          <TestimonialCard testimonial={testimonials[currentIndex]} />
          <button onClick={prevSlide} aria-label="Previous" className="glow-button hover:glow-button-hover hover:scale-110">◀</button>
          <button onClick={nextSlide} aria-label="Next" className="glow-button hover:glow-button-hover hover:scale-110">▶</button>
          </>
        )}
      </div>
    );
};

export default Slider;