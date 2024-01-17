const handlePageClick = (pageNumber, setPageNo) => {
    setPageNo(pageNumber);
  };
export const generatePage=(setPageNo, pageNo, maxPage)=>{
    const pageNumbers = [];
    
    if (maxPage <= 5) {
      for (let i = 1; i <= maxPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i,setPageNo)}
            className={pageNo === i ? 'active' : ''}
          >
            {i}
          </button>
        );
      }
    } else {
      let startPage = Math.max(1, pageNo - 2);
      let endPage = Math.min(maxPage, startPage + 4);

      while (endPage - startPage < 4) {
        startPage = Math.max(1, startPage - 1);
        endPage = Math.min(maxPage, endPage + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i, setPageNo)}
            className={pageNo === i ? 'active' : ''}
          >
            {i}
          </button>
        );
      }
    }

    return pageNumbers;
}