// components
import { NavbarComponent } from "../components/NavbarComponent"
import { PaginationButtonsComponent } from '../components/PaginationButtonsComponent'

// hooks
import {  useContext } from "react"

// third party libraries
import axios from "axios"

// contexts
import { MovieContext } from "../context/MovieContext"


export const DiscoverPage = () => {

    const { movies } = useContext(MovieContext)
    
    console.log(movies)

    return (
        <div>
            <NavbarComponent />
            You are on the Discover Page
            
            <PaginationButtonsComponent  />
            {/* {movies.map((movie) => {
                return (
                    <div>
                        <h1>{movie.id}</h1>
                    </div>
                )
            })} */}
        </div>
    )
}