import historyImage from '@/assets/img/pages/intro-history.png';

const History = () => {
  return (
    <div className='container mx-auto flex flex-col gap-[80px] mb-[150px]'>
      <div className='w-ful flex flex-col items-center animate-fade-in'>
        <h1 className='h1'>FIVEWORKS, HISTORY</h1>
      </div>
      <img
        src={historyImage}
        className='h-[80%] w-full object-contain animate-fade-in-down'
      />
    </div>
  );
};

export default History;
