import React from "react";

const Pagination = ({range, total, prev, next, disableNext, disablePrev}) => (
  <div className="pagination">
    <p>
      Showing <span>{range  } thru {range + 24}</span> of <span>{total}</span>
    </p>
    <p>
      <button onClick={prev} disabled={disablePrev()}>Previous Page</button>
      <button onClick={next} disabled={disableNext()}>Next Page</button>
    </p>
  </div>
)

export default Pagination