import React, { useState } from "react";
// import Utama from './pages/utama'
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Nav() {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-navbcg border-gray-200 dark:bg-gray-900 h-20 w-full fixed">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link href="https://flowbite.com" class="flex items-center">
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
            <ul className="flex flex-row my-5 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline duration-300"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline duration-300"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline duration-300"
                >
                  Sport
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline duration-300"
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline duration-300"
                >
                  Politics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline duration-300"
                >
                  World
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"></div>
      </main>
    </div>
  );
}

export default Nav;
