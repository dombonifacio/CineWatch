// hooks
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

// icons 
import { AiFillStar } from 'react-icons/ai'

import { BsPlayCircle } from 'react-icons/bs'

// contexts
import { MovieContext } from "../context/MovieContext"



// third party libraries
import axios from 'axios'

// css
import '../App.css'
import { MovieOverviewComponent } from '../components/MovieOverviewComponent'
import { MovieContainerComponent } from '../components/MovieContainerComponent'

export const DetailsPage = () => {
    // get the id from the useParams object
    const { id } = useParams()
    
    const [loading, setLoading] = useState(false)
    // store the specific movie in this state
    const [ movieDetail, setMovieDetail ] = useState({})
    const genresList = movieDetail.genres?.map((genre) => genre?.name)
    const genres = genresList?.join(", ")
    const [recommendedMovies, setRecommendedMovies] = useState([])
   

    const { movies } = useContext(MovieContext)

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/discover')
    }

    useEffect(() => {
        getMoviesData()
        
        getRecommendationsData()
        
    }, [id])

    console.log(recommendedMovies, 'recommended movies')
  
    const getMoviesData = () => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&include_video=true&language=en-US&`)
        .then(({data}) => {
            const requiredData = {
                
                ...data
            }
          
          
          setMovieDetail(requiredData)
          setLoading(false)
        })
        
    }

    const getRecommendationsData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${import.meta.env.VITE_API_KEY}&include_video=true&language=en-US&`)
        .then(({data}) => {
            
            setRecommendedMovies(data.results)

        })
    }
   


    return (
        <>
            
           <div className='max-w-[1640px] mx-auto '>
                <div className="relative">
                        <div className='absolute w-full h-full  bg-gradient-to-t from-dark-blue bg-black/5'>
                        
                            {/* Title, ratings PG 2023 */}
                            <div className='flex flex-col items-center justify-center mt-44 p-4 mx-auto sm:mt-32 md:flex-row md:w-3/4 lg:items-start lg:mt-16  '>
                                
                            

                                <img src={`https://image.tmdb.org/t/p/original/${movieDetail?.poster_path}`} className=' object-cover h-full hidden w-44 sm:block'/>
                        
                                
                                
                                {/* The title and the buttons along with the HD pg, etc.. */}
                                <div className='md:flex flex-col flex-wrap items-start justify-start h-full space-y-3 md:items-start '>


                                    <h1 className='text-white text-4xl font-extrabold px-4 text-center md:text-start'>{movieDetail?.title}</h1>

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
                                        <li className="w-full flex justify-center sm:justify-center md:justify-start mt-2 ">
                                            <Link
                                            to="/"
                                            className="rounded-md  py-2 px-4 bg-sky-500 text-slate-300 font-bold text-md hover:bg-sky-800 hover:text-slate-100 font-md flex justify-center items-center gap-3"
                                            >
                                            Watch Movie
                                            <span>
                                                <BsPlayCircle size={"1.5rem"} />
                                            </span>
                                        
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        

                            


                           
                        
                
                        
                        </div>
                        <img src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`} className='opacity-100 h-[500px] lg:h-86 w-full object-cover'/>
                        
                    </div>
                {/* Overview and other details part */}
                            <div className='lg:hidden '>

                                <MovieOverviewComponent movieDetail={movieDetail} genres={genres}/>
                            </div> 
                <div className=''>
                <h1 className="text-2xl font-extrabold  px-4">Recommended Movies</h1>
                <MovieContainerComponent data={recommendedMovies}/>
                </div>         
           </div>
           
            {/* <button onClick={handleNavigate} className='text-black border text-left  border-red-500'>
                Go back
            </button> */}
            
        </>
    )
}