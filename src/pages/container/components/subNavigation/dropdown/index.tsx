import {DropdownProps} from '../subNavigation.interface';
import Item from './Item';
const Dropdown = ({items, handleDropdown}: DropdownProps) => {
  return (
    <ul className='absolute top-full left-0 bg-white border border-[#ddd] w-[200px] z-10'>
      {items.map(item => (
        <Item key={item.label} name={item.label} to={item.to} handleDropdown={handleDropdown} />
      ))}
    </ul>
  );
};

export default Dropdown;
