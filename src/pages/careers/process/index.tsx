import Title from '@/pages/careers/process/components/Title';
import {recruitmentSteps, processSteps} from '@/pages/careers/process/components/careers-data';
import RecruitmentStep from '@/pages/careers/process/components/RecruitmentStep';
import ProcessStep from '@/pages/careers/process/components/ProcessStep';

const Process = () => {
  return (
    <div className='x-4 py-8 mt-[25px] mb-[100px] flex flex-col gap-10'>
      <div className='container mx-auto'>
        <Title title='채용절차' />
        <div className='grid md:grid-cols-2 gap-8 mb-8'>
          {recruitmentSteps.map((step, index) => (
            <RecruitmentStep key={index} {...step} />
          ))}
        </div>
      </div>
      <hr className='border-gray-300 mb-8 w-full' />
      <div className='container mx-auto'>
        <Title title='전형절차' />
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-4 mb-8'>
          {processSteps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
