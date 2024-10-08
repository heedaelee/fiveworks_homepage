export interface MenuListProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface MenuItemProps {
  to: string;
  label: string;
  subItems?: {to: string; label: string}[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
