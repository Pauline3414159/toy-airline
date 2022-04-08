import React from "react";

const Pagination = ({range, total}) => (
  <div className="pagination">
    <p>
      Showing <span>{range  } thru {range + 24}</span> of <span>{total}</span>
    </p>
    <p>
      <button>Previous Page</button>
      <button>Next Page</button>
    </p>
  </div>
)

export default Pagination