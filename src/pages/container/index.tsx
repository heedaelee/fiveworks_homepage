import {useState} from 'react';
import {Link, Outlet} from 'react-router-dom';
import '@/styles/globalCss.css';

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col h-screen'>
      <header
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`bg-blue-300 h-[125px] p-0 z-[999] fixed w-full px-5 top-0
        transition-all duration-300 ease-in-out ${isOpen && 'h-[250px]'}
        shadow-custom
        `}>
        <div className=' bg-red-400 container mx-auto flex flex-row h-full'>
          <div className='bg-yellow-200 w-[15%] flex flex-row justify-center p-[10px]'>
            <Link to='/'>
              <div>Logo</div>
            </Link>
          </div>
          <ul className='bg-slate-300 flex flex-row justify-around pt-[35px] w-[85%]'>
            <li className='w-1/5 text-center'>
              <Link to='/intro/overview'>회사소개</Link>
              <ul className={`${isOpen ? 'visible' : 'invisible'} mt-[21px] text-center`}>
                <li className='py-2'>
                  <a href='/intro/overview'>Overview</a>
                </li>
                <li className='py-2'>
                  <a href='/intro/group'>조직도</a>
                </li>
                <li className='py-2'>
                  <a href='/intro/history'>연혁</a>
                </li>
                <li className='py-2'>
                  <a href='/intro/partners'>파트너</a>
                </li>
              </ul>
            </li>
            <li className='w-1/5 text-center'>
              <Link to='/business/ai'>사업영역</Link>
            </li>
            <li className='w-1/5 text-center'>
              <Link to='/media/news'>미디어센터</Link>
            </li>
            <li className='w-1/5 text-center'>
              <Link to='/careers/process'>채용</Link>
            </li>
            <li className='w-1/5 text-center'>
              <Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </header>
      {/* 홈 아닐시 */}
      {/* <aside className='bg-green-300 h-[450px] w-full flex flex-col justify-end pb-[100px] border-b-[1px] border-solid border-[#ddd]'>
        <div className='container mx-auto h-[160px]'>
          <div className='bg-white w-full text-6xl'>Overview</div>
        </div>
      </aside> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Container;
