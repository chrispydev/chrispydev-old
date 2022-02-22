import Typing from './TypingText';

export default function Hero() {
  return (
    <section className='bg-hero-image bg-cover bg-center w-full max-h-[610px] md:min-h-c600px '>
      <div className='min-h-[500px] md:min-h-[610px] flex flex-col justify-center p-4 space-y-4  bg-gray-900 bg-opacity-75'>
        <h1 className='text-4xl md:text-7xl font-extrabold text-secondary'>
          Hello
        </h1>
        <h3 className='font-extrabold text-3xl md:text-6xl text-secondary'>
          <span className='text-white'>I'm</span> <Typing />
        </h3>
        <p className='tracking-wider leading-6 text-white text-xs md:text-sm font-normal'>
          I'm an open minded person who love to love solve problems, teach
          people programming,
          <br /> loves to learn. And most importantly, I love preaching the
          gospel of our Lord Jesus Christ✝️.
        </p>
        <div className='pt-10'>
          <div className='h-20 w-12 border-primary border-4 rounded-3xl flex justify-center items-center'>
            <span className='w-5 h-5 rounded-full bg-secondary animate-bounce' />
          </div>
        </div>
      </div>
    </section>
  );
}
