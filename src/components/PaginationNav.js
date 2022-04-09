import React from "react";

const Pagination = ({range, total, prev, next, disableNext, disablePrev, perPage}) => (
  <div className="pagination">
    <p>
      Showing <span>{range  } thru {range + perPage - 1}</span> of <span>{total}</span>
    </p>
    <p>
      <button onClick={prev} disabled={disablePrev()}>Previous Page</button>
      <button onClick={next} disabled={disableNext()}>Next Page</button>
    </p>
  </div>
)

export default Pagination