const Asdie = ({firstMenuName, subtitle}: {firstMenuName: string; subtitle: string}) => {
  const isLongTitle = firstMenuName.length > 10;

  return (
    <aside className=' h-[400px] w-full flex flex-col justify-end pt-[150px] pb-[100px]  border-b-[1px] border-solid border-[#ddd] overflow-y: auto;'>
      <div className='container mx-auto h-full'>
        <div
          key={firstMenuName}
          className={`bg-white w-full ${isLongTitle ? 'text-5xl' : 'text-6xl'} sm:text-7xl text-gray-600 font-semibold animate-fade-in `}>
          {firstMenuName}
        </div>
        <div className='text-xl md:text-4xl text-gray-300 mt-4'>{subtitle}</div>
      </div>
    </aside>
  );
};

export default Asdie;
