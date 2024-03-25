import axios from "axios";
import { useEffect, useState } from "react";

// css
import "../App.css";

// components

import { MovieDetailCarouselComponent } from "../components/MovieDetailCarouselComponent";

// icons
import { GrFormNextLink } from "react-icons/gr";

// hooks
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentIndex, "current Index");
  const handleNextSlide = () => {
    setCurrentIndex((prevState) =>
      currentIndex === carouselData.length - 1 ? 0 : prevState + 1
    );
  };

  const handlePreviousSlide = () => {
    // if currentIndex hits 0 or the first element, go back to the very last element
    setCurrentIndex((prevState) =>
      currentIndex === 0 ? carouselData.length - 1 : prevState - 1
    );
  };

  // call the API everytime the state button changes or is clicked
  useEffect(() => {
    getMoviesData();
  }, [currentIndex]);

  const getMoviesData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=1&with_genres=10751&language=en-US`
      )
      .then(({ data }) => {
        const requiredData = data.results.map((movie) => {
          return {
            title: movie.title,
            image: movie.backdrop_path,
            overview: movie.overview,
            release_date: movie.release_date.substr(0, 4),
            rating: movie.vote_average.toFixed(1),
          };
        });
        setCarouselData(requiredData);
      });
  };

  return (
    <>
      <div className="max-w-[1640px] p-4 flex flex-col items-center justify-center gap-5 h-[100vh] lg:p-0 mx-auto">
        <p className="text-4xl font-extrabold text-center">
          Unleash Your Inner Cinephile: Explore, Stream, and Enjoy!
        </p>
        <p className="text-center font-extralight text-slate-400">
          Experience the exhilaration of watching movies on our state-of-the-art
          website, where entertainment transcends boundaries and transports you
          to a realm of immersive cinematic bliss. Indulge in an awe-inspiring
          cinematic adventure from the cozy confines of your own screen, as our
          vast and meticulously curated collection of movies caters to every
          conceivable genre, mood, and taste, promising an unforgettable sensory
          experience that will leave you spellbound and yearning for more.
        </p>

        <Link
          to="/discover"
          className="rounded-full  p-3 w-1/2 bg-sky-500 text-slate-300 font-bold text-md hover:bg-sky-800  font-md flex justify-center items-center gap-2"
        >
          Watch Movies
        </Link>
      </div>
    </>
  );
};
