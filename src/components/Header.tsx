import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className=" px-4 lg:px-6 py-2.5 nm-flat-white ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              Elam Buteil's Résumé
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none "
            >
              Download to file
            </Link>
          </div>
          <div
            className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex mt-4 text-sm lg:text-base font-medium flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) => {
                    return clsx({
                      "block py-2 pr-4 pl-3  rounded  lg:bg-transparent lg:p-0 ":
                        true,
                      "text-purple-700": isActive,
                      "text-black": !isActive,
                    });
                  }}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="experience"
                  className={({ isActive }) => {
                    return clsx({
                      "block py-2 pr-4 pl-3  rounded  lg:bg-transparent lg:p-0 ":
                        true,
                      "text-purple-700": isActive,
                      "text-black": !isActive,
                    });
                  }}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className={({ isActive }) => {
                    return clsx({
                      "block py-2 pr-4 pl-3  rounded  lg:bg-transparent lg:p-0 ":
                        true,
                      "text-purple-700": isActive,
                      "text-black": !isActive,
                    });
                  }}
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="projects"
                  className={({ isActive }) => {
                    return clsx({
                      "block py-2 pr-4 pl-3  rounded  lg:bg-transparent lg:p-0 ":
                        true,
                      "text-purple-700": isActive,
                      "text-black": !isActive,
                    });
                  }}
                >
                  Project Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;