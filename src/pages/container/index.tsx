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
import {useTranslation} from 'react-i18next';
import ScrollTopButton from './components/scrollTopButton';

const Container = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = useIsHomepage();
  const pathname = location.pathname;

  const isMobile = useMobileCheck();
  const {t} = useTranslation();

  const firstMenuName =
    MENU_LIST.find(menuItem => menuItem.to.split('/')[1] === pathname.split('/')[1])?.subItems.find(
      subItem => subItem.to === pathname,
    )?.label || '';

  // console.log('firstMenuName : ', firstMenuName);

  return (
    <div className={`${isHome ? 'h-full' : ''} relative`}>
      <div className='flex flex-col h-full'>
        {isMobile ? (
          <MobileHeader />
        ) : (
          <DesktopHeader isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} isHome={isHome} />
        )}
        {/* 홈 아닐시 */}
        {!isHome && (
          <>
            <Asdie firstMenuName={t(firstMenuName)} subtitle={t('navigation.subtitle')} />
            <SubNavigation />
          </>
        )}
        <main className='flex-grow relative'>
          <Outlet />
        </main>
      </div>
      <Footer />
      {!isHome && <ScrollTopButton />}
    </div>
  );
};

export default Container;
