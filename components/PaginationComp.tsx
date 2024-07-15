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

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                      className='bg-blue-600 text-white'
                        href="#"
                        onClick={() => paginate(currentPage - 1)}
                        // disabled={currentPage === 1}
                    />
                </PaginationItem>
                {pageNumbers.map((number) => (
                    <PaginationItem key={number}>
                        <PaginationLink
                            href="#"
                            isActive={number === currentPage}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        className='bg-blue-600 text-white'
                        onClick={() => paginate(currentPage + 1)}
                        // disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComp;
