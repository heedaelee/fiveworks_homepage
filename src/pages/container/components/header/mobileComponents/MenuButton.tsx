import {Menu, X} from 'lucide-react';

interface MenuButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton = ({isOpen, toggleMenu}: MenuButtonProps) => {
  return (
    <button
      className='fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-md'
      onClick={toggleMenu}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}>
      {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
    </button>
  );
};

export default MenuButton;
