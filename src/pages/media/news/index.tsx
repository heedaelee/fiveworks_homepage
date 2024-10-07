import {Pagination} from '@/components/pagination';
import {mockNewsData} from '@/constants/news-data';
import usePagination from '@/hooks/usePagination';
import CardList from '@/pages/media/Common/CardList';
import {useState} from 'react';

const NEWS_COUNT_PER_PAGE = 9;

const News = () => {
  const [totalCnt] = useState(mockNewsData.length);

  const {page, count, handlePageChange, next, prev} = usePagination(
    1,
    totalCnt,
    NEWS_COUNT_PER_PAGE,
  );

  const startIndex = (page - 1) * NEWS_COUNT_PER_PAGE;
  const endIndex = startIndex + NEWS_COUNT_PER_PAGE;
  const currentItems = mockNewsData.slice(startIndex, endIndex);
  // console.log(`startIndex : ${startIndex}`);
  // console.log(`endIndex : ${endIndex}`);
  // console.log(`mockNewsData.length : ${mockNewsData.length}`);
  // console.log(`currentItems : ${currentItems}`);

  const handleCardClick = (url: string) => {
    console.log('card clicked', url);
    window.open(url, '_blank');
  };

  return (
    <div className='container mx-auto flex flex-col gap-[60px] mb-[150px]'>
      <div>총 {totalCnt} 개의 게시물이 있습니다.</div>
      <CardList data={currentItems} handleCardClick={handleCardClick} />
      <Pagination count={count} page={page} onChange={handlePageChange} next={next} prev={prev} />
    </div>
  );
};

export default News;
