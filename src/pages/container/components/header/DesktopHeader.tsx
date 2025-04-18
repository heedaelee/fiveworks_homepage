import Logo from '@/pages/container/components/header/desktopComponents/navigation/components/logo/Logo';
import MenuList from '@/pages/container/components/header/desktopComponents/navigation/MenuList';
import Languages from './desktopComponents/navigation/components/lang';

interface DesktopHeaderProps {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  isHome: boolean;
}

const DesktopHeader = ({isOpen, setIsOpen, isHome}: DesktopHeaderProps) => {
  return (
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
        <Languages />
      </div>
    </header>
  );
};

export default DesktopHeader;
