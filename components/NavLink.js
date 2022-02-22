import Link from 'next/link';

export default function NavLink({ name, location }) {
  return (
    <li className='transform hover:text-primary hover:bg-secondary hover:-skew-x-6 transition-all duration-300 p-2'>
      <Link href={location}>
        <a className='hover:underline'>{name}</a>
      </Link>
    </li>
  );
}
