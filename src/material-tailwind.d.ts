// import {IconButton} from '@material-tailwind/react';
// material-tailwind.d.ts
import {} from '@material-tailwind/react';
import {color, variant} from '@material-tailwind/react/types/components/button';
import {CSSProperties} from 'react';

type EventCapture = {
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};

declare module '@material-tailwind/react' {
  export interface ButtonProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TabsHeaderProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface NavbarProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface CarouselProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TabProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TabsBodyProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface CardProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface TypographyProps extends EventCapture {
    placeholder?: unknown;
  }
  export interface IconButtonProps extends EventCapture {
    placeholder?: unknown;
    color?: color;
  }

  export interface ItemProps {
    variant: variant;
    color: color;
    className: string;
    onClick: () => void;
  }

  export interface ListButtonProps {
    text?: string;
    onClick: () => void;
    color?: color;
    style?: CSSProperties;
  }
  // more...
}
