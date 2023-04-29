import * as React from "react";

function Plus(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="40px"
      width="40px"
      {...props}
    >
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
    </svg>
  );
}

export default Plus;
