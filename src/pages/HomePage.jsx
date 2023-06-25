import axios from "axios"
import { useEffect, useState } from "react"

// css 
import '../App.css'



// components
import { PaginationButtonsComponent } from "../components/PaginationButtonsComponent"
import { NavbarComponent } from "../components/NavbarComponent"

export const HomePage = () => {

    
    // pages selected for pagination component
    const [pageSelected, setPageSelected] = useState(1)
  
    const [movies, setMovies] = useState([])
    
    // declare var for total pages (tmdb gives 1000 total pages only)
    



    useEffect(() => {
        getMoviesData()
        
    }, [pageSelected])

    const getMoviesData = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&page=${pageSelected}`)
        .then(({data}) => {
        
            setMovies([...movies, data.results])
          

        })
    }
    
    const handlePageClick = (event) => {
       
        setPageSelected(event.selected + 1)
    }
    console.log(movies)
    
    
   

    // if page selected is greater than 1 or is not 1 then show the back back button
    // if page hits 1000th page, remove the next next button
    
 

    return (
        <>

            <NavbarComponent />
            <div className="p-4 flex flex-col items-center mt-10">
               <p className="text-4xl font-extrabold text-center">Experience the joy of watching movies on our website, where entertainment comes to life. </p>
                <PaginationButtonsComponent pageSelected={pageSelected} setPageSelected={setPageSelected} handlePageClick={handlePageClick}/>
            </div>
        </>
            
      
        
    )
}