import React from "react";
import Pagination from "react-bootstrap/Pagination";

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
  const items = [];
  for (let page = 1; page <= totalPages; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => onPageChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
};

export default CustomPagination;
