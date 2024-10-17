import {useTranslation} from 'react-i18next';
import {motion} from 'framer-motion';
import {ChevronDown, ChevronUp} from 'lucide-react';
import {MENU_LIST} from '@/constants/menu-list';
import {MouseEvent} from 'react';
import SubMenuList from '@/pages/container/components/header/mobileComponents/subMenuList';
import LanguageSwitcher from './lang';

interface MenuListProps {
  openSubMenus: number[];
  toggleSubMenu: (index: number) => void;
  handleLinkClick: (event: MouseEvent<HTMLAnchorElement>, url: string) => void;
}

const MenuList = ({openSubMenus, toggleSubMenu, handleLinkClick}: MenuListProps) => {
  const {t} = useTranslation();

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
            {t(item.label)}
            {openSubMenus.includes(index) ? (
              <ChevronUp className='w-5 h-5' />
            ) : (
              <ChevronDown className='w-5 h-5' />
            )}
          </button>
          <SubMenuList
            item={item}
            index={index}
            openSubMenus={openSubMenus}
            handleLinkClick={handleLinkClick}
          />
        </motion.li>
      ))}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: MENU_LIST.length * 0.1}}>
        <LanguageSwitcher />
      </motion.div>
    </>
  );
};

export default MenuList;
