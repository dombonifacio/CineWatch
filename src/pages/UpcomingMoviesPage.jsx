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






export const UpcomingMoviesPage = () => {

    const { movies, setMovies } = useContext(MovieContext) 
    const { pageSelected } = useContext(PageSelectedContext)

    const [ loading, setLoading ] = useState(false)




    useEffect(() => {
        getMoviesData()
        
    }, [pageSelected])
  
    const getMoviesData = () => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&page=${pageSelected}&include_video=true&sort_by=popularity.desc&language=en-US`)
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
    
    
    console.log(pageSelected, 'page selected')
    return (
        <div className="max-w-[1640px] mx-auto">
            
            
           
            <h1 className="text-2xl font-extrabold  px-4">Upcoming Movies</h1>
            {loading ? <h1>Loading...</h1> : <MovieContainerComponent /> }
            
            <PaginationButtonsComponent  />
           
        </div>
    )
}