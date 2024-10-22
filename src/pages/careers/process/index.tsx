import Title from '@/pages/careers/process/components/Title';
import RecruitmentStep from '@/pages/careers/process/components/RecruitmentStep';
import ProcessStep from '@/pages/careers/process/components/ProcessStep';

import {useTranslation} from 'react-i18next';
import {getProcessSteps, getRecruitmentSteps} from './components/careers-data';

const Process = () => {
  const {t} = useTranslation();

  const recruitmentSteps = getRecruitmentSteps(t);
  const processSteps = getProcessSteps(t);

  return (
    <div className='x-4 py-8 mt-[25px] mb-[100px] flex flex-col gap-10'>
      <div className='container mx-auto'>
        <Title title={t('careers.process.recruitment.title')} />
        <div className='grid md:grid-cols-2 gap-8 mb-8'>
          {recruitmentSteps.map((step, index) => (
            <RecruitmentStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
      <hr className='border-gray-300 my-16 w-full' />
      <div className='container mx-auto'>
        <Title title={t('careers.process.selection.title')} />
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-4 mb-8'>
          {processSteps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
