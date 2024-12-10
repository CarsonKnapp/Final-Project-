import React, { useState, useEffect } from "react"

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])

  // Fetch testimonials from the backend API
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">User Testimonials</h1>
      <div className="space-y-4">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 border rounded shadow-sm bg-gray-50 flex items-start"
            >
              <img
                src={testimonial.portrait_img}
                alt={`${testimonial.fname} ${testimonial.lname}`}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="text-gray-700">{testimonial.quote}</p>
                <p className="text-right text-sm text-gray-500">
                  - {testimonial.fname} {testimonial.lname}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No testimonials available.</p>
        )}
      </div>
    </div>
  )
}

export default Testimonials
