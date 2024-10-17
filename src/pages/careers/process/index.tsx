import Title from '@/pages/careers/process/components/Title';
import RecruitmentStep from '@/pages/careers/process/components/RecruitmentStep';
import ProcessStep from '@/pages/careers/process/components/ProcessStep';
import {CalendarClock, Clock} from 'lucide-react';
import {useTranslation} from 'react-i18next';

const Process = () => {
  const {t} = useTranslation();

  const recruitmentSteps = [
    {
      icon: CalendarClock,
      title: t('careers.process.recruitment.steps.item1.title'),
      description: (
        <>
          {t('careers.process.recruitment.steps.item1.content1')}
          <br />
          {t('careers.process.recruitment.steps.item1.content2')}
        </>
      ),
    },
    {
      icon: Clock,
      title: t('careers.process.recruitment.steps.item2.title'),
      description: (
        <>
          {t('careers.process.recruitment.steps.item2.content1')}
          <br />
          {t('careers.process.recruitment.steps.item2.content2')}
        </>
      ),
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: t('careers.process.selection.steps.item1.title'),
      description: t('careers.process.selection.steps.item1.content'),
    },
    {
      step: 2,
      title: t('careers.process.selection.steps.item2.title'),
      description: t('careers.process.selection.steps.item2.content'),
    },
    {
      step: 3,
      title: t('careers.process.selection.steps.item3.title'),
      description: t('careers.process.selection.steps.item3.content'),
    },
    {
      step: 4,
      title: t('careers.process.selection.steps.item4.title'),
      description: t('careers.process.selection.steps.item4.content'),
    },
  ];

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
