import MenuItem from './MenuItem';
import {MENU_LIST} from '@/constants/menu-list';
import {MenuListProps} from './interface.navigation';

const MenuList = ({isOpen, setIsOpen}: MenuListProps) => {
  return (
    <ul className={`flex flex-row justify-around pt-[35px] w-[80%] `}>
      {MENU_LIST.map(menuItem => (
        <MenuItem
          setIsOpen={setIsOpen}
          key={menuItem.to}
          isOpen={isOpen}
          label={menuItem.label}
          subItems={menuItem.subItems}
          to={menuItem.to}
        />
      ))}
    </ul>
  );
};

export default MenuList;
