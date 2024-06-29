import React from 'react';
import { Button, LItem, Pagination, UList } from '../styles';

export const PaginationComponent = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <UList>
        {pageNumbers.map(number => (
          <LItem key={number} style={{ margin: '0 0.25rem' }}>
            <Button onClick={() => paginate(number)} style={{ padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', backgroundColor: currentPage === number ? '#007bff' : '#e9ecef', color: currentPage === number ? '#fff' : '#000', cursor: 'pointer' }}>
              {number}
            </Button>
          </LItem>
        ))}
      </UList>
    </Pagination>
  );
};

