// components
import { NavbarComponent } from "../components/NavbarComponent"
import { PaginationButtonsComponent } from '../components/PaginationButtonsComponent'
import { MovieContainerComponent } from "../components/MovieContainerComponent"





export const DiscoverPage = () => {

    

    return (
        <div>
            <NavbarComponent />
            You are on the Discover Page
            <MovieContainerComponent />
            <PaginationButtonsComponent  />
           
        </div>
    )
}