import {Card, CardContent} from '@/components/ui/card';
import {TreePalm, HandCoins, Clock, Donut, PartyPopper, Cake, LibraryBig, Gift} from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {motion} from 'framer-motion';

const Benefits = () => {
  const {t} = useTranslation();
  const benefitItems = [
    {Icon: TreePalm, text: t('benefits.items.annual_leave')},
    {Icon: HandCoins, text: t('benefits.items.annual_allowance')},
    {Icon: Clock, text: t('benefits.items.flexible_hours')},
    {Icon: Donut, text: t('benefits.items.snacks')},
    {Icon: PartyPopper, text: t('benefits.items.celebration_allowance')},
    {Icon: Cake, text: t('benefits.items.birthday_half_day')},
    {Icon: LibraryBig, text: t('benefits.items.education_books')},
    {
      Icon: Gift,
      text: t('benefits.items.holiday_gifts'),
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8 mb-[150px]'>
      <motion.h1
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2, ease: 'easeInOut'}}
        className='text-3xl font-bold mb-4'>
        {t('benefits.title')}
      </motion.h1>
      <hr className='border-gray-300 mb-8' />

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
    </div>
  );
};

export default Benefits;
