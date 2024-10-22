import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';
import getEvents from './getEvents';

const HistoryGraph = () => {
  const {t} = useTranslation();

  const events = getEvents(t);

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
                <p
                  className='text-xl md:text-lg text-card-foreground break-keep text-gray-600'
                  dangerouslySetInnerHTML={{__html: event.content}}></p>
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

const GradientDot: React.FC<{index: number}> = ({index}) => {
  // Calculate the color based on the index
  const colorValue = Math.min(255, Math.max(0, index * 25));
  const backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

  return (
    <div
      className='absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full hidden md:block'
      style={{backgroundColor}}></div>
  );
};

export default HistoryGraph;
