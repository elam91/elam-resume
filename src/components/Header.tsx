import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import StaticPDF from "../assets/Elam Buteil - Software Engineer.pdf";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import MatrixRainingLetters from "./matrix-background";

const Header = () => {
  const [showMatrix, setShowMatrix] = useState(false);

  useEffect(() => {
    let timerId: any;
    if (showMatrix) {
      timerId = setTimeout(() => setShowMatrix(false), 10000);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [showMatrix]);

  return (
    <header>
      {showMatrix ? (
        <>
          <h1 className="absolute right-1/2 top-1/2 z-30 translate-x-1/2 translate-y-1/2 text-3xl text-white">
            Downloading...
          </h1>
          <MatrixRainingLetters />
        </>
      ) : null}
      <nav className="z-10 bg-white/80 px-4 py-2.5 hover:bg-white/100 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-semibold">
              Elam Buteil's Résumé
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {import.meta.env.VITE_SAVER_MODE ? (
              <a
                onClick={() => setShowMatrix(true)}
                href={StaticPDF}
                download={`Elam Buteil - Software Engineer - ${format(
                  new Date(),
                  "MMMM do y",
                )}.pdf`}
                className="mr-2 rounded-lg bg-gradient-to-bl from-myPurple-100 to-myPurple-800 px-4 py-2 text-sm font-medium text-white hover:bg-myPurple-100 focus:outline-none focus:ring-4 focus:ring-purple-300 lg:px-5 lg:py-2.5"
              >
                Download to PDF
              </a>
            ) : (
              <Link
                to={`${import.meta.env.VITE_API_URL}export/`}
                onClick={() => setShowMatrix(true)}
                className="mr-2 rounded-lg bg-gradient-to-bl from-myPurple-100 to-myPurple-800 px-4 py-2 text-sm font-medium text-white hover:bg-myPurple-100 focus:outline-none focus:ring-4 focus:ring-purple-300 lg:px-5 lg:py-2.5"
              >
                Download to PDF
              </Link>
            )}
          </div>
          <div
            className="w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-row text-sm font-medium lg:mt-0 lg:space-x-8 lg:text-base">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return clsx({
                      "block rounded px-2 py-2 sm:px-4 lg:bg-transparent lg:p-0": true,
                      "text-myPurple-800": isActive,
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
                      "block rounded px-2 py-2 sm:px-4 lg:bg-transparent lg:p-0": true,
                      "text-myPurple-800": isActive,
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
                      "block rounded px-2 py-2 sm:px-4 lg:bg-transparent lg:p-0": true,
                      "text-myPurple-800": isActive,
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
                      "block whitespace-nowrap rounded px-2 py-2 sm:px-4 lg:bg-transparent lg:p-0": true,
                      "text-myPurple-800": isActive,
                      "text-black": !isActive,
                    });
                  }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) => {
                    return clsx({
                      "block rounded px-2 py-2 sm:px-4 lg:hidden": true,
                      "text-myPurple-800": isActive,
                      "text-black": !isActive,
                    });
                  }}
                >
                  Contact
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
