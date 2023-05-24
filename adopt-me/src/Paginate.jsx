import React from "react";

export default function Paginate({ requestParams, setRequestParams, results }) {
  const totalPets = results?.data?.numberOfResults;
  const pageLimit = 10;
  const totalPages = totalPets / pageLimit;

  let arrTotalPages;
  if (totalPages) arrTotalPages = [...Array(Math.ceil(totalPages)).keys()]; // arr with num of pages

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

      {arrTotalPages
        ? arrTotalPages.map((page) => {
            return (
              <button
                id={page === requestParams.page ? "num-btn-active" : "num-btn"}
                key={page}
                onClick={() =>
                  setRequestParams({
                    ...requestParams,
                    page: page,
                  })
                }
              >
                {page + 1}
              </button>
            );
          })
        : null}

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
