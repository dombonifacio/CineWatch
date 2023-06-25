import axios from "axios"
import { useEffect, useState } from "react"
import '../App.css'


// third party librarie
import ReactPaginate from "react-paginate"
import { PaginationButtonsComponent } from "../components/PaginationButtonsComponent"

export const HomePage = () => {

    
    // pages selected for pagination component
    const [pageSelected, setPageSelected] = useState(1)
    
    const [movies, setMovies] = useState([])
    
    // declare var for total pages (tmdb gives 1000 total pages only)
    
    useEffect(() => {
        getMoviesData()
        
    }, [])

    const getMoviesData = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&page=1`)
        .then(({data}) => {
            
            setMovies([...movies, data.results])

        })
    }
    // console.log(movies)

    // if page selected is greater than 1 or is not 1 then show the back back button
    // if page hits 1000th page, remove the next next button
    
 

    return (
       <>
           <h1>
            You are on the Home Page
            </h1>
            <h1>React Paginate Example</h1>
        
           <PaginationButtonsComponent pageSelected={pageSelected} setPageSelected={setPageSelected}/>
            
      
        </>
    )
}