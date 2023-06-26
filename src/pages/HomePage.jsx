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

   
    
    
   

    // if page selected is greater than 1 or is not 1 then show the back back button
    // if page hits 1000th page, remove the next next button
    
 

    return (
        <>

            <div className="p-4 flex flex-col items-center mt-24 gap-5 h-screen">
               <p className="text-4xl font-extrabold text-center">Unleash Your Inner Cinephile: Explore, Stream, and Enjoy!</p>
               <p className="text-center font-extralight text-slate-400">Experience the exhilaration of watching movies on our state-of-the-art website, where entertainment transcends boundaries and transports you to a realm of immersive cinematic bliss. Indulge in an awe-inspiring cinematic adventure from the cozy confines of your own screen, as our vast and meticulously curated collection of movies caters to every conceivable genre, mood, and taste, promising an unforgettable sensory experience that will leave you spellbound and yearning for more.</p>
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