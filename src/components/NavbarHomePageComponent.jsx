// icons
import { RxHamburgerMenu } from 'react-icons/rx'
import { FcFilmReel } from 'react-icons/fc'
import { AiFillHome } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { MdUpcoming } from 'react-icons/md'
import { PiFilmSlateBold } from 'react-icons/pi'

// hooks
import { useContext, useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

// context
import { PageSelectedContext } from '../context/PageSelectedContext'
import { LogoComponent } from './LogoComponent'



export const NavbarHomePageComponent = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const { setPageSelected } = useContext(PageSelectedContext)

    const handleToggleMenu = () => {
        
        setToggleMenu((prevState) => !prevState)
      
    }

    const handleResetPage = () => {
        setPageSelected(1)
    }
   
    return (
      <>
            <div className='p-2 flex justify-between items-center mx-auto max-w-[1640px]'>

                <LogoComponent />
                   
                    
                    
                
                <button onClick={handleToggleMenu}>
                        <RxHamburgerMenu size={"1.5rem"} className='md:hidden'/>
                </button>
                <div className='hidden md:flex'>
                    <Link to='/' className='text-slate-300 hover:text-xl flex items-center gap-x-2 p-2' onClick={handleResetPage}>Home</Link>
                    <Link to='/discover' className='text-slate-300 hover:text-xl flex items-center gap-x-2 p-2' onClick={handleResetPage}>Discover</Link>
                    <Link to='/toprated' className='text-slate-300 hover:text-xl flex items-center gap-x-2 p-2' onClick={handleResetPage}>Top Rated</Link>
                    <Link to='/upcoming' className='text-slate-300 hover:text-xl flex items-center gap-x-2 p-2' onClick={handleResetPage}>Upcoming</Link>
                   
                </div>
             
                

               
              
            
                
            </div>

            {/* Mobile Menu */}
            {toggleMenu && <div className='p-2 bg-dark-700 md:hidden'>
                <ul className='flex flex-col gap-3 '>
                    <li className=''>
                    <Link to='/' className='text-slate-300 hover:text-slate-500 flex items-center gap-x-2 border-b border-slate-500 p-2' onClick={handleResetPage}>
                        <span>
                            <AiFillHome size={"1.5rem"}/>
                        </span>
                        Home
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/discover' className='text-slate-300 hover:text-slate-500 flex items-center gap-x-2 border-b border-slate-500 p-2' onClick={handleResetPage}>
                        <span >
                            <PiFilmSlateBold size={"1.5rem"}  / >
                            
                        </span>
                        Discover
                        </Link>
                        
                    </li>
                    <li className=''>
                        <Link to='/toprated' className='text-slate-300 hover:text-slate-500 flex items-center gap-x-2 border-b border-slate-500 p-2' onClick={handleResetPage}>
                        <span >
                            <AiFillStar size={"1.5rem"}  / >
                            
                        </span>
                        Top Rated
                        </Link>
                        
                    </li>
                    <li className='mb-4'>
                    <Link to='/upcoming' className='text-slate-300 hover:text-slate-500 flex items-center gap-x-2 border-b border-slate-500 p-2' onClick={handleResetPage}>
                        <span >
                            <MdUpcoming size={"1.5rem"}  / >
                            
                        </span>
                        Upcoming
                        </Link>
                        
                    </li>
                  

                </ul>
            </div>}
        </>
        
    )
}