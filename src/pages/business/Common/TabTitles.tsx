import {TabsProps} from './common.interface';

const TabTitles = ({tab, activeTab, setActiveTab}: TabsProps) => {
  return (
    <div className='flex justify-center font-semibold text-sm md:text-lg'>
      {tab.map((item, index) => (
        <button
          key={index}
          className={`relative px-2 md:px-4 md:py-2 md:mx-2 rounded-t-lg bg-white transition-colors duration-500
            ${activeTab === index ? 'text-gray-800' : 'text-gray-400 hover:text-black group'}`}
          onClick={() => setActiveTab(index)}>
          {item.title}
          <span
            className={`absolute bottom-[-4px] left-1/2 w-0 h-[1.4px] bg-gray-800 transition-all duration-500 ease-out 
              ${activeTab === index ? 'w-[92%] transform -translate-x-1/2' : 'group-hover:w-[90%] group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2'}`}></span>
        </button>
      ))}
    </div>
  );
};

export default TabTitles;
