import React from "react";

export default function Paginate({ requestParams, setRequestParams, results }) {
  return (
    <div className="pagination">
      <button
        onClick={() =>
          setRequestParams({
            ...requestParams,
            page: requestParams.page - 1,
          })
        }
        disabled={results?.data?.startIndex === 0}
      >
        prev
      </button>
      <button
        onClick={() =>
          setRequestParams({
            ...requestParams,
            page: requestParams.page + 1,
          })
        }
        disabled={!results?.data?.hasNext}
      >
        next
      </button>
    </div>
  );
}
