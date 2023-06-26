

import './App.css'
// hooks
import { useRoutes, useLocation } from 'react-router-dom'
import { useState, useEffect} from 'react'

// pages
import { HomePage } from './pages/HomePage'
import { TopRatedPage } from './pages/TopRatedPage'
import { UpcomingMoviesPage } from './pages/UpcomingMoviesPage'
import { MyListPage } from './pages/MyListPage'
import { DiscoverPage } from './pages/DiscoverPage'

// third party librareies
import axios from 'axios'

// contexts
import { MovieContext } from './context/MovieContext'
import { PageSelectedContext } from './context/PageSelectedContext'
import { NavbarComponent } from './components/NavbarComponent'
import { NavbarHomePageComponent } from './components/NavbarHomePageComponent'





function App() {

  // pages selected for pagination component
  const [pageSelected, setPageSelected] = useState(1)
  const [movies, setMovies] = useState([])

  // determine path
  const location = useLocation()
  const { pathname } = location
    
    // declare var for total pages (tmdb gives 1000 total pages only)
    
  


  useEffect(() => {
      getMoviesData()
      
  }, [pageSelected])

  const getMoviesData = () => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&page=${pageSelected}&include_video=true&sort_by=popularity.desc&language=en-US`)
      .then(({data}) => {
        const requiredData = data.results.map((movie) => {
          return {
            IsFavourite: false,
            ...movie
          }
        })

        setMovies(requiredData)
      })
  }

  
  // routes

  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/discover',
      element: <DiscoverPage />
    },
    {
      path: '/toprated',
      element: <TopRatedPage />
    },
    {
      path: '/upcoming',
      element: <UpcomingMoviesPage />
    },
    {
      path: '/mylist',
      element: <MyListPage />
    },
    {
      path: '*',
      element: <h1>Error. Page not found.</h1>
    }
  ])

  return (
  
      <PageSelectedContext.Provider value={{pageSelected, setPageSelected}}>
        
          <MovieContext.Provider value={{movies, setMovies}}>
          {pathname === '/' ? <NavbarHomePageComponent /> : <NavbarComponent />}
          {element}
          </MovieContext.Provider>

      </PageSelectedContext.Provider>


  )
}
    


export default App
