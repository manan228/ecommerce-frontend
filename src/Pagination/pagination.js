import { CPagination, CPaginationItem } from "@coreui/react";
import { NavLink } from "react-router-dom";

const Pagination = (props) => {
  const paginationData = props.paginationData;

  return (
    <CPagination align="center" aria-label="Page navigation example">
      {paginationData.hasPreviousPage ? (
        <NavLink to={`/store/?page=${paginationData.previousPage}`}>
          <CPaginationItem>Previous</CPaginationItem>
        </NavLink>
      ) : null}
      {paginationData.hasPreviousPage ? (
        <NavLink to={`/store/?page=${paginationData.previousPage}`}>
          <CPaginationItem>{paginationData.previousPage}</CPaginationItem>
        </NavLink>
      ) : null}
      <NavLink to={`/store/?page=${paginationData.currentPage}`}>
        <CPaginationItem>{paginationData.currentPage}</CPaginationItem>
      </NavLink>
      {paginationData.hasNextPage ? (
        <NavLink to={`/store/?page=${paginationData.nextPage}`}>
          <CPaginationItem>{paginationData.nextPage}</CPaginationItem>
        </NavLink>
      ) : null}
      {paginationData.hasNextPage ? (
        <NavLink to={`/store/?page=${paginationData.nextPage}`}>
          <CPaginationItem>Next</CPaginationItem>
        </NavLink>
      ) : null}
    </CPagination>
  );
};

export default Pagination;
