import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "../data/links";
import NavLink from "./NavLink";
import DropDown from "./DropDown";

export default function Header() {
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
    <header className="dark:bg-darker opacity-100 md:sticky static top-0 left-0 z-20 w-full pt-2 md:pt-1 lg:pt-0 px-1 md:px-10 bg-primary text-secondary">
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
        <div className="flex justify-between items-center">
          <label className="switch mr-4 cursor-pointer">
            <input type="checkbox" checked={toggle} onClick={() => setDark()} />
            <span class="slider round"></span>
          </label>
          <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 block lg:hidden cursor-pointer border-secondary border-2"
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
        </div>
      </nav>
      {show && (
        <div className="absolute right-0 z-50 bg-primary px-5">
          <DropDown setShow={() => setShow(false)} />
        </div>
      )}
    </header>
  );
}
