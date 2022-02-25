export default function Heading({ headingText, center }) {
  return (
    <div
      className={
        center
          ? `relative  mx-auto flex justify-center  items-center`
          : `relative   flex justify-start items-center`
      }
    >
      <h1 className='font-lobsterTwo text-4xl font-black capitalize text-center text-primary bg-secondary max-w-max transform -skew-x-6 p-2 tracking-wider'>
        {headingText}
      </h1>
      <span className='absolute w-1/12 h-1 bg-primary bottom-2 lef-1/2'></span>
    </div>
  );
}
