import useMobileCheck from '@/hooks/useMobileCheck';
import DesktopHeader from '@/pages/container/components/header/DesktopHeader';
import MobileHeader from '@/pages/container/components/header/MobileHeader';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isHome: boolean;
}

const Header = ({isMenuOpen, setIsMenuOpen, isHome}: HeaderProps) => {
  const isMobile = useMobileCheck();
  return (
    <>
      {isMobile ? (
        <MobileHeader />
      ) : (
        <DesktopHeader isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} isHome={isHome} />
      )}
    </>
  );
};

export default Header;
