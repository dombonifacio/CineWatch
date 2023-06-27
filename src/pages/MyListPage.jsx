import { useContext, useState } from 'react'

// contexts
import { FavouriteListContext } from '../context/FavouriteListContext'
export const MyListPage = () => {

    const { favouriteList, setFavouriteList } = useContext(FavouriteListContext)

    
    return (
        <div>
            {favouriteList.map((movie) => {
                return (
                    
                    <div>
                        <h1>{movie.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}