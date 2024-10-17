import {Pagination} from '@/components/pagination';
// import {mockNewsData} from '@/constants/news-data';
import {newsData} from '@/constants/news-data';
import usePagination from '@/hooks/usePagination';
import CardList from '@/pages/media/Common/CardList';

import {useState} from 'react';
import { useTranslation } from 'react-i18next';

const NEWS_COUNT_PER_PAGE = 9;

const News = () => {
  const [totalCnt] = useState(newsData.length);
  // const [totalCnt] = useState(mockNewsData.length);

  const {page, count, handlePageChange, next, prev} = usePagination(
    1,
    totalCnt,
    NEWS_COUNT_PER_PAGE,
  );

  const startIndex = (page - 1) * NEWS_COUNT_PER_PAGE;
  const endIndex = startIndex + NEWS_COUNT_PER_PAGE;
  const currentItems = newsData.slice(startIndex, endIndex);
  // const currentItems = mockNewsData.slice(startIndex, endIndex);
  // console.log(`startIndex : ${startIndex}`);
  // console.log(`endIndex : ${endIndex}`);
  // console.log(`mockNewsData.length : ${mockNewsData.length}`);
  // console.log(`currentItems : ${currentItems}`);

  const handleCardClick = (url: string) => {
    // console.log('card clicked', url);
    window.open(url, '_blank');
  };

  const {t} = useTranslation();

  return (
    <div className='container mx-auto flex flex-col gap-[60px] mb-[150px]'>
      {totalCnt !== 0 ? (
        <>
          <div>{t('media.totalItems', {totalCnt})}</div>
          <CardList data={currentItems} handleCardClick={handleCardClick} />
          <Pagination
            count={count}
            page={page}
            onChange={handlePageChange}
            next={next}
            prev={prev}
          />
        </>
      ) : (
        <div>게시물이 없습니다.</div>
      )}
    </div>
  );
};

export default News;
