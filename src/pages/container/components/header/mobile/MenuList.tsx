import {motion, AnimatePresence} from 'framer-motion';
import {ChevronDown, ChevronUp} from 'lucide-react';
import {MENU_LIST} from '@/constants/menu-list';
import {Link} from 'react-router-dom';
import {MouseEvent} from 'react';

interface MenuListProps {
  openSubMenus: number[];
  toggleSubMenu: (index: number) => void;
  handleLinkClick: (event: MouseEvent<HTMLAnchorElement>, url: string) => void;
}

const MenuList = ({openSubMenus, toggleSubMenu, handleLinkClick}: MenuListProps) => {
  return (
    <>
      {MENU_LIST.map((item, index) => (
        <motion.li
          key={index}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: index * 0.1}}>
          <button
            className='flex justify-between items-center w-full text-left text-xl font-bold py-2'
            onClick={() => toggleSubMenu(index)}
            aria-expanded={openSubMenus.includes(index)}>
            {item.label}
            {openSubMenus.includes(index) ? (
              <ChevronUp className='w-5 h-5' />
            ) : (
              <ChevronDown className='w-5 h-5' />
            )}
          </button>
          <AnimatePresence>
            {openSubMenus.includes(index) && (
              <motion.ul
                initial={{height: 0, opacity: 0}}
                animate={{height: 'auto', opacity: 1}}
                exit={{height: 0, opacity: 0}}
                transition={{duration: 0.3, ease: 'easeInOut'}}
                className='ml-4 overflow-hidden'>
                {item.subItems.map((subItem, subIndex) => (
                  <motion.li
                    key={subIndex}
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: subIndex * 0.05}}
                    className='py-2'>
                    <Link
                      to={subItem.to}
                      onClick={e => handleLinkClick(e, subItem.to)}
                      className='text-white'>
                      {subItem.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.li>
      ))}
    </>
  );
};

export default MenuList;
