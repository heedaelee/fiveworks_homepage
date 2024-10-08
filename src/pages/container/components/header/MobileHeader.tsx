import Logo from '../navigation/components/Logo';
import HamburgerMenu from './MobileMenu';

const MobileHeader = ({isOpen, setIsOpen}) => {
  return (
    <header className='fixed w-full top-0 z-[999] bg-white shadow-custom'>
      <div className='mx-auto flex justify-between items-center '>
        <Logo isMobile={true} />
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default MobileHeader;
