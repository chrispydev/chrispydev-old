import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "../data/links";
import NavLink from "./NavLink";
import DropDown from "./DropDown";

export default function Header() {
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [toggleDark, setToggleDark] = useState();

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setToggleDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setToggleDark(false);
    }

    window.onscroll = () => {
      setValue(
        window.document.documentElement.scrollTop || document.body.scrollTop
      );
    };
  }, [value, toggle]);

  function setDark() {
    if (localStorage.theme == "dark") {
      localStorage.theme = "light";
      setToggle(!toggle);
    } else if ((localStorage.theme = "light")) {
      localStorage.theme = "dark";
      setToggle(!toggle);
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome,
  }

  return (
    <header className="dark:bg-darker opacity-100 md:sticky static top-0 left-0 z-50 w-full pt-2 md:pt-1 lg:pt-0 px-1 md:px-10 bg-primary text-secondary">
      {value > 500 && (
        <>
          <div
            onClick={topFunction}
            className="fixed right-[8%] bottom-[8%] z-50 bg-secondary dark:bg-gray-500 rounded-full md:p-4 p-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary h-6 w-6 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7l4-4m0 0l4 4m-4-4v18"
              />
            </svg>
          </div>
        </>
      )}
      <nav className="flex flex-1 justify-between items-center p-2">
        <div
          onClick={() => setShow(false)}
          className="flex justify-center items-center"
        >
          <div className="text-center text-xl tracking-wide font-extrabold uppercase max-w-min inline-block p-1 bg-secondary text-primary dark:bg-dark dark:text-white transform -skew-x-6 underline">
            <Link href="/">
              <a>Chrispydev</a>
            </Link>
          </div>
        </div>
        <ul className="transition-all flex pt-2 md:pt-0 lg:justify-end justify-center items-center flex-wrap space-x-1 md:space-x-10 text-md md:text-2xl font-bold capitalize">
          {links.map(({ name, location }, index) => (
            <div key={index} className="hidden lg:flex">
              <NavLink name={name} location={location} />
            </div>
          ))}
        </ul>
        {toggleDark ? (
          <svg
            onClick={() => setDark()}
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer bg-secondary dark:bg-gray-500 text-white rounded-sm border-secondary dark:border-gray-500 border-[1px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setDark()}
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 cursor-pointer bg-secondary dark:bg-gray-500 text-white rounded-sm border-secondary dark:border-gray-500 border-[1px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}

        {/*
          <label className="switch mr-4 cursor-pointer">
            <input type="checkbox" checked={toggle} onClick={() => setDark()} />
            <span className="slider round"></span>
          </label>*/}
        <svg
          onClick={() => setShow(!show)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 block lg:hidden dark:text-gray-500 cursor-pointer border-secondary dark:border-gray-500 border-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </nav>
      {show && (
        <div className="absolute right-0 z-50 bg-primary dark:bg-darker px-6">
          <DropDown setShow={() => setShow(false)} />
        </div>
      )}
    </header>
  );
}
