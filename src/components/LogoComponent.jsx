import { FcFilmReel } from 'react-icons/fc'
import { Link } from 'react-router-dom'

export const LogoComponent = () => {
    return (
        <div >
            <Link to={'/'} className='flex gap-x-1'>
                
                <FcFilmReel size={"1.8rem"}/>
                <p className='text-2xl font-bold font-signature'>CineWatch</p>
            </Link>
        </div>
    )
}