// components
import { NavbarComponent } from "../components/NavbarComponent"
import { PaginationButtonsComponent } from '../components/PaginationButtonsComponent'
import { MovieContainerComponent } from "../components/MovieContainerComponent"
import { MovieDetailCarouselComponent } from "../components/MovieDetailCarouselComponent"

// contexts
import { MovieContext } from "../context/MovieContext"
import { PageSelectedContext } from "../context/PageSelectedContext"


// hooks
import { useContext, useState, useEffect } from "react"

// third party libraries
import axios from "axios"






export const DiscoverPage = () => {

  // ******************************* CAROUSEL *******************************

  const [carouselData, setCarouselData] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  
    console.log(currentIndex, 'current Index')
    const handleNextSlide = () => {
        setCurrentIndex((prevState) => currentIndex === carouselData.length - 1 ? 0 : prevState + 1)

    }

    const handlePreviousSlide = () => {
        // if currentIndex hits 0 or the first element, go back to the very last element
        setCurrentIndex((prevState) => currentIndex === 0 ? carouselData.length - 1 : prevState - 1)
    }

    // call the API everytime the state button changes or is clicked
    useEffect(() => {
      getCarouselData()
        
    }, [currentIndex])
  
    const getCarouselData = () => {
        
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&page=1&with_genres=10751&language=en-US`)
        .then(({data}) => {
          const requiredData = data.results.map((movie) => {
            return {
              id: movie.id,
              title: movie.title,
              image: movie.backdrop_path,
              overview: movie.overview,
              release_date: movie.release_date.substr(0, 4),
              rating: movie.vote_average.toFixed(1)
            }
          })
          setCarouselData(requiredData)
          
        })
    }



  // ******************************* CAROUSEL *******************************
    const { movies, setMovies } = useContext(MovieContext) 
    const { pageSelected } = useContext(PageSelectedContext)

    const [genre, setGenre] = useState("")
    const [ loading, setLoading ] = useState(false)

  

    const handleSetGenre = (event) => {
       setGenre(event.target.value)
    }


    useEffect(() => {
        getMoviesData()
        
    }, [genre, pageSelected])
  
    const getMoviesData = () => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&page=${pageSelected}&include_video=true&sort_by=popularity.desc&language=en-US&with_genres=${genre}`)
        .then(({data}) => {
          const requiredData = data.results.map((movie) => {
            
            return {
              ...movie
            }
          })
          
          setMovies(requiredData)
          setLoading(false)
        })
    }

    
    
    
   
    return (
        <div className="max-w-[1640px] mx-auto ">
           <MovieDetailCarouselComponent carouselData={carouselData} currentIndex={currentIndex} handleNextSlide={handleNextSlide} handlePreviousSlide={handlePreviousSlide}/>
            
           
            
           
            <div className="flex gap-x-2 px-4 items-center">
              {/* Rectangle shape beside page title */}
              <div className="bg-light-blue w-2 h-6">
                
              </div>
              <h1 className="text-2xl font-extrabold  ">Discover Movies</h1>
                <select name="movies" id="movies" className="text-black bg-white ml-2" onChange={handleSetGenre}>
                  <option value="28">Action</option>
                  <option value="12">Adventure</option>
                  <option value="16">Animation</option>
                  <option value="35">Comedy</option>
                  <option value="80">Crime</option>
                  <option value="99">Documentary</option>
                  <option value="18">Drama</option>
                  <option value="10751">Family</option>
                  <option value="14">Fantasy</option>
                  <option value="36">History</option>
                  <option value="27">Horror</option>
                  <option value="1042">Music</option>
                  <option value="9648">Mystery</option>
                  <option value="10749">Romance</option>
                  <option value="878">Science Fiction</option>
                  <option value="53">Thriller</option>
                  <option value="10752">War</option>
                  <option value="37">Western</option>
                  


              </select>
            </div>
            {loading ? <h1>Loading...</h1> : <MovieContainerComponent data={movies}/> }
            
            <PaginationButtonsComponent  />
           
        </div>
    )
}