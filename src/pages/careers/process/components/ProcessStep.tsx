import { FC } from 'react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className='flex flex-col items-center text-center w-full md:w-1/4'>
    <div className='w-16 h-16 rounded-full bg-blue-800 text-white flex items-center justify-center text-xl font-bold mb-4'>
      {step}
    </div>
    <h3 className='text-lg font-semibold mb-2'>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ProcessStep;