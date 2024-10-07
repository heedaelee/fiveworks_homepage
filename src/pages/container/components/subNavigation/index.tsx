import {useEffect, useRef, useState} from 'react';
import {MENU_LIST} from '@/constants/menu-list';
import Dropdown from './dropdown';
import {HomeIcon} from '@heroicons/react/24/solid';

const SubNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentPath = location.pathname;
  // console.log('currentPath : ', currentPath);

  const menuItem = MENU_LIST.find(menuItem => {
    const menuItemPart = menuItem.to.split('/')[1];
    const currentPathPart = currentPath.split('/')[1];
    return menuItemPart === currentPathPart;
  })!;
  // console.log('menuItem : ', menuItem);

  const firstMenuName = menuItem?.subItems.find(subItem => {
    if (subItem.to === currentPath) {
      // console.log('subItem : ', subItem);
      return true;
    }
  })?.label;
  // console.log('firstMenuName : ', firstMenuName);

  return (
    <section className='border-b border-[#ddd] mb-[60px] h-[54px]'>
      <div className='mx-auto container flex flex-row items-center h-full'>
        <a
          href='/'
          className='border-r border-l border-[#ddd]  px-[20px] h-full flex items-center '>
          <HomeIcon className='h-6 w-6 text-black' />
        </a>
        <div className='border-r relative border-[#ddd] w-[200px] h-[54px] flex flex-row justify-start items-center px-[20px]'>
          {menuItem.label}
        </div>
        <div className='relative' ref={dropdownRef}>
          <div
            onClick={handleDropdown}
            className='bg-gray-600 text-white border-r relative border-[#ddd] w-[200px] h-[54px] flex flex-row justify-between items-center px-[20px] cursor-pointer'>
            <span>{firstMenuName}</span> <span>{`${isDropdownOpen ? '▲' : '▼'}`}</span>
          </div>
          {isDropdownOpen && <Dropdown items={menuItem.subItems} handleDropdown={handleDropdown} />}
        </div>
      </div>
    </section>
  );
};

export default SubNavigation;
