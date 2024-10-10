import {motion, AnimatePresence} from 'framer-motion';

import {MouseEvent} from 'react';
import MenuList from './MenuList';

interface MenuContentProps {
  isOpen: boolean;
  openSubMenus: number[];
  toggleSubMenu: (index: number) => void;
  handleLinkClick: (e: MouseEvent<HTMLAnchorElement>, to: string) => void;
}

const MenuListWrapper = ({
  isOpen,
  openSubMenus,
  toggleSubMenu,
  handleLinkClick,
}: MenuContentProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{clipPath: 'circle(0% at calc(100% - 2rem) 2rem)'}}
          animate={{clipPath: 'circle(150% at calc(100% - 2rem) 2rem)'}}
          exit={{clipPath: 'circle(0% at calc(100% - 2rem) 2rem)'}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
          className='fixed inset-0 bg-gray-600 text-white z-40 overflow-y-auto'>
          <nav className='p-8 pt-16'>
            <ul className='space-y-2'>
              <MenuList
                openSubMenus={openSubMenus}
                toggleSubMenu={toggleSubMenu}
                handleLinkClick={handleLinkClick}
              />
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuListWrapper;
