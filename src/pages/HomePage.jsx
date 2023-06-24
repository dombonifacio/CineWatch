import axios from "axios"
import { useEffect } from "react"

export const HomePage = () => {

    

    useEffect(() => {
        getMoviesData()
    }, [])

    const getMoviesData = () => {
        axios.get('https://api.themoviedb.org/3/discover/movie?page=3&api_key=e1dca25da22a67a9069503b710cfa699')
        .then(({data}) => {
            console.log(data)
        })
    }

    return (
        <div>
           <h1>
            You are on the Home Page
            </h1>
        </div>
    )
}