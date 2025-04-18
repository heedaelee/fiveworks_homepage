import Logo from '@/pages/container/components/header/desktopComponents/navigation/components/logo/Logo';
import MobileMenu from '@/pages/container/components/header/mobileComponents/MobileMenu';

const MobileHeader = () => {
  return (
    <header className='fixed w-full top-0 z-[999] bg-white shadow-custom'>
      <div className='mx-auto flex justify-between items-center'>
        <Logo isMobile={true} />
        <MobileMenu />
      </div>
    </header>
  );
};

export default MobileHeader;
