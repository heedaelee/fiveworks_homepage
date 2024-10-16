import {Link} from 'react-router-dom';
import {ItemProps} from '../subNavigation.interface';
import {useTranslation} from 'react-i18next';

const Item = ({name, to, handleDropdown}: ItemProps) => {
  const {t} = useTranslation();
  return (
    <li className='border-b border-[#ddd] py-[7px] hover:bg-gray-200'>
      <Link to={to} className='block px-4 py-2' onClick={handleDropdown}>
        {t(name)}
      </Link>
    </li>
  );
};

export default Item;
