import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
  return <Navbar className="border-b-2">
    <Link to='/' className=" self-center whitesapce-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span>Nehan's</span>Blog
    </Link>
  </Navbar>
}

export default Header;
