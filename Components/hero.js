import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function hero() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/6419d536c0e7653a058beae8"
        );
        const data = await response.json();
        setSearchResults(data.record);
        console.log("API data fetched successfully!");
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="content mt-8 bg-white dark:bg-gray-900 z-0">
      <Slider {...setting}>
        {searchResults.map((result) => (
          <div key={result.id}>
              <img
                src={result.image}
                alt={result.title}
                className="object-cover w-full h-[650px] md:aspect-video"
              />
            </div>
        ))}
      </Slider>
    </section>
  );
}

export default hero;
