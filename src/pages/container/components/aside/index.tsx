const Asdie = ({firstMenuName}: {firstMenuName: string}) => {
  return (
    <aside className=' h-[400px] w-full flex flex-col justify-end pt-[150px] pb-[100px]  border-b-[1px] border-solid border-[#ddd] overflow-y: auto;'>
      <div className='container mx-auto h-full'>
        <div className='bg-white w-full text-7xl text-gray-600 font-semibold'>{firstMenuName}</div>
      </div>
    </aside>
  );
};

export default Asdie;
