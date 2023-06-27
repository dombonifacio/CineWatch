// icons
import { BiRightArrowAlt } from 'react-icons/bi'
import { BiLeftArrowAlt } from 'react-icons/bi'

export const MovieDetailCarouselComponent = ({carouselData, currentIndex, handleNextSlide, handlePreviousSlide}) => {
    if (!carouselData || !carouselData[currentIndex]) {
        return <div>Loading...</div>; // Display a loading indicator or placeholder
      }
    
      console.log(carouselData[0].image, 'carousel data inside the carousel component');
    
      const { title, image, overview, release_date, rating } = carouselData[currentIndex];
      return (
        <>
          <div className="">
            <img src={`https://image.tmdb.org/t/p/original/${image}`} className="" />
            <h1 className="text-2xl">{title}</h1> {/* Display the title */}
            <button onClick={handlePreviousSlide}>

                <BiLeftArrowAlt size={"2rem"} />
            </button>
             <button onClick={handleNextSlide}>

                <BiRightArrowAlt size={"2rem"} />
            </button>
          </div>
        </>
      );
}