import Image from 'next/image';

export default function TestimonialCard({
  name,
  testimony,
  image,
  rating,
  ratingWord,
}) {
  return (
    <div className='shadow-lg dark:shadow-none dark:border-white dark:border-[1px] p-5 m-3 text-center'>
      <div className='w-full flex justify-start items-center space-x-4'>
        {/* <Image
          className="w-14 h-14 rounded-full"
          src={image}
          width={56}
          height={56}
        /> */}
        <img className='w-14 h-14 rounded-full' src={image} />
        <h5 className='font-semibold'>{name}</h5>
      </div>
      <div className='my-2 flex'>
        {[...Array(rating)].map((_, index) => (
          <svg
            key={index}
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 text-secondary dark:text-gray-500'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
      </div>
      <div className='space-y-4 text-left text-primary'>
        <h2 className='dark:text-gray-500 font-semibold'>{ratingWord}</h2>
        <p className='transition text-sm hover:line-clamp-none line-clamp-3 dark:text-gray-400'>
          {testimony}
        </p>
      </div>
    </div>
  );
}
