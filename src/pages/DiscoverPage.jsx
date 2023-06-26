// components
import { NavbarComponent } from "../components/NavbarComponent"
import { PaginationButtonsComponent } from '../components/PaginationButtonsComponent'
import { MovieContainerComponent } from "../components/MovieContainerComponent"

// contexts
import { MovieContext } from "../context/MovieContext"
import { PageSelectedContext } from "../context/PageSelectedContext"

// hooks
import { useContext, useState, useEffect } from "react"

// third party libraries
import axios from "axios"






export const DiscoverPage = () => {

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
              IsFavourite: false,
              ...movie
            }
          })
          
          setMovies(requiredData)
          setLoading(false)
        })
    }
    
    
    console.log(pageSelected, 'page selected')
    return (
        <div>
            <select name="movies" id="movies" className="text-black" onChange={handleSetGenre}>
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
            
           
            You are on the Discover Page
            {loading ? <h1>Loading...</h1> : <MovieContainerComponent /> }
            
            <PaginationButtonsComponent  />
           
        </div>
    )
}