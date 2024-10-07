import {useState} from 'react';

const usePagination = (
  initialPage: number,
  totalCount: number,
  pageSize: number,
) => {
  const [page, setPage] = useState(initialPage);
  const count = Math.ceil(totalCount / pageSize);

  /**
   * 페이지 변경 핸들러
   * @param newPage
   */
  const handlePageChange = (newPage: number) => {
    // console.log('handlePageChange : ', newPage);
    setPage(newPage);
  };

  /**
   * 다음 페이지 클릭 시
   */
  const next = () => {
    if (page < count) {
      handlePageChange(page + 1);
    }
  };

  /**
   * 이전 페이지 클릭 시
   */
  const prev = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  return {
    page,
    count,
    handlePageChange,
    next,
    prev,
  };
};

export default usePagination;
