import {useEffect, useState} from 'react';
import {IconButton, ItemProps} from '@material-tailwind/react';
import {ArrowRightIcon, ArrowLeftIcon} from '@heroicons/react/24/outline';

import PaginationButton from '@/components/pagination/PaginationButton';
import {PaginationProps, renderPaginationButtonType} from '@/components/components.interface';

export function Pagination({count, onChange, page, next, prev}: PaginationProps) {
  const [active, setActive] = useState(1);
  const buttons = [];

  /**
   * 페이지 버튼 속성
   * active일 경우 filled, 아닐경우 text
   **/
  const getItemProps = (index: number): ItemProps => ({
    variant: active === index ? 'filled' : 'text',
    color: 'gray',
    className: `flex items-center gap-2 ${active === index ? 'active' : ''}}`,
    onClick: () => handleChange(index),
  });

  //숫자 버튼 갯수 만들기
  for (let i = 1; i <= count; i++) {
    buttons.push(
      <IconButton key={i} {...getItemProps(i)}>
        {i}
      </IconButton>,
    );
  }
  const handleChange = (value: number) => {
    setActive(value);
    onChange(value);
  };

  /**
   * 다음 버튼 클릭시
   */
  const handleNextClick = () => {
    if (active < count) {
      next(active);
      setActive(active + 1);
    }
  };

  /**
   * 이전 버튼 클릭시
   */
  const handlePrevClick = () => {
    if (active > 1) {
      prev(active);
      setActive(active - 1);
    }
  };

  /**
   * 페이지 변경시 active 변경
   */
  useEffect(() => {
    //현재 page
    setActive(page);
  }, [page]);

  const renderPaginationButton: renderPaginationButtonType = ({
    disabled,
    icon,
    iconPosition,
    onClick,
    children,
  }) => (
    <PaginationButton disabled={disabled} icon={icon} iconPosition={iconPosition} onClick={onClick}>
      {children}
    </PaginationButton>
  );

  return (
    <div className='flex items-center justify-center gap-4 my-4'>
      {renderPaginationButton({
        disabled: active === 1,
        icon: ArrowLeftIcon,
        iconPosition: 'left',
        onClick: handlePrevClick,
        children: 'Previous',
      })}
      <div className='flex items-center gap-2'>{buttons}</div>
      {renderPaginationButton({
        disabled: active === count,
        icon: ArrowRightIcon,
        iconPosition: 'right',
        onClick: handleNextClick,
        children: 'Next',
      })}
    </div>
  );
}
