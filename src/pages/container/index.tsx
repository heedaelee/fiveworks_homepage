import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import '@/styles/globalCss.css';
import MenuList from './components/navigation/MenuList';
import Logo from './components/navigation/components/Logo';
import useIsHomepage from '@/hooks/useIsHomePage';
import Footer from './components/footer';
import SubNavigation from './components/subNavigation';
import {MENU_LIST} from '@/constants/menu-list';
import Asdie from './components/aside';

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = useIsHomepage();
  const pathname = location.pathname;

  const firstMenuName =
    MENU_LIST.find(menuItem => menuItem.to.split('/')[1] === pathname.split('/')[1])?.subItems.find(
      subItem => subItem.to === pathname,
    )?.label || '';

  console.log('firstMenuName : ', firstMenuName);

  return (
    <div className={isHome ? 'h-full' : ''}>
      <div className='flex flex-col h-full'>
        <header
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className={`h-[110px] p-0 z-[999] fixed w-full px-5 top-0
        transition-all duration-500 ease-in-out ${isOpen && 'h-[249px]'}
        ${isHome && !isOpen ? 'bg-transparent' : 'bg-white shadow-custom'}
        `}>
          <div className='container mx-auto flex flex-row h-full'>
            <Logo isOpen={isOpen} />
            <MenuList isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </header>
        {/* 홈 아닐시 */}
        {!isHome && (
          <>
            <Asdie firstMenuName={firstMenuName} />
            <SubNavigation />
          </>
        )}
        <main className='flex-grow relative'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Container;
