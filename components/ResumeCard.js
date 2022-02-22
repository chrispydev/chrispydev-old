export default function ResumeCard({ rank, year, body }) {
  return (
    <div className='shadow max-w-max text-left p-4 m-4 space-y-1'>
      <h4 className='font-semibold text-lg text-gray-800'>{rank}</h4>
      <h5 className='font-medium text-sm'>{year}</h5>
      <p className='text-gray-700 text-sm'>{body}</p>
    </div>
  );
}
