import React from "react";

export default function Paginate({ requestParams, setRequestParams, results }) {
  const data = results?.data;
  const pages = data?.numberOfResults / (data?.endIndex - data?.startIndex); // num of pages
  let pagination;

  if (pages && data?.hasNext) pagination = [...Array(Math.ceil(pages)).keys()]; // arr with num of pages

  return (
    <div className="pagination">
      <button
        onClick={() =>
          setRequestParams({
            ...requestParams,
            page: requestParams.page - 1,
          })
        }
        disabled={data?.startIndex === 0}
      >
        prev
      </button>

      {pagination
        ? pagination.map((page) => {
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
        disabled={!data?.hasNext}
      >
        next
      </button>
    </div>
  );
}
