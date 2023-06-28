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
import { MovieOverviewComponent } from '../components/MovieOverviewComponent'

export const DetailsPage = () => {
    // get the id from the useParams object
    const { id } = useParams()
    
    const [loading, setLoading] = useState(false)
    // store the specific movie in this state
    const [ movieDetail, setMovieDetail ] = useState({})
    const genresList = movieDetail.genres?.map((genre) => genre?.name)
    const genres = genresList?.join(", ")
    console.log(movieDetail, 'about the movie')

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
            
            
            <div className="relative max-w-[1640px] mx-auto ">
                <div className='absolute w-full h-full  bg-gradient-to-t from-dark-blue bg-black/5 '>
                   
                    {/* Title, ratings PG 2023 */}
                    <div className='flex flex-col items-center justify-center mt-52 p-4 mx-auto sm:mt-32 md:flex-row md:w-3/4 lg:items-start lg:mt-24   '>
                        
                      

                        <img src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`} className=' object-cover h-full hidden w-44 sm:block lg:self-center'/>
                   
                        
                        
                        {/* The title and the buttons along with the HD pg, etc.. */}
                        <div className='md:flex flex-col flex-wrap items-start justify-start h-full space-y-3 md:items-start '>


                            <h1 className='text-white text-4xl font-extrabold px-4 text-center md:text-start'>{movieDetail?.original_title}</h1>

                            <ul className="flex flex-wrap items-center gap-x-2 justify-center md:justify-start md:px-4 ">
                                <li className="flex items-center gap-x-1">
                                    <AiFillStar className="text-light-blue" />
                                    {movieDetail?.vote_average > 0 ? (
                                    <p className="text-slate-300 text-sm  lg:text-slate-200">{movieDetail.vote_average?.toFixed(1)}</p>
                                    ) : (
                                    <p className="text-slate-400 text-sm lg:text-slate-200">N/A</p>
                                    )}
                                </li>
                                <li className="font-extrabold text-slate-300 text-sm">HD</li>
                                <li className="border border-slate-500 rounded-md p-1 text-xs text-slate-300 font-bold">PG-13</li>
                                <li className="text-sm text-slate-300">{movieDetail.release_date?.substr(0, 4)}</li>
                                <li className='hidden lg:block'>
                                    <MovieOverviewComponent movieDetail={movieDetail} genres={genres}/>
                                </li>
                                <li className="w-full flex justify-center mt-2 lg:justify-start">
                                    <Link
                                    to="/discover"
                                    className="rounded-full w-full py-2 px-4 bg-sky-500 text-black text-md hover:bg-sky-700 font-md flex justify-center items-center gap-1 lg:w-1/2"
                                    >
                                    Watch Trailer
                                    <span>
                                        <GrFormNextLink size={"1.5rem"} />
                                    </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                

                    


                    {/* Overview and other details part */}
                    <div className='lg:hidden'>

                        <MovieOverviewComponent movieDetail={movieDetail} genres={genres}/>
                    </div>
                  
          
                  
                </div>
                <img src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`} className='opacity-100 h-[500px] lg:h-86 w-full object-cover'/>
               
            </div>
            {/* <button onClick={handleNavigate} className='text-black border text-left  border-red-500'>
                Go back
            </button> */}
        </>
    )
}