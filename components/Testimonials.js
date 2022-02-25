import { testimonial } from '../data/testimonal';
import Heading from './Heading';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  return (
    <section className='mt-16'>
      <div className='w-full flex justify-center items-center'>
        <Heading headingText='Testimonials' />
      </div>
      <div className='mt-10 px-8 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {testimonial.map(
          ({ name, image, testimony, rating, ratingWord }, index) => (
            <div key={index}>
              <TestimonialCard
                name={name}
                testimony={testimony}
                image={image}
                rating={rating}
                ratingWord={ratingWord}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
}
