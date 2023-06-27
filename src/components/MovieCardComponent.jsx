
// icons 
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'

// contexts
import { FavouriteListContext } from '../context/FavouriteListContext'
// hooks
import { useContext, useEffect } from 'react'


// router dom
import { Link } from 'react-router-dom'


export const MovieCardComponent = ({data, index}) => {

    const { favouriteList, setFavouriteList } = useContext(FavouriteListContext)
    
  
    const handleAddFav = () => {
        // cannot use filter since api only returns 20 items. use spread operator instead
        
        // the some function checks if any of the movies in the favourite list matches with the data (from api) id,
        if (!data.isFavourite && !favouriteList.some(movie => movie.id === data.id))  {
           
            const updatedData = { ...data, isFavourite: true };
            setFavouriteList([...favouriteList, updatedData]);
          
        }
    };
      
      
    
    
   

    return (
        <>
        {/* No need to map through the data because in the movie container, it's already been mapped. We just want to design what one card would look like */}
        <div className="bg-dark-700">
                <img src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} />
                {/* Details Section */}
                <div className="pt-1 pb-3 px-2 flex flex-col" key={index}>
                    <ul className="flex items-center gap-x-2">
                        <li className="flex items-center gap-x-1">
                      
                            <AiFillStar className="text-light-blue"/>
                      
                            {data?.vote_average > 0 ? <p className="text-slate-400 text-sm">{data?.vote_average}</p> : <p className="text-slate-400 text-sm">N/A</p>}
                        
                            
                        </li>
                        <li className="font-extrabold text-slate-400 text-xs">
                            HD
                        </li>
                        <li className="border border-slate-600 rounded-md p-1 text-xs text-slate-400 font-bold">
                            PG-13
                        </li>
                        <li className="text-sm text-slate-400">
                            {/* Only get the year */}
                            {data?.release_date.substr(0, 4)}
                        </li>
                        <li>
                            <button onClick={handleAddFav}>

                                <AiOutlineHeart />
                            </button>
                        </li>
                        
                    </ul>
                    <p className="text-slate-300 text-bold truncate">{data?.original_title}</p>
                    <div className="bg-dark-500 p-1 mt-4">
                       
                        <Link to={`/3/movie/${data.id}`} className="text-slate-400 flex justify-evenly items-center">
                            <span>
                                <BsFillPlayFill size={"1.5rem"} className="text-center"/>
                            </span>
                            Watch Now
                        </Link>
                    </div>
                    
                </div>
            </div>
        </>
    )
}