

import './App.css'

import { useRoutes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { TopRatedPage } from './pages/TopRatedPage'
import { UpcomingMoviesPage } from './pages/UpcomingMoviesPage'
import { MyListPage } from './pages/MyListPage'

function App() {
  

  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />
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

  return element
}
    


export default App
