// contexts
import { MovieContext } from "../context/MovieContext"

// hooks
import { useContext } from 'react'
import { MovieCardComponent } from "./MovieCardComponent"

// icons 
import { AiFillStar } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'


export const MovieContainerComponent = () => {
    const { movies } = useContext(MovieContext)
   
 
    const getMovie = movies[0]


    return (
        <div className="grid grid-cols-3">
            {/* {movies[0].map((movie) => {
                return (
                    // return the card component here
                    <MovieCardComponent data={movie} />
                )
            })} */}
            <div className="bg-dark-700">
                <img src={`https://image.tmdb.org/t/p/original/${getMovie?.poster_path}`} />
                {/* Details Section */}
                <div className="pt-1 pb-3 px-2 flex flex-col">
                    <ul className="flex items-center gap-x-2">
                        <li className="flex items-center gap-x-1">
                      
                            <AiFillStar className="text-light-blue"/>
                      
                            <p className="text-slate-400 text-sm">{getMovie?.vote_average}</p>
                            
                        </li>
                        <li className="font-extrabold text-slate-400 text-xs">
                            HD
                        </li>
                        <li className="border border-slate-600 rounded-md p-1 text-xs text-slate-400 font-bold">
                            PG-13
                        </li>
                        <li className="text-sm text-slate-400">
                            {/* Only get the year */}
                            {getMovie?.release_date.substr(0, 4)}
                        </li>
                        
                    </ul>
                    <p className="text-slate-300 text-bold">{getMovie?.original_title}</p>
                    <div className="bg-dark-500 p-1 mt-4">
                        <button className="text-slate-400 flex justify-evenly items-center">
                            <span >
                                <BsFillPlayFill size={"1.5rem"} className="text-center"/>
                            </span>
                            Watch Now
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}