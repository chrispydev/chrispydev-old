import Heading from './Heading';
import ServiceCard from './ServiceCard';

export default function MyServices() {
  return (
    <section className='mt-16 px-6 lg:px-16' id='services'>
      <div className='w-full flex justify-center items-center'>
        <Heading headingText='What I offer' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
        <ServiceCard
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-white'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' />
            </svg>
          }
          header='Web Development'
          info='I build websites and web applications using the latest technologies and frameworks for all kinds of business.'
        />
        <ServiceCard
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-white'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z'
                clipRule='evenodd'
              />
            </svg>
          }
          header='Mobile Development'
          info='I turn your business ideas into fast and reliable mobile apps that run an android and ios phones effortlessly.'
        />
        <ServiceCard
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
              />
            </svg>
          }
          header='Web Automation & Web Scrapping'
          info='The difficulty in making sure your apps work properly before production can be automated and collecting of data into a single place can be done by machines. I make these possible '
        />
      </div>
    </section>
  );
}
