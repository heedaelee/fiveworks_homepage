import {PaginationButtonProps} from '@/components/components.interface';
import {Button} from '@material-tailwind/react';

const PaginationButton = ({
  children,
  disabled,
  icon: Icon,
  iconPosition = 'left',
  onClick,
}: PaginationButtonProps) => {
  return (
    <Button
      variant='text'
      className='flex items-center gap-2'
      onClick={onClick}
      disabled={disabled}>
      {iconPosition === 'left' && <Icon strokeWidth={2} className='h-4 w-4' />}
      {children}
      {iconPosition === 'right' && <Icon strokeWidth={2} className='h-4 w-4' />}
    </Button>
  );
};

export default PaginationButton;
