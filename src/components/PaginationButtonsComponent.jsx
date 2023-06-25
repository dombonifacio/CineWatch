import { useState } from "react"
import ReactPaginate from "react-paginate"

export const PaginationButtonsComponent = ({pageSelected, handlePageClick}) => {
    
    const showPreviousButton = pageSelected !== 1
    const showNextButton = pageSelected !== 1000

  
    console.log(pageSelected)
    return (
        <>
         {/* alt 174 for first page previous and alt 175 for last page next */}
            
         <ReactPaginate
                previousLabel={
                   
                    showPreviousButton ? <span className="w-10 h-10 text-red-500 ">
                    ←
                    </span> :
                    null
                }
                nextLabel={
                    showNextButton ? <span className="w-10 h-10 flex justify-center items-center rounded-full">
                    →
                    </span> : null
                }
               
                pageCount={1000}
                marginPagesDisplayed={0}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                onPageActive={1}
                breakLabel={null}
                pageClassName="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center not-active-page"
                
                containerClassName="flex items-center justify-center gap-4 bg-red-500"
                
                activeClassName="bg-light-blue active-page"
                
            />
        </>
    )
}