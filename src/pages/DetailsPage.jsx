// hooks
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// third party libraries
import axios from 'axios'

export const DetailsPage = () => {
    // get the id from the useParams object
    const { id } = useParams()
    
    const [loading, setLoading] = useState(false)
    // store the specific movie in this state
    const [ movieDetail, setMovieDetail ] = useState({})

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/discover')
    }

    useEffect(() => {
        getMoviesData()
        
    }, [id])
  
    const getMoviesData = () => {
        setLoading(true)
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&include_video=true&language=en-US&`)
        .then(({data}) => {
          
          
          setMovieDetail(data)
          setLoading(false)
        })
    }
    console.log(movieDetail)


    return (
        <div>
            <button onClick={handleNavigate}>
                Go back
            </button>
            You are on the Details page
            <h1>{movieDetail?.original_title}</h1>
        </div>
    )
}