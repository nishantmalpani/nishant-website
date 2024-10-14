// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#section2">About</Link>
        </li>
        <li>
          <Link href="#section3">Experiences</Link>
        </li>
        <li>
          <Link href="#section4">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
