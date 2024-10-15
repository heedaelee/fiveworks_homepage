import {Card, CardContent} from '@/components/ui/card';
import {TreePalm, HandCoins, Clock, Donut, PartyPopper, Cake, LibraryBig, Gift} from 'lucide-react';
import {useTranslation} from 'react-i18next';

const Benefits = () => {
  const {t} = useTranslation();
  const benefitItems = [
    {Icon: TreePalm, text: t('benefits.items.annual_leave')},
    {Icon: HandCoins, text: '연차 수당 지급'},
    {Icon: Clock, text: '9시~10시 출근제도'},
    {Icon: Donut, text: '간식제공'},
    {Icon: PartyPopper, text: '경조사비 지급'},
    {Icon: Cake, text: '생일자 오후 반차'},
    {Icon: LibraryBig, text: '업무관련 교육 및 도서구입'},
    {
      Icon: Gift,
      text: '명절 및 창립기념일 선물',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8 mb-[150px]'>
      <h1 className='text-3xl font-bold mb-4'>복리후생</h1>
      <hr className='border-gray-300 mb-8' />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {benefitItems.map((item, index) => (
          <Card key={index} className='flex flex-col items-center justify-center'>
            <CardContent className='text-center py-12'>
              <item.Icon className='w-16 h-16 mx-auto mb-4 text-primary' />
              <p className='text-lg'>{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
