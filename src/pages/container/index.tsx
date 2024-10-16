import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import '@/styles/globalCss.css';

import useIsHomepage from '@/hooks/useIsHomePage';
import Footer from './components/footer';
import SubNavigation from './components/subNavigation';
import {MENU_LIST} from '@/constants/menu-list';
import Asdie from './components/aside';
import useMobileCheck from '@/hooks/useMobileCheck';
import DesktopHeader from './components/header/DesktopHeader';
import MobileHeader from './components/header/MobileHeader';
import {use} from 'i18next';
import {useTranslation} from 'react-i18next';

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = useIsHomepage();
  const pathname = location.pathname;

  const isMobile = useMobileCheck();
  const {t} = useTranslation();

  const firstMenuName =
    MENU_LIST.find(menuItem => menuItem.to.split('/')[1] === pathname.split('/')[1])?.subItems.find(
      subItem => subItem.to === pathname,
    )?.label || '';

  const appliedFirstMenuName = t(firstMenuName);
  const subtitle = t('navigation.subtitle');
  // console.log('firstMenuName : ', firstMenuName);

  return (
    <div className={isHome ? 'h-full' : ''}>
      <div className='flex flex-col h-full'>
        {isMobile ? (
          <MobileHeader />
        ) : (
          <DesktopHeader isOpen={isOpen} setIsOpen={setIsOpen} isHome={isHome} />
        )}
        {/* 홈 아닐시 */}
        {!isHome && (
          <>
            <Asdie firstMenuName={appliedFirstMenuName} subtitle={subtitle} />
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
