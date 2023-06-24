import axios from "axios"
import { useEffect, useState } from "react"


// third party librarie
import ReactPaginate from "react-paginate"

export const HomePage = () => {

    // [...movies], data.results
    const [movies, setMovies] = useState([])
    
    // declare var for total pages (tmdb gives 1000 total pages only)
    
    useEffect(() => {
        getMoviesData()
        
    }, [])

    const getMoviesData = () => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=e1dca25da22a67a9069503b710cfa699&page=2')
        .then(({data}) => {
            
            setMovies([...movies, data.results])

        })
    }
    console.log(movies)
    return (
        <div>
           <h1>
            You are on the Home Page
            </h1>
        </div>
    )
}