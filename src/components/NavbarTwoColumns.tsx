import Link from "next/link";
import { ReactNode } from "react";

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <Link href="/">{props.logo}</Link>
    </div>

    <nav>
      <ul className="navbar flex items-center font-medium lg:text-xl md:text-xl text-gray-800 xs:text-sm ">
        {props.children}
      </ul>
    </nav>
  </div>
);

export { NavbarTwoColumns };
