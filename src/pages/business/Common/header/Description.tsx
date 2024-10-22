import {useTranslation} from 'react-i18next';
import {DescriptionProps} from '../common.interface';
import PerformanceList from './PerformanceList';

const Description = ({description_key, workPerformance_key}: DescriptionProps) => {
  const {t} = useTranslation();
  // console.log('description_key : ', description_key);

  const items = t(workPerformance_key, {returnObjects: true}) as string[];

  return (
    <div className='bg-gray-100 w-full p-8 rounded-lg mt-16 '>
      <p className='text-start mb-4 font-semibold'>{t(description_key)}</p>
      {/* <h2 className='font-bold mb-2'>[{t('business.header.label')}]</h2> */}
      <PerformanceList items={items} />
    </div>
  );
};

export default Description;
