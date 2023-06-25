import axios from "axios"
import { useEffect, useState } from "react"

// css 
import '../App.css'


// components
import { NavbarHomePageComponent } from "../components/NavbarHomePageComponent"

// icons
import { GrFormNextLink } from 'react-icons/gr'

// hooks
import { BrowserRouter, Link } from "react-router-dom"

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

            <NavbarHomePageComponent />
            <div className="p-4 flex flex-col items-center mt-24 gap-5 h-screen">
               <p className="text-4xl font-extrabold text-center">Unleash Your Inner Cinephile: Explore, Stream, and Enjoy!</p>
               <p className="text-center font-extralight text-slate-400">Experience the joy of watching movies on our website, where entertainment comes to life.
               Indulge in a cinematic adventure from the comfort of your own screen, as our diverse collection of movies caters to every genre and mood.</p>
               <input type="text" className="w-full p-2 text-dark-700 border rounded-md" placeholder="Search for a movie">
               
               </input>
              
               
               
                <Link to='/discover' className="rounded-full border p-3 w-1/2 bg-sky-500 border-dark-blue text-black text-xl hover:bg-sky-700  font-md flex justify-center items-center gap-2">
                    
                    Watch Movies
                    <span>
                        <GrFormNextLink />
                    </span>
                </Link>
              
              
            </div>
        </>
            
      
        
    )
}