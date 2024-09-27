import {Outlet} from 'react-router-dom';

const Container = () => {
  return (
    <div className='flex flex-col h-screen'>
      <header className='bg-blue-300 h-[125px] p-0 z-[999] fixed w-full px-5'>
        <div className='bg-red-400 max-w-[1420px] mx-auto h-full'>GNB</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Container;
