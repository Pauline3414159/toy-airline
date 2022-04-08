import React from "react";

const Pagination = ({range, total, prev, next}) => (
  <div className="pagination">
    <p>
      Showing <span>{range  } thru {range + 24}</span> of <span>{total}</span>
    </p>
    <p>
      <button onClick={prev}>Previous Page</button>
      <button onClick={next}>Next Page</button>
    </p>
  </div>
)

export default Pagination