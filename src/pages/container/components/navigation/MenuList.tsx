import MenuItem from './MenuItem';
import {MENU_LIST} from '@/constants/menu-list';
import {MenuListProps} from './interface.navigation';

const MenuList = ({isOpen, setIsOpen}: MenuListProps) => {
  return (
    <ul className={`flex flex-row justify-around pt-[35px] w-[85%] `}>
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

      {/* <MenuItem
        isOpen={isOpen}
        label='회사소개'
        subItems={[
          {to: '/intro/overview', label: 'Overview'},
          {to: '/intro/group', label: '조직도'},
          {to: '/intro/history', label: '연혁'},
          {to: '/intro/partners', label: '파트너'},
        ]}
        to='/intro/overview'
      /> */}
      {/* <li className='w-1/5 text-center'>
        <Link to='/intro/overview'>회사소개</Link>
        <ul className={`${isOpen ? 'visible' : 'invisible'} mt-[21px] text-center`}>
          <li className='py-2'>
            <a href='/intro/overview'>Overview</a>
          </li>
          <li className='py-2'>
            <a href='/intro/group'>조직도</a>
          </li>
          <li className='py-2'>
            <a href='/intro/history'>연혁</a>
          </li>
          <li className='py-2'>
            <a href='/intro/partners'>파트너</a>
          </li>
        </ul>
      </li> 
      <li className='w-1/5 text-center'>
        <Link to='/business/ai'>사업영역</Link>
      </li>
      <li className='w-1/5 text-center'>
        <Link to='/media/news'>미디어센터</Link>
      </li>
      <li className='w-1/5 text-center'>
        <Link to='/careers/process'>채용</Link>
      </li>
      <li className='w-1/5 text-center'>
        <Link to='/contact'>CONTACT</Link>
      </li>
      */}
    </ul>
  );
};

export default MenuList;
