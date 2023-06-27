export const MovieOverviewComponent = ({movieDetail, genres}) => {
    return (

        <div className='mt-16 sm:mt-8 p-4'>
            <ul className='flex flex-wrap gap-x-2'>
                <li>
                    <h1 className='text-slate-400 font-bold'>Overview:</h1>
                    <p className='text-slate-500'>{movieDetail?.overview}</p>
                </li>
                <li className='mt-4 flex  text-sm items-center gap-x-2'>
                    <p className='font-bold text-slate-400'>Release: </p>
                    <p className='text-slate-500'>{movieDetail?.release_date}</p>
                </li>
                <li className='mt-4 flex  text-sm items-center gap-x-2'>
                    <p className='font-bold text-slate-400'>Language: </p>
                    <p className='text-slate-500'>{movieDetail.original_language?.toUpperCase()}</p>
                </li>
                <li className='mt-4 flex  text-sm items-center gap-x-2'>
                    <p className='font-bold text-slate-400'>Genre: </p>
                    <p className='text-slate-500'>{genres}</p>
                
                    
                    
                </li>
                <li>
                    
                </li>
            </ul>
            
            
        </div>
    )
}