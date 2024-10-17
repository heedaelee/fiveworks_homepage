import {motion, AnimatePresence} from 'framer-motion';
import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

interface SubMenuListProps {
  openSubMenus: number[];
  index: number;
  item: {subItems: {to: string; label: string}[]};
  handleLinkClick: (event: MouseEvent<HTMLAnchorElement>, url: string) => void;
}

const SubMenuList = ({openSubMenus, index, item, handleLinkClick}: SubMenuListProps) => {
  const {t} = useTranslation();

  return (
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
                {t(subItem.label)}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default SubMenuList;
