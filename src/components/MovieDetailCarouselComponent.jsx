// icons
import { BiRightArrowAlt } from 'react-icons/bi'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import { BsPlayCircle } from 'react-icons/bs'

import { Link } from 'react-router-dom'


export const MovieDetailCarouselComponent = ({carouselData, currentIndex, handleNextSlide, handlePreviousSlide}) => {
    if (!carouselData || !carouselData[currentIndex]) {
        return <div>Loading...</div>; // Display a loading indicator or placeholder
      }
    
     
    
      const { title, image, overview, release_date, rating } = carouselData[currentIndex];
      return (
        <>
          <div className="max-w-[960px] mx-auto relative" >
      
            <div className='absolute w-full h-full bg-gradient-to-t from-dark-blueflex items-center justify-between px-4' >
              <div className='flex items-center gap-x-4 w-full'>

                <button onClick={handlePreviousSlide} className='p-2 bg-white rounded-full hidden lg:block'>

                    <BiLeftArrowAlt size={"2rem"} color='black'/>
                </button>
                <div>
                <ul className='text-white flex flex-col   w-full flex-wrap items-center text-center space-y-1 lg:items-start lg:text-start lg:w-3/4 '>
                    <li className=''>
                        <h1 className="text-4xl font-extrabold">{title}</h1> {/* Display the title */}
                    </li>
                    <li className=''>
                        {overview}
                    </li >
                    <li>
                      <div className='flex gap-x-1'>
                
                       <p className="text-sm text-slate-400 ">{release_date} </p> 
                       
                      <li className="flex items-center gap-x-1 ">
                            
                        <AiFillStar className="text-light-blue"/>
                        
                        {rating > 0 ? <p className="text-slate-400 text-sm">{rating}</p> : <p className="text-slate-400 text-sm">N/A</p>}
                        
                          
                      </li>
                      </div>
                    </li>
                    <li className='w-full max-w-[180px]'>
                      <Link
                        to="/discover"
                        className="rounded-md  py-2 px-4 bg-sky-500 text-slate-300 font-bold text-md hover:bg-sky-800 hover:text-slate-100 font-md flex justify-center items-center gap-3"
                        >
                        Watch Trailer
                        <span>
                            <BsPlayCircle size={"1.5rem"} />
                        </span>
                      </Link>
                    </li>

                </ul>
                </div>
              </div>
              <div>

                <button onClick={handleNextSlide} className='p-2 bg-white rounded-full hidden lg:block'>

                  <BiRightArrowAlt size={"2rem"}  color='black'/>
                </button>
              </div>
            </div>

              
              
              
              
     
            
            
            <img src={`https://image.tmdb.org/t/p/original/${image}`} className='object-cover w-full h-[460px] opacity-100'/> 
          </div>
          
            
               
             

        
             
           
            
            
           

            
          
        </>
      );
}