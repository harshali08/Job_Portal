


// import React from 'react';
// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from '@/components/ui/pagination';

// interface PaginationProps {
//     itemsPerPage: number;
//     totalItems: number;
//     paginate: (pageNumber: number) => void;
//     currentPage: number;
// }

// const PaginationComp: React.FC<PaginationProps> = ({
//     itemsPerPage,
//     totalItems,
//     paginate,
//     currentPage,
// }) => {
//     // Calculate number of pages
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <Pagination className='mb-10'>
//             <PaginationContent>
//                 <PaginationItem>
//                     <button
//                         className={`bg-blue-600 px-3 py-1 rounded-sm text-white ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
//                         onClick={() => currentPage > 1 && paginate(currentPage - 1)}
//                         disabled={currentPage === 1}
//                     >
//                         Previous
//                     </button>
//                 </PaginationItem>
//                 {pageNumbers.map((number) => (
//                     <PaginationItem key={number}>
//                         <PaginationLink
//                             href="#"
//                             isActive={number === currentPage}
//                             onClick={() => paginate(number)}
//                         >
//                             {number}
//                         </PaginationLink>
//                     </PaginationItem>
//                 ))}
//                 {pageNumbers.length > 5 && (
//                     <PaginationItem>
//                         <PaginationEllipsis />
//                     </PaginationItem>
//                 )}
//                 <PaginationItem>
//                     <button
//                         className={`bg-blue-600 text-white px-3 py-1 rounded-sm ${currentPage === pageNumbers.length ? 'cursor-not-allowed opacity-50' : ''}`}
//                         onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
//                         disabled={currentPage === pageNumbers.length}
//                     >
//                         Next
//                     </button>
//                 </PaginationItem>
//             </PaginationContent>
//         </Pagination>
//     );
// };

// export default PaginationComp;


import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

interface PaginationProps {
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

const PaginationComp: React.FC<PaginationProps> = ({
    itemsPerPage,
    totalItems,
    paginate,
    currentPage,
}) => {
    // Calculate number of pages
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Determine the range of page numbers to display
    const maxPageNumbersToShow = 3;
    let startPage = Math.max(currentPage - Math.floor(maxPageNumbersToShow / 2), 1);
    let endPage = startPage + maxPageNumbersToShow - 1;

    if (endPage > pageNumbers.length) {
        endPage = pageNumbers.length;
        startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
    }

    const visiblePageNumbers = pageNumbers.slice(startPage - 1, endPage);

    return (
        <Pagination className='mb-10'>
            <PaginationContent className="flex flex-wrap justify-center items-center gap-2">
                <PaginationItem>
                    <button
                        className={`bg-blue-600 px-1.5 py-1 text-sm rounded-sm text-white sm:text-lg sm:px-3 sm:py-1 sm:font-medium  ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                        onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </PaginationItem>
                {startPage > 1 && (
                    <PaginationItem>
                        <PaginationEllipsis className="px-3 py-1" />
                    </PaginationItem>
                )}
                {visiblePageNumbers.map((number) => (
                    <PaginationItem key={number}>
                        <PaginationLink
                            href="#"
                            isActive={number === currentPage}
                            onClick={() => paginate(number)}
                            className="px-3 py-1"
                        >
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {endPage < pageNumbers.length && (
                    <PaginationItem>
                        <PaginationEllipsis className="px-3 py-1" />
                    </PaginationItem>
                )}
                <PaginationItem>
                    <button
                        className={`bg-blue-600 text-white px-1.5 py-1 text-sm rounded-sm sm:text-lg sm:px-3 sm:py-1 sm:font-medium ${currentPage === pageNumbers.length ? 'cursor-not-allowed opacity-50' : ''}`}
                        onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
                        disabled={currentPage === pageNumbers.length}
                    >
                        Next
                    </button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComp;
