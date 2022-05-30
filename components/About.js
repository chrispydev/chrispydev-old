import Image from "next/image";
import { useState } from "react";
import useProgressBar from "../Hooks/useProgressBar";
import ProgressBar from "./ProgressBar";
import aboutImage from "../public/images/about.jpg";

export default function About() {
  const python = useProgressBar(98);
  const django = useProgressBar(89);
  const javascript = useProgressBar(98);
  const react = useProgressBar(90);
  const reactNative = useProgressBar(78);
  const jQuery = useProgressBar(88);
  const dart = useProgressBar(58);
  const flutter = useProgressBar(68);
  const html = useProgressBar(98);
  const css = useProgressBar(98);
  const less = useProgressBar(88);
  const sass = useProgressBar(98);
  const materialUi = useProgressBar(88);
  const materializeCss = useProgressBar(89);
  const antd = useProgressBar(78);
  const semanticUi = useProgressBar(90);
  const tailwindcss = useProgressBar(88);
  const bootstrap = useProgressBar(88);
  const materialize = useProgressBar(88);
  const [show, setShow] = useState(false);

  return (
    <section className="dark:bg-darker dark:text-white pt-16" id="about">
      <div className="mx-5  lg:mx-10 flex flex-col lg:flex-row justify-between space-x-6">
        <div className="w-full lg:w-1/4">
          <Image
            src={aboutImage}
            alt="about"
            className="filter grayscale object-contain rounded-3xl"
          />
          {/* <img
            src='/images/about.jpg'
            alt='about'
            className='filter grayscale object-contain'
          /> */}
        </div>
        <div className="flex-1 pt-4 space-y-2">
          <h1 className="text-bold capitalize text-3xl font-bold pb-2">
            About Me
          </h1>
          <p className="text-gray-700 dark:text-gray-400 text-sm font-light leading-6 tracking-normal">
            My Name is Christian Owusu.I am an experienced Software and Web
            Developer adept in bringing forth expertise in design, installation,
            testing and maintenance of software systems. Equipped with a diverse
            and promising skill-set. Proficient in various platforms, and
            languages. Experienced with the latest cutting edge development
            tools and procedures. Able to effectively self-manage during
            independent projects, as well as collaborate as part of a productive
            team.I code and develop apps which turn ideas into really and any
            time time you need a project for your business, a clients or any
            kind or work, I have got you covered.
          </p>
          <form
            method="get"
            action="/Christian_Owusu_-_Full_Stack_Developer.pdf"
          >
            <button className="py-2 px-2 rounded-full bg-secondary dark:bg-dark text-white">
              Download resume
            </button>
          </form>
          <h1 className="text-2xl font-bold">Skill Level</h1>

          <div className="mt-1 pb-8">
            <div className="grid grid-cols-2 gap-8">
              <ProgressBar percentage={python} name="python" />
              <ProgressBar percentage={django} name="django" />
              <ProgressBar percentage={react} name="react" />
              <ProgressBar percentage={dart} name="dart" />
              <ProgressBar percentage={reactNative} name="reactNative" />
              <ProgressBar percentage={flutter} name="flutter" />
              {show ? (
                <>
                  <ProgressBar percentage={javascript} name="javascript" />
                  <ProgressBar percentage={jQuery} name="jQuery" />
                  <ProgressBar percentage={html} name="html" />
                  <ProgressBar percentage={css} name="css" />
                  <ProgressBar percentage={less} name="less" />
                  <ProgressBar percentage={sass} name="sass" />
                  <ProgressBar percentage={materialUi} name="material-Ui" />
                  <ProgressBar percentage={semanticUi} name="semantic-Ui" />
                  <ProgressBar percentage={antd} name="antd" />
                  <ProgressBar
                    percentage={materializeCss}
                    name="materialize-css"
                  />
                  <ProgressBar percentage={tailwindcss} name="tailwindcss" />
                  <ProgressBar percentage={materialize} name="materialize" />
                  <ProgressBar percentage={bootstrap} name="bootstrap" />
                </>
              ) : null}
            </div>
          </div>
          <div
            className="flex justify-center items-center space-x-1 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <>
                <p className="text-gray-700 font-bold uppercase">Hide</p>
              </>
            ) : (
              <>
                <p className="text-gray-700 font-bold uppercase dark:text-white">
                  Show more
                </p>
              </>
            )}
            {show ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700 animate-bounce"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700 animate-bounce"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
