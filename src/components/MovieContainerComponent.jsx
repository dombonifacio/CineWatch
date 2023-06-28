// contexts
import { MovieContext } from "../context/MovieContext"

// hooks
import { useContext } from 'react'
import { MovieCardComponent } from "./MovieCardComponent"




export const MovieContainerComponent = () => {
   const { movies } = useContext(MovieContext)
 
    


    return (
        <div className="p-4 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-3 ">
            {/* {movies[0].map((movie) => {
                return (
                    // return the card component here
                    <MovieCardComponent data={movie} />
                )
            })} */}
            {movies.map((movie, index) => {
                return (

                    <MovieCardComponent data={movie} index={index}/>
                )
            })}
        </div>
    )
}