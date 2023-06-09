import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function hero() {
  const [searchResults, setSearchResults] = useState([]);

  const url = "/data/data.json";


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const display = searchResults.filter((result) => result.hero);

  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const router = useRouter();
  const handleNewsClick = (resultId) => {
    router.push(`/detail/${resultId}`);
  };

  return (
    <section className="content mx auto mt-8 bg-white dark:bg-navbcg z-0 lg:h-full min-[320px]:h-56 min-[768px]:h-72">
      <section className="content mt-6 bg-white dark:bg-navbcg w-11/12 mx-auto z-0 herowrap">
        <div className="text-white text-3xl font-bold py-6 pl-4"></div>
        <Slider {...setting} dotsClass="slick-dots">
          {display.map((result) => (
            <div key={result.id} className="relative ">
              <img
                src={result.image}
                alt={result.title}
                className="object-cover w-screen h-[550px] aspect-video imgcard"
              />
              <button
                className="absolute bottom-0 left-0 p-4 bg-gray-900 bg-opacity-60 text-white max-lg:w-full"
                onClick={() => handleNewsClick(result.id)}
              >
                <div className="text-center text-lg font-[550]">
                  {result.headline}
                </div>
                <button>
                  <a className=" inline-flex items-center md:mb-2 lg:mb-0">
                    Read More{" "}
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-500 hover:translate-x-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </button>
              </button>
            </div>
          ))}
        </Slider>
      </section> 

    </section>





  );
}

export default hero;
