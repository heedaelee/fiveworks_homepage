import {FC} from 'react';
import {LucideIcon} from 'lucide-react';

interface RecruitmentStepProps {
  icon: LucideIcon;
  title: string;
  description: JSX.Element;
}

const RecruitmentStep: FC<RecruitmentStepProps> = ({icon: Icon, title, description}) => (
  <div className='text-center'>
    <Icon className='w-16 h-16 mx-auto mb-4 text-primary' />
    <h2 className='text-xl font-semibold mb-2'>{title}</h2>
    <p>{description}</p>
  </div>
);

export default RecruitmentStep;
