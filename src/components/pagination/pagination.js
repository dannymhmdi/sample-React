import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./pagination.module.css";
import _ from "lodash";
const Pagination = ({ itemsCount, pageSize }) => {
    const [currentPage , setCurrentPage] = useState(1)
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pageNumber = _.range(1, pageCount + 1);
  if(pageCount === 1){
    return null
  }

  const onPageChange = (page) => {
    console.log(page)
    setCurrentPage(page)
  }

  

//   console.log("range =", pageNumber);
//   console.log('dd',_.range(1,null + 1))
  return (
    <div>
      <ul className={styles["navbar"]}>
        {pageNumber.map((page) => {
          return (
            <li key={page}>
              <NavLink onClick={() => onPageChange(page)} className={page === currentPage ? styles['active'] : null}>{page}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
