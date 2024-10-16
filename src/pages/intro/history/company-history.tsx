import {motion} from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CompanyHistory = () => {
  const {t} = useTranslation();

  // 최신 데이터 위에서 부터 보여주기 위해 배열을 역순으로 정렬, 위에서 추가된 데이터가 먼저 보이게 됨
  const events = [
    {date: '2024.04', content: t('intro.history.items.content_9')},
    {
      date: '2023.07',
      content: t('intro.history.items.content_8'),
    },
    {date: '2023.05', content: t('intro.history.items.content_7')},
    {date: '2023.01', content: t('intro.history.items.content_6')},
    {date: '2021.11', content: t('intro.history.items.content_5')},
    {date: '2021.02', content: t('intro.history.items.content_4')},
    {date: '2020.07', content: t('intro.history.items.content_3')},
    {date: '2020.02', content: t('intro.history.items.content_2')},
    {date: '2019.08', content: t('intro.history.items.content_1')},
  ];

  return (
    <div className='container mx-auto px-4 py-16 pt-10'>
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-12 text-gray-600'>2024</h1>
      <div className='relative'>
        <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-primary-foreground'></div>
        {events.map((event, index) => (
          <motion.div
            key={event.date}
            className={`flex items-center mb-8 ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            } justify-center relative`}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.1}}>
            <div
              className={`w-2/3 md:w-5/12  ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
              } text-center`}>
              <div className='p-3 md:p-4 bg-card rounded-lg shadow-lg'>
                <h3 className='text-2xl md:text-2xl font-semibold  mb-1 md:mb-2 text-gray-800'>
                  {event.date}
                </h3>
                <p className='text-xl md:text-lg text-card-foreground break-keep text-gray-600'>
                  {event.content}
                </p>
              </div>
            </div>
            {/* <div className='absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full hidden md:block'></div> */}
            <GradientDot index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

interface GradientDotProps {
  index: number;
}

const GradientDot: React.FC<GradientDotProps> = ({index}) => {
  // Calculate the color based on the index
  const colorValue = Math.min(255, Math.max(0, index * 25));
  const backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

  return (
    <div
      className='absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full hidden md:block'
      style={{backgroundColor}}></div>
  );
};

export default CompanyHistory;
