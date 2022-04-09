import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { prevPage, nextPage } from "../features/pageSlice";

const Pagination = ({ total }) => {
  const range = useSelector((state) => state.page.rangeStart)
  const perPage = useSelector((state) => state.page.increment)
  const dispatch = useDispatch()

  const disablePrev = () => {
    return range - perPage < 1
  }

  const disableNext = () => {
    return range + perPage > total
  }

  if (!total) {
    return (
      <></>
    )
  }

  return (
    <div className="pagination">
      <p>
        Showing <span>{range  } thru {range + perPage - 1}</span> of <span>{total}</span>
      </p>
      <p>
        <button onClick={() => dispatch(prevPage())} disabled={disablePrev()}>Previous Page</button>
        <button onClick={() => dispatch(nextPage())} disabled={disableNext()}>Next Page</button>
      </p>
    </div>
  )
}

export default Pagination