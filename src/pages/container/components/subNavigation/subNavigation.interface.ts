import {SubMenuItem} from '@/constants/menu-list';

export interface ItemProps {
  name: string;
  to: string;
  handleDropdown: () => void;
}

export interface DropdownProps {
  items: SubMenuItem[];
  handleDropdown: () => void;
}
