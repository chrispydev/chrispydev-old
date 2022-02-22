export default function Heading({ headingText }) {
  return (
    <div className='relative w-full flex justify-center item-center'>
      <h1 className='font-lobsterTwo text-4xl font-black capitalize text-center text-primary bg-secondary max-w-max  transform -skew-x-6 p-2 tracking-wider'>
        {headingText}
      </h1>
      <span className='absolute w-32 h-1 bg-primary bottom-2.5 lef-1/2'></span>
    </div>
  );
}
