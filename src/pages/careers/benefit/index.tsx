import {Card, CardContent} from '@/components/ui/card';

const Icon = ({d, label}: {d: string; label: string}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='w-32 h-32 mb-4 text-primary mx-auto'
    aria-label={label}>
    <path d={d} />
  </svg>
);

const Benefits = () => {
  const benefitItems = [
    {icon: 'M18 8h1a4 4 0 0 1 0 8h-1', text: '연차 및 리프레시 휴가제공'},
    {icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', text: '연차 수당 지급'},
    {icon: 'M12 6v6l4 2', text: '9시~10시 출근제도'},
    {icon: 'M18 8h1a4 4 0 0 1 0 8h-1', text: '간식제공'},
    {icon: 'M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7', text: '경조사비 지급'},
    {icon: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2', text: '생일자 오후 반차'},
    {icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z', text: '업무관련 교육 및 도서구입'},
    {
      icon: 'M8 2v4M16 2v4M3 10h18M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
      text: '명절 및 창립기념일 선물',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8 mb-[150px]'>
      <h1 className='text-3xl font-bold mb-4'>복리후생</h1>
      <hr className='border-gray-300 mb-8' />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {benefitItems.map((item, index) => (
          <Card key={index} className='flex flex-col items-center justify-center p-4'>
            <CardContent className='text-center'>
              <Icon d={item.icon} label={item.text} />
              <p className='text-sm'>{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
