import {Link} from 'react-router-dom';
import {ItemProps} from '../subNavigation.interface';

const Item = ({name, to, handleDropdown}: ItemProps) => {
  return (
    <li className='border-b border-[#ddd] py-[7px] hover:bg-gray-200'>
      <Link to={to} className='block px-4 py-2' onClick={handleDropdown}>
        {name}
      </Link>
    </li>
  );
};

export default Item;
