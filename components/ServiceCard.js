function ServiceCard({ icon, header, info }) {
  return (
    <div className="group w-full transition relative flex flex-col justify-center items-center space-y-4 shadow max-w-max border p-2 lg:p-4 mt-16">
      <div className="border-4 border-primary dark-border-dark bg-primary p-5 ring-4 ring-secondary dark:ring-white dark:bg-gray-500 group-hover:animate-pulse rounded-full">
        {icon}
      </div>
      <div className="text-center space-y-5">
        <h4 className="text-xl font-bold">{header}</h4>
        <p className="text-gray-700 dark:text-gray-400 text-sm">{info}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
