import {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';
import '@/styles/globalCss.css';
import MenuList from './components/navigation/MenuList';
import Logo from './components/navigation/components/Logo';
import useIsHomepage from '@/hooks/useIsHomePage';

// import logoWhite from '@/assets/img/logo-white.png';

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = useIsHomepage();

  return (
    <div className='h-full'>
      <div className='flex flex-col h-screen'>
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
        {/* <aside className='bg-green-300 h-[450px] w-full flex flex-col justify-end pb-[100px] border-b-[1px] border-solid border-[#ddd]'>
        <div className='container mx-auto h-[160px]'>
          <div className='bg-white w-full text-6xl'>Overview</div>
        </div>
      </aside> */}
        <main className='flex-grow relative'>
          <Outlet />
        </main>
      </div>
      <footer className='bg-black   '>
        <div className='container flex flex-col mx-auto py-4'>
          <div className='flex flex-row justify-between items-center'>
            <div className='text-[16px] text-[#6f7880]'>
              서울 특별시 강남구 봉은사로 30길 42 202호
            </div>
            <div className='text-[16px] text-[#6f7880]'>
              <div>Tel: 02-3661-0813</div>
            </div>
          </div>
          <hr className='my-4  border-[#6f7880]' />
          <div className='flex flex-row justify-between items-center'>
            <div className='text-[16px] text-[#6f7880]'>
              Copyright ©FiveWorks. All Rights Reserved.
            </div>
            <div className='text-[16px] text-[#6f7880] flex flex-col items-end'>
              <div>Fax: 02-3664-0813</div>
              <div>사업자번호: 261-88-01451</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Container;
