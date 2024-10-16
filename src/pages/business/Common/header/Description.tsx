import {useTranslation} from 'react-i18next';
import {DescriptionProps} from '../common.interface';

const Description = ({description, workPerformance}: DescriptionProps) => {
  const {t} = useTranslation();
  return (
    <div className='bg-gray-100 w-full p-8 rounded-lg mt-16 '>
      <p className='text-start mb-4 font-semibold'>{t(description)}</p>
      <h2 className='font-bold mb-2'>[주요성과]</h2>
      <ul className='list-disc list-inside'>
        {t('business.ai.workPerformance', {returnObjects: true}).map(
          (item: string, index: number) => (
            <li key={index}>{item}</li>
          ),
        )}
      </ul>
    </div>
  );
};

export default Description;
