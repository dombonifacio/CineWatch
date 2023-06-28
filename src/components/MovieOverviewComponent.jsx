export const MovieOverviewComponent = ({movieDetail, genres}) => {
    return (

        <div className='mt-16 sm:mt-8 p-4  md:mx-auto lg:p-0 lg:mt-0'>
            <ul className='flex flex-wrap gap-x-2'>
                <li>
                    <h1 className='text-slate-400 lg:text-slate-300 font-bold'>Overview:</h1>
                    <p className='text-slate-500 lg:text-slate-300'>{movieDetail?.overview}</p>
                </li>
                <li className='mt-4 lg:mt-0 flex  text-sm items-center gap-x-2'>
                    <p className='font-bold text-slate-400 lg:text-slate-300'>Release: </p>
                    <p className='text-slate-500 lg:text-slate-400'>{movieDetail?.release_date}</p>
                </li>
                <li className='mt-4 lg:mt-0 flex  text-sm items-center gap-x-2'>
                    <p className='font-bold text-slate-400 lg:text-slate-300'>Language: </p>
                    <p className='text-slate-500 lg:text-slate-400'>{movieDetail.original_language?.toUpperCase()}</p>
                </li>
                <li className='mt-4 lg:mt-0 flex  text-sm items-center gap-x-2'>
                    <p className='font-bold text-slate-400 lg:text-slate-300'>Genre: </p>
                    <p className='text-slate-500 lg:text-slate-400'>{genres}</p>
                
                    
                    
                </li>
                
            </ul>
            
            
        </div>
    )
}