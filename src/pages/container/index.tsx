import {Link, Outlet} from 'react-router-dom';

const Container = () => {
  return (
    <div className='flex flex-col h-screen'>
      <header className=' bg-blue-300 h-[125px] p-0 z-[999] fixed w-full px-5'>
        <div className=' bg-red-400 container mx-auto h-full flex flex-row'>
          <div className='bg-yellow-200 w-[15%] flex flex-row justify-center items-center'>
            <Link to='/'>
              <div>Logo</div>
            </Link>
          </div>
          <ul className='bg-slate-300 flex flex-row justify-around items-center w-[85%]'>
            <li>
              <Link to='/intro/overview'>회사소개</Link>
            </li>
            <li>
              <Link to='/business/ai'>사업영역</Link>
            </li>
            <li>
              <Link to='/media/news'>미디어센터</Link>
            </li>
            <li>
              <Link to='/careers/process'>채용</Link>
            </li>
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </header>
      <aside className='bg-green-300 h-[450px] w-full flex flex-col justify-end pb-[100px] border-b-[1px] border-solid border-[#ddd]'>
        <div className='container mx-auto h-[160px]'>
          <div className='bg-white w-full text-6xl'>Overview</div>
        </div>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Container;
