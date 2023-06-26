// contexts
import { MovieContext } from "../context/MovieContext"

// hooks
import { useContext } from 'react'
import { MovieCardComponent } from "./MovieCardComponent"




export const MovieContainerComponent = () => {
   const { movies } = useContext(MovieContext)
 
    


    return (
        <div className="grid grid-cols-3">
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