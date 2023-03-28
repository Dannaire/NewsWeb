import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  const handleCategoryClick = (category) => {
    router.push(`/category/${category}`);
  };

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !hasScrolled) {
        setHasScrolled(true);
      } else if (scrollTop === 0 && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <div>
      <nav
        className={`bg-navbcg border-gray-200 dark:bg-gray-900 h-20 w-full fixed z-10 ${
          hasScrolled ? "scrolled" : ""
        }`}
      >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Daily News Actual
            </span>
          </Link>
          <div className="flex items-center">
            <ul className="flex flex-row my-5 mr-6 space-x-8 text-sm font-medium  ">
              <li>
                <Link href="/" className="nav" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <button
                  className="nav"
                  onClick={() => handleCategoryClick("Business")}
                >
                  Business
                </button>
              </li>
              <li>
                <button
                  className="nav"
                  onClick={() => handleCategoryClick("Sport")}
                >
                  Sport
                </button>
              </li>
              <li>
                <button
                  className="nav"
                  onClick={() => handleCategoryClick("health")}
                >
                  Health
                </button>
              </li>
              <li>
                <button
                  className="nav"
                  onClick={() => handleCategoryClick("Travel")}
                >
                  Travel
                </button>
              </li>
              <li>
                <button
                  className="nav"
                  onClick={() => handleCategoryClick("World")}
                >
                  World
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      /
    </div>
  );
}

export default Nav;
