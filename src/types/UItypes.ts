import {MouseEvent} from 'react';

// cpmponents/pagination/index.tsx
export interface PaginationProps {
  count: number;
  page: number;
  next: (param: number) => void;
  prev: (param: number) => void;
  onChange: (value: number) => void;
}
// cpmponents/pagination/PaginationButton.tsx
export interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconPosition: 'left' | 'right';
  children: string;
}
