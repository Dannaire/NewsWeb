import { useState, useEffect } from 'react';
import { Transition } from "@headlessui/react";
import Link from 'next/link';

function Blogsection() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/6419d536c0e7653a058beae8');
        const data = await response.json();
        setSearchResults(data.record);
        console.log('API data fetched successfully!');
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
    return (
<>
<section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="lg:w-3/4 lg:px-6">
              <img className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
              <div>
                <p className="mt-6 text-sm text-blue-500 uppercase">Want to know</p>
                <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                  What do you want to know about update of technology ?
                </h1>
                <div className="flex items-center mt-6">
                  {/* <img className="object-cover object-center w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            {searchResults.slice(0, 4).map((result) => (
                <div key={result.id }>
                  <h3 className="text-blue-500 capitalize">{result.category}</h3>
                  <a href="#" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                    {result.title}
                  </a>
                  <hr className="my-6 border-gray-200 dark:border-gray-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
</>
);
}

export default  Blogsection;