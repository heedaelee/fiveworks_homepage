import {BenefitCardListProps} from './benefit.interface';
import {motion} from 'framer-motion';
import {Card, CardContent} from '@/components/ui/card';

const BenefitCardList = ({benefitItems}: BenefitCardListProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
      {benefitItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: index * 0.2}}
          whileHover={{scale: 1.1}}>
          <Card key={index} className='flex flex-col items-center justify-center'>
            <CardContent className='text-center py-12'>
              <item.Icon className='w-16 h-16 mx-auto mb-4 text-primary' />
              <p className='text-lg'>{item.text}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default BenefitCardList;
