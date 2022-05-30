export default function ResumeCard({ rank, year, body }) {
  return (
    <div className="shadow dark:shadow-none dark:border-white dark:border-[1px] max-w-max text-left p-6 m-4 space-y-1">
      <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-300">
        {rank}
      </h4>
      <h5 className="font-medium text-sm">{year}</h5>
      <p className="text-gray-700 dark:text-gray-400 text-sm">{body}</p>
    </div>
  );
}
