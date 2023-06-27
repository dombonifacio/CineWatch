// hooks
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

// icons 
import { AiFillStar } from 'react-icons/ai'
import { GrFormNextLink } from 'react-icons/gr'




// third party libraries
import axios from 'axios'

// css
import '../App.css'

export const DetailsPage = () => {
    // get the id from the useParams object
    const { id } = useParams()
    
    const [loading, setLoading] = useState(false)
    // store the specific movie in this state
    const [ movieDetail, setMovieDetail ] = useState({})

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/discover')
    }

    useEffect(() => {
        getMoviesData()
        
    }, [id])
  
    const getMoviesData = () => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&include_video=true&language=en-US&`)
        .then(({data}) => {
            const requiredData = {
                IsFavourite: false,
                ...data
            }
          
          
          setMovieDetail(requiredData)
          setLoading(false)
        })
    }
   


    return (
        <>
            <div className="relative">
                <div className='absolute w-full h-full  bg-gradient-to-t from-dark-blue bg-black/5 '>
                   
                    {/* Title, ratings PG 2023 */}
                    <div className='flex flex-col items-center mt-52 gap-2 '>

                        <h1 className='text-white text-4xl font-extrabold'>{movieDetail?.original_title}</h1>

                        <ul className="flex flex-wrap items-center gap-x-2 justify-center ">
                            <li className="flex items-center gap-x-1">
                                <AiFillStar className="text-light-blue" />
                                {movieDetail?.vote_average > 0 ? (
                                <p className="text-slate-300 text-sm">{movieDetail.vote_average?.toFixed(1)}</p>
                                ) : (
                                <p className="text-slate-400 text-sm">N/A</p>
                                )}
                            </li>
                            <li className="font-extrabold text-slate-300 text-sm">HD</li>
                            <li className="border border-slate-500 rounded-md p-1 text-xs text-slate-300 font-bold">PG-13</li>
                            <li className="text-sm text-slate-300">{movieDetail.release_date?.substr(0, 4)}</li>
                            <li className="w-full flex justify-center mt-2 ">
                                <Link
                                to="/discover"
                                className="rounded-full w-full py-2 px-4 bg-sky-500 text-black text-md hover:bg-sky-700 font-md flex justify-center items-center gap-1"
                                >
                                Watch Trailer
                                <span>
                                    <GrFormNextLink size={"1.5rem"} />
                                </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                

                    


                    {/* Overview and other details part */}
                    <div className='mt-16 p-4'>
                        <ul className='flex flex-wrap gap-x-2 gap-y-3'>
                            <li>
                                <h1 className='text-slate-400 font-bold'>Overview:</h1>
                                <p className='text-slate-500'>{movieDetail?.overview}</p>
                            </li>
                            <li className='mt-4 flex  text-sm items-center gap-x-2'>
                                <p className='font-bold text-slate-400'>Release: </p>
                                <p className='text-slate-500'>{movieDetail?.release_date}</p>
                            </li>
                            <li className='mt-4 flex  text-sm items-center gap-x-2'>
                                <p className='font-bold text-slate-400'>Language: </p>
                                <p className='text-slate-500'>{movieDetail.original_language?.toUpperCase()}</p>
                            </li>
                            <li className='mt-4 flex  text-sm items-center gap-x-2'>
                                <p className='font-bold text-slate-400'>Genre: </p>
                                
                            </li>
                            <li>
                               
                            </li>
                        </ul>
                       
                       
                    </div>
          
                  
                </div>
                <img src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`} className='opacity-100 h-[500px] w-full object-cover'/>
               
            </div>
            {/* <button onClick={handleNavigate} className='text-black border text-left  border-red-500'>
                Go back
            </button> */}
        </>
    )
}