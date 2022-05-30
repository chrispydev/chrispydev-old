import { links } from "../data/links";
import NavLink from "./NavLink";

export default function DropDown({ setShow }) {
  return (
    <ul onClick={() => setShow()}>
      <div className="flex lg:hidden pt-2 md:pt-0 justify-center items-center flex-col text-md md:text-2xl font-bold capitalize">
        {links.map(({ name, location }, index) => (
          <div key={index}>
            <NavLink name={name} location={location} />
          </div>
        ))}
      </div>
    </ul>
  );
}
