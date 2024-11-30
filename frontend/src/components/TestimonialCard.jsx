const TestimonialCard = ({testimonial}) => (
    <div className="testimonial-card">
        <p><em>"{testimonial.quote}"</em></p>
          <h4>{testimonial.fname} {testimonial.lname}</h4> 
         <img src={testimonial.portrait_img} alt={testimonial.fname} />  
    </div>
);

export default TestimonialCard;