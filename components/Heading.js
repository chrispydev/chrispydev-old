export default function Heading({ headingText, center }) {
  return (
    <div className='relative'>
      <h1 className='font-lobsterTwo text-4xl font-black capitalize text-primary bg-secondary transform -skew-x-6 p-2 tracking-wider'>
        {headingText}
      </h1>
      {/* <span className='absolute w-1/12 h-1 bg-primary bottom-2 lef-1/2'></span> */}
      <span className='absolute bottom-2 lef-1/2 w-full h-1 bg-primary'></span>
    </div>
  );
}
