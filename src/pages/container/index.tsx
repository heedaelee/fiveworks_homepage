import {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import '@/styles/globalCss.css';
import useIsHomepage from '@/hooks/useIsHomePage';
import Footer from './components/footer';
import SubNavigation from './components/subNavigation';
import Asdie from './components/aside';
import {useTranslation} from 'react-i18next';
import ScrollTopButton from './components/scrollTopButton';
import useFirstMenuName from './hooks/useFirstMenuName';
import Header from './components/header';

const Container = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = useIsHomepage();
  const firstMenuName = useFirstMenuName();
  const {t} = useTranslation();
  const locationForScroll = useLocation();

  // console.log('firstMenuName : ', firstMenuName);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationForScroll]);

  return (
    <div className={`${isHome ? 'h-full' : ''} relative`}>
      <div className='flex flex-col h-full'>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isHome={isHome} />
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
