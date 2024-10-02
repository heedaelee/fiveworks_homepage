import groupImage from '@/assets/img/pages/intro-group.png';

const Group = () => {
  return (
    <div className='container mx-auto flex flex-col gap-[80px]'>
      <div className='w-ful flex flex-col items-center animate-fade-in'>
        <h1 className='h1'>AI, 빅데이터, 클라우드의 완벽한 조화</h1>
      </div>
      <img
        src={groupImage}
        className='h-[80%] w-full object-contain mb-[200px] animate-fade-in-down'
      />
    </div>
  );
};

export default Group;
