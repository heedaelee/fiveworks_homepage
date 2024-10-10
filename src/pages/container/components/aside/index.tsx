const Asdie = ({firstMenuName}: {firstMenuName: string}) => {
  return (
    <aside className=' h-[400px] w-full flex flex-col justify-end pt-[150px] pb-[100px]  border-b-[1px] border-solid border-[#ddd] overflow-y: auto;'>
      <div className='container mx-auto h-full'>
        <div className='bg-white w-full text-7xl text-gray-600 font-semibold'>{firstMenuName}</div>
        <div className='text-xl md:text-4xl text-gray-300 mt-4'>
          고객의 비즈니스를 위한 스마트하고 효율적인 기술 파트너가 되어드리겠습니다
        </div>
      </div>
    </aside>
  );
};

export default Asdie;
