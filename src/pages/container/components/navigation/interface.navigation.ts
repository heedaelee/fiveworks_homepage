export interface MenuListProps {
  isOpen: boolean;
}

export interface MenuItemProps {
  to: string;
  label: string;
  subItems?: {to: string; label: string}[];
  isOpen: boolean;
}
