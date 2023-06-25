// icons
import { RxHamburgerMenu } from 'react-icons/rx'
import { FcFilmReel } from 'react-icons/fc'
import {BsSearch } from 'react-icons/bs'


export const NavbarComponent = () => {
   
    return (
      <>
            <div className='p-4 flex justify-between items-center'>

                <div className='flex gap-1 items-center'>

                    <button>
                    <RxHamburgerMenu size={"1.5rem"}/>
                    </button>
                    <FcFilmReel size={"1.8rem"}/>
                    <p className='text-2xl font-bold font-signature'>CineWatch</p>
                </div>
                <BsSearch size={"1.5rem"}/>

                

               
              
            
                
            </div>
        </>
        
    )
}