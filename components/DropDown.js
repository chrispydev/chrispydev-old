import { links } from "../data/links";

export default function DropDown() {
  return (
    <ul className="transition-all flex pt-2 md:pt-0 lg:justify-end justify-center items-center flex-wrap space-x-1 md:space-x-10 text-md md:text-2xl font-bold capitalize">
      {links.map(({ name, location }, index) => (
        <div key={index} className="hidden lg:flex">
          <NavLink name={name} location={location} />
        </div>
      ))}
    </ul>
  );
}
