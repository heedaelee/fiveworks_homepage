import usePagination from '@/hooks/usePagination';
import CardList from '@/pages/media/Common/CardList';
import {Pagination} from '@/components/pagination';
import {handleCardClickType} from '../../Common/common.interface';
import {EventDataType} from '@/constants/event-data';
import { useTranslation } from 'react-i18next';

interface EventListProps {
  eventData: EventDataType;
  totalCnt: number;
  handleImageClick: handleCardClickType;
}

const EVENT_COUNT_PER_PAGE = 9;

const EventList = ({eventData, totalCnt, handleImageClick}: EventListProps) => {
  const {page, count, handlePageChange, next, prev} = usePagination(
    1,
    totalCnt,
    EVENT_COUNT_PER_PAGE,
  );

  const {t} = useTranslation();

  const startIndex = (page - 1) * EVENT_COUNT_PER_PAGE;
  const endIndex = startIndex + EVENT_COUNT_PER_PAGE;
  const currentItems = eventData.slice(startIndex, endIndex);

  return (
    <>
      {totalCnt !== 0 ? (
        <>
          <div>{t('media.totalItems', {totalCnt})}</div>
          <CardList data={currentItems} type='event' handleCardClick={handleImageClick} />
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
    </>
  );
};

export default EventList;
