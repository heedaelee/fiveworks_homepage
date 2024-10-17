import {MouseEvent, useState} from 'react';
import MenuButton from './MenuButton';
import MenuListWrapper from './MenuListWrapper';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<number[]>([]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubMenu = (index: number) => {
    // console.log('index : ', index);
    // console.log(openSubMenus);
    // openSubMenus 배열에 숫자가 포함된 인덱스는 Open되어 있다는 뜻. 그러므로 포함되어 있다면 배열에 인덱스 제거하고, 아니라면 추가
    setOpenSubMenus(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    );
  };
  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, url: string) => {
    // 클라이언트 사이드 내비게이션 보다 새로고침으로 해둠
    // setIsOpen(false); // isOpen 상태를 false로 설정
    event.preventDefault(); // Prevent the default behavior of the link
    window.location.href = url; // Navigate to the URL and refresh the page
  };

  return (
    <>
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
      <MenuListWrapper
        isOpen={isOpen}
        openSubMenus={openSubMenus}
        toggleSubMenu={toggleSubMenu}
        handleLinkClick={handleLinkClick}
      />
    </>
  );
};

export default MobileMenu;
