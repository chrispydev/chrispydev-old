import { resume } from "../data/resume";
import useQuote from "../Hooks/useQuotes";
import Heading from "./Heading";
import ResumeCard from "./ResumeCard";

export default function MyResume() {
  const quote = useQuote();

  return (
    <section className="pt-16 dark:bg-darker">
      <div className="w-full flex justify-center items-center">
        <Heading headingText="My Resume" />
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-6 lg:px-10">
        <div>
          {resume.map((resume, index) => (
            <ResumeCard
              key={index}
              rank={resume.rank}
              year={resume.year}
              body={resume.body}
            />
          ))}
        </div>
        <div className="lg:mt-4 bg-resume-image bg-cover bg-no-repeat mb-4 ">
          <div className="bg-black bg-opacity-75 dark:bg-darker dark:opacity-95 h-full flex items-start justify-center flex-col space-y-4 p-5">
            <p className="text-lg text-gray-300">{quote.quote}</p>

            <p className="text-white text-xl uppercase font-semibold tracking-wide">
              - {quote.from}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
