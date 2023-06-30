
// icons 
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'

// contexts

import { MovieContext } from '../context/MovieContext'
// hooks
import { useContext, useEffect } from 'react'






// router dom
import { Link } from 'react-router-dom'


// eslint-disable-next-line react/prop-types
export const MovieCardComponent = ({data, index}) => {

    
    
  
   


      
      
    
    
   

    return (
        <>
        {/* No need to map through the data because in the movie container, it's already been mapped. We just want to design what one card would look like */}
        <div className="bg-dark-700">
                <img src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} className='object-cover max-h-[250px] w-full lg:min-h-[325px]'/>
                {/* Details Section */}
                <div className="pt-1 pb-3 px-2 flex flex-col" key={index}>
                    <ul className="flex items-center gap-x-1 md:gap-x-2">
                        <li className="flex items-center gap-x-1 ">
                      
                            <AiFillStar className="text-light-blue" size={"1.0rem"}/>
                      
                            {data?.vote_average > 0 ? <p className="text-slate-400 text-xs md:text-sm">{data?.vote_average.toFixed(1)}</p> : <p className="text-slate-400 text-xs">N/A</p>}
                        
                            
                        </li>
                        <li className="font-extrabold text-slate-400 text-xs md:text-sm ">
                            HD
                        </li>
                        <li className="border border-slate-600 rounded-md p-1 text-xs text-slate-400 font-bold hidden md:text-sm xl:block">
                            PG-13
                        </li>
                        <li className="text-xs text-slate-400 md:text-sm">
                            {/* Only get the year */}
                            {data?.release_date.substr(0, 4)}
                        </li>
                        
                        
                    </ul>
                    <ul className='flex justify-between'>
                        <li className='truncate'>

                            <p className="text-slate-300 text-bold truncate text-sm md:text-md lg:text-lg">{data?.title}</p>
                        </li>
{/*                         
                        check to see if the pathname is the  */}
                       
                    </ul>
                    <div className="bg-dark-500 p-1 mt-4 hover:bg-dark-blue ">
                       
                        <Link to={`/3/movie/${data.id}`} className="text-xs text-slate-400  flex justify-center items-center font-bold md:text-sm">
                            <span >
                                <BsFillPlayFill size={"1.5rem"} className="text-center"/>
                            </span>
                            <p>Watch Now</p>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}