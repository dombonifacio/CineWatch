
// icons 
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
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
        if (!data.IsFavourite && !favouriteList.some(movie => movie.id === data.id))  {
           
            const updatedData = { ...data, IsFavourite: true };
            console.log(updatedData, 'updated data spread operator inside the discover page')
            setFavouriteList([...favouriteList, updatedData]);
            
          
        }
    };
      
      
    
    
   

    return (
        <>
        {/* No need to map through the data because in the movie container, it's already been mapped. We just want to design what one card would look like */}
        <div className="bg-dark-700">
                <img src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} className='object-cover '/>
                {/* Details Section */}
                <div className="pt-1 pb-3 px-2 flex flex-col" key={index}>
                    <ul className="flex items-center gap-x-1 md:gap-x-2">
                        <li className="flex items-center gap-x-1 ">
                      
                            <AiFillStar className="text-light-blue" size={"1.0rem"}/>
                      
                            {data?.vote_average > 0 ? <p className="text-slate-400 text-xs md:text-sm">{data?.vote_average}</p> : <p className="text-slate-400 text-xs">N/A</p>}
                        
                            
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

                            <p className="text-slate-300 text-bold truncate text-sm md:text-md lg:text-lg">{data?.original_title}</p>
                        </li>
                        <li className='self-center flex'>
                            <button onClick={handleAddFav}>

                                <AiOutlineHeart size={"1.0rem"} className=''/>
                                </button>
                        </li>
                    </ul>
                    <div className="bg-dark-500 p-1 mt-4 hover:bg-dark-blue">
                       
                        <Link to={`/3/movie/${data.id}`} className="text-xs text-slate-400  flex justify-evenly items-center font-bold md:text-sm">
                            <span className='hover:bg-white'>
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