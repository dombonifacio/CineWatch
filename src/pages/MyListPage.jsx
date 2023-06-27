import { useContext, useState } from 'react'
//icons
import { AiOutlineHeart } from 'react-icons/ai'

// contexts
import { FavouriteListContext } from '../context/FavouriteListContext'
export const MyListPage = () => {

    const { favouriteList, setFavouriteList } = useContext(FavouriteListContext)
  

    

    
    const handleRemoveFav = (id) => {
        // compares each movie in the favouriteList with the current index in button
        const updatedList = favouriteList.map((movie) => {
          if (movie.id === id) {
            return {
                // spread operator order matters. 
                ...movie,
                IsFavourite: false,
            };
          }
          return movie;
        });
        // return only true when IsFavourite is true
        const filteredList = updatedList.filter((movie) => movie.IsFavourite);
        setFavouriteList(filteredList);
    };
    
    return (
        <div>
        {favouriteList.map((movie) => (
        // grabs the current movie's id
          <div key={movie.id}>
            {/* we can grab the current movie then put it in the parameter */}
            <button onClick={() => handleRemoveFav(movie.id)}>
              <AiOutlineHeart />
            </button>
            <h1>{movie.title}</h1>
          </div>
        ))}
      </div>
    )
}