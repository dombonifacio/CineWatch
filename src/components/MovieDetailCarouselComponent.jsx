// icons
import { BiRightArrowAlt } from 'react-icons/bi'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'

export const MovieDetailCarouselComponent = ({carouselData, currentIndex, handleNextSlide, handlePreviousSlide}) => {
    if (!carouselData || !carouselData[currentIndex]) {
        return <div>Loading...</div>; // Display a loading indicator or placeholder
      }
    
      console.log(carouselData[0].image, 'carousel data inside the carousel component');
    
      const { title, image, overview, release_date, rating } = carouselData[currentIndex];
      return (
        <>
          <div className="">
      
            
            <img src={`https://image.tmdb.org/t/p/original/${image}`} 
        
             />
            <ul>
                <li>
                    <h1 className="text-2xl">{title}</h1> {/* Display the title */}
                </li>
                <li>
                    {overview}
                </li>
                <li className="text-sm text-slate-400">
                    {release_date}
                </li>
                <li className="flex items-center gap-x-1">
                      
                    <AiFillStar className="text-light-blue"/>
                    
                    {rating > 0 ? <p className="text-slate-400 text-sm">{rating}</p> : <p className="text-slate-400 text-sm">N/A</p>}
                    
                        
                    </li>
            </ul>
            
            
            
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