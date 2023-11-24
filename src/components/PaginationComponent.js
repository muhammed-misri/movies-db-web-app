import React from 'react'
import { Pagination } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';


const PaginationComponent = ({ getPage, pageCount }) => {
  
  const handlePageClick = (data)=>{
    //data.selected + 1
    getPage(data.selected + 1) 
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      
      onPageChange={handlePageClick}
      
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      
      pageCount={pageCount}
      previousLabel="السابق"

      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}

      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}

      activeClassName={"active"}
    />
  )
}

export default PaginationComponent
