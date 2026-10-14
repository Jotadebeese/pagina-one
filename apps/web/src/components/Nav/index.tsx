import Image from "next/image";
import Link from "next/link";
import styles from "@/src/styles/NavMenu.module.css";
import squareLogo from "@/src/images/square_logo.svg";
import NavLink from "./components/nav-link";

export default function NavMenu() {
  return (
    <div className="fixed top-0 px-5 pt-5 sm:px-10 left-0 w-full z-10 flex items-center justify-center">
      <nav className="w-full flex items-center justify-start max-w-6xl">
        <div className="w-fit gap-10 flex items-center justify-center bg-light border border-light-2 pl-1.5 py-1.5 rounded-2xl pr-4">
          <Link className="flex items-center justify-center" href={"/"}>
            <Image src={squareLogo} alt="Company logo" width={30} height={30} />
          </Link>
          <ul className="flex items-center justify-center gap-5">
            <li>
              <NavLink href="/#services">SERVICES</NavLink>
            </li>
            <li>
              <NavLink href="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
