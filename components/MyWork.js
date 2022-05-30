import Link from "next/link";
import { portfolio } from "../data/portfolio";

import Heading from "./Heading";
import PortfolioCard from "./PortfolioCard";

export default function MyWork() {
  return (
    <section className="pt-16 dark:bg-darker" id="projects">
      <div className="w-full flex justify-center items-center">
        <Heading headingText="My Projects" />
      </div>
      <div className="mt-10 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolio.map(
            ({ projectImage, link, sourceCode, info, technology }, index) => (
              <div key={index}>
                <PortfolioCard
                  projectImage={projectImage}
                  link={link}
                  sourceCode={sourceCode}
                  info={info}
                  technology={technology}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
