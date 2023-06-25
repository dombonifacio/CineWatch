// icons
import { RxHamburgerMenu } from 'react-icons/rx'
import { FcFilmReel } from 'react-icons/fc'
import { AiFillHome } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { MdUpcoming } from 'react-icons/md'
import { PiFilmSlateBold } from 'react-icons/pi'

// hooks
import { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'



export const NavbarHomePageComponent = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        
        setToggleMenu((prevState) => !prevState)
      
    }
   
    return (
      <>
            <div className='p-4 flex justify-between items-center'>

                <div className='flex gap-1 items-center'>

                    <button onClick={handleToggleMenu}>
                        <RxHamburgerMenu size={"1.5rem"}/>
                    </button>
                    <FcFilmReel size={"1.8rem"}/>
                    <p className='text-2xl font-bold font-signature'>CineWatch</p>
                    
                    
                </div>
             
                

               
              
            
                
            </div>

            {/* Mobile Menu */}
            {toggleMenu && <div className='p-2 bg-dark-700 '>
                <ul className='flex flex-col gap-3 '>
                    <li className=''>
                    <Link to='/' className='text-slate-300 hover:text-slate-500 flex items-center gap-x-2 border-b border-slate-500 p-2'>
                        <span>
                            <AiFillHome size={"1.5rem"}/>
                        </span>
                        Home
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/discover' className='text-slate-300 hover:text-slate-500 flex items-center gap-x-2 border-b border-slate-500 p-2'>
                        <span >
                            <PiFilmSlateBold size={"1.5rem"}  / >
                            
                        </span>
                        Discover
                        </Link>
                        
                    </li>
                    <li className=''>
                        <Link to='/toprated' className='text-slate-300 hover:text-slate-500 flex items-center gap-x-2 border-b border-slate-500 p-2'>
                        <span >
                            <AiFillStar size={"1.5rem"}  / >
                            
                        </span>
                        Top Rated
                        </Link>
                        
                    </li>
                    <li className=''>
                    <Link to='/upcoming' className='text-slate-300 hover:text-slate-500 flex items-center gap-x-2 border-b border-slate-500 p-2'>
                        <span >
                            <MdUpcoming size={"1.5rem"}  / >
                            
                        </span>
                        Upcoming
                        </Link>
                        
                    </li>
                   <li className='mb-4'>
                        <Link to='/mylist' className='text-slate-300 hover:text-slate-500 flex items-center gap-x-2 border-b border-slate-500 p-2'>
                        <span >
                            <AiFillHeart size={"1.5rem"}  / >
                            
                        </span>
                        My List
                        </Link>
                    </li>

                </ul>
            </div>}
        </>
        
    )
}