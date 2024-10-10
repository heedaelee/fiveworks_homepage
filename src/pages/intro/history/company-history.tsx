import {motion} from 'framer-motion';
// 최신 데이터 위에서 부터 보여주기 위해 배열을 역순으로 정렬, 위에서 추가된 데이터가 먼저 보이게 됨
const events = [
  {date: '2024.04', content: 'Smart Seller 현대백화점 면세점 납품'},
  {
    date: '2023.07',
    content: '인공지능과 클라우드를 활용한 비대면 진술 조서 시스템 개발 참여기관 수행',
  },
  {date: '2023.05', content: '벤처 기업 인증'},
  {date: '2023.01', content: 'AWS 교육 프로그램 & MSP 사업 연계'},
  {date: '2021.11', content: '데이터 바우처 공급기업 선정'},
  {date: '2021.02', content: 'AI바우처 공급기업 등록'},
  {date: '2020.07', content: '전략형 창업과제 선정'},
  {date: '2020.02', content: '기업 부설 연구소 설립'},
  {date: '2019.08', content: '회사창립'},
];

const CompanyHistory = () => {
  return (
    <div className='container mx-auto px-4 py-16 pt-10'>
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-12'>2024</h1>
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
                <h3 className='text-2xl md:text-2xl font-semibold text-primary mb-1 md:mb-2'>
                  {event.date}
                </h3>
                <p className='text-xl md:text-lg text-card-foreground break-keep'>
                  {event.content}
                </p>
              </div>
            </div>
            <div className='absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full hidden md:block'></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompanyHistory;
