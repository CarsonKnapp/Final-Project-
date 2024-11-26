import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    // Fetch testimonials from the backend API
    useEffect(() => {
        fetch('http://localhost:3000/api/testimonials')
            .then((res) => res.json())
            .then((res) => console.log(res))
            .then((res) => setTestimonials([res]))
            .catch((err) => console.error('Error fetching testimonials:', err));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">User Testimonials</h1>
            <div className="space-y-4">
                {testimonials.length > 0 ? (
                    testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-4 border rounded shadow-sm bg-gray-50"
                        >
                            <p className="text-gray-700">{testimonial.quote}</p>
                            <p className="text-right text-sm text-gray-500">
                                - {testimonial.fname} {testimonial.lname}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No testimonials available.</p>
                )}
            </div>
        </div>
    );
};

export default Testimonials;