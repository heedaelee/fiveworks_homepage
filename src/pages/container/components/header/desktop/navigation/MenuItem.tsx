import {Link} from 'react-router-dom';
import {MenuItemProps} from './interface.navigation';
import useIsHomepage from '@/hooks/useIsHomePage';
import {useEffect, useState} from 'react';

const MenuItem = ({isOpen, setIsOpen, label, subItems, to}: MenuItemProps) => {
  const [visibleClass, setVisibleClass] = useState('invisible');
  const [fadeStyle, setFadeStyle] = useState({opacity: 0, transition: 'opacity 0.5s ease-in-out'});

  useEffect(() => {
    const newVisibleClass = isOpen ? 'visible' : 'invisible';
    const FadeStyle = {opacity: isOpen ? 1 : 0, transition: 'opacity 0.5s ease-in-out'};

    setVisibleClass(newVisibleClass);
    setFadeStyle(FadeStyle);
  }, [isOpen]);

  const renderUpperTextColor = () => (isHome && !isOpen ? 'text-white' : 'text-black');

  const isHome = useIsHomepage();

  const handleLinkClick = (event, path) => {
    // event.preventDefault(); // 기본 링크 동작을 막음
    event.stopPropagation(); // 부모 요소로의 이벤트 전파를 막음
    setIsOpen(false); // isOpen 상태를 false로 설정
    // 이것도 됨
    // history.go(path); // 라우터로 이동
  };

  return (
    <li className={`w-1/5 text-center ${renderUpperTextColor()} font-semibold`}>
      <Link to={to} onClick={event => handleLinkClick(event, to)}>
        {label}
      </Link>
      <ul className={`${visibleClass}  mt-[21px] text-center`} style={fadeStyle}>
        {subItems &&
          subItems.map(subItem => (
            <li key={subItem.to} className='py-2 font-normal'>
              <Link to={subItem.to} onClick={event => handleLinkClick(event, subItem.to)}>
                {subItem.label}
              </Link>
            </li>
          ))}
      </ul>
    </li>
  );
};

export default MenuItem;
