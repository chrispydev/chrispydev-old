import Link from "next/link";
import { useEffect, useState } from "react";
import { links } from "../data/links";
import NavLink from "./NavLink";
// import DKIMV from "nodemailer/lib/dkim";

export default function Header() {
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setValue(
        window.document.documentElement.scrollTop || document.body.scrollTop
      );
    };
  }, [value]);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome,
  }

  return (
    <header className="md:sticky static top-0 left-0 z-20 w-full pt-2 md:pt-1 lg:pt-0 px-1 md:px-10 bg-primary text-secondary">
      {value > 500 && (
        <>
          <div
            onClick={topFunction}
            className="fixed right-[8%] bottom-[8%] z-50 bg-secondary rounded-full md:p-3 p-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary h-6 w-6"
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
        <div className="flex justify-center items-center">
          <div className="text-center text-2xl tracking-wide font-extrabold uppercase max-w-min inline-block p-1 bg-secondary text-primary transform -skew-x-6 underline">
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
          <label className="switch mr-4">
            <input
              type="checkbox"
              checked={toggle}
              onClick={() => setToggle(!toggle)}
            />
            <span class="slider round"></span>
          </label>
          <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 block lg:hidden"
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
    </header>
  );
}
