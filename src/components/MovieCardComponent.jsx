import { useContext } from 'react'

// icons
import { AiFillStar } from 'react-icons/ai'


export const MovieCardComponent = ({data}) => {

   

    return (
        <div >
        {/* No need to map through the data because in the movie container, it's already been mapped. We just want to design what one card would look like */}
            <h1>{data.id}</h1>
        </div>
    )
}