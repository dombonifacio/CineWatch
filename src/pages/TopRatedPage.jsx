// contexts
import { MovieContext } from "../context/MovieContext"
import { PageSelectedContext } from "../context/PageSelectedContext"

// hooks
import { useContext, useState, useEffect } from 'react'

// third party libraries
import axios from "axios"

// components
import { NavbarComponent } from "../components/NavbarComponent"
import { MovieContainerComponent } from "../components/MovieContainerComponent"
import { PaginationButtonsComponent } from "../components/PaginationButtonsComponent"

export const TopRatedPage = () => {

    const { movies, setMovies } = useContext(MovieContext) 
    const { pageSelected } = useContext(PageSelectedContext)
    const [ loading, setLoading ] = useState(false)
  
      
      // declare var for total pages (tmdb gives 1000 total pages only)
   
  
  
    useEffect(() => {

        getMoviesData()

        
    }, [pageSelected])
  
    const getMoviesData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=${pageSelected}&include_video=true&language=en-US&vote_average.desc`)
        .then(({data}) => {
            setLoading(true)
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



    return (
        <div className="max-w-[1640px] mx-auto">
           

            <h1 className="text-2xl font-extrabold  px-4">Top Rated Movies</h1>
            {loading ? <h1>Loading...</h1> : <MovieContainerComponent /> }
            
            <PaginationButtonsComponent  />
        </div>
    )
}