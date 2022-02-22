export default function ProgressBar({ percentage, name }) {
  return (
    <div className='flex flex-col justify-center-item-center mt-6 space-y-2'>
      <div className='flex justify-between item-center '>
        <p className='text-xs font-bold text-gray-700 capitalize'>{name}</p>
        <p className='text-xs font-bold text-gray-700'>{percentage}</p>
      </div>
      <div className='w-full h-1 rounded-2xl bg-gray-300'>
        <div
          style={{ width: `${percentage}%` }}
          className='h-full bg-gray-700 rounded-2xl'
        ></div>
      </div>
    </div>
  );
}
