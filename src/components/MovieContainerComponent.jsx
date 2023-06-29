

// hooks
import { useContext } from 'react'
import { MovieCardComponent } from "./MovieCardComponent"






export const MovieContainerComponent = ({data}) => {
   
 
    


    return (
        <div className="p-4 gap-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-3 max-w-[1640px] mx-auto">
         
            {data.map((movie, index) => {
                return (

                    <MovieCardComponent data={movie} index={index} />
                )
            })}
        </div>
    )
}