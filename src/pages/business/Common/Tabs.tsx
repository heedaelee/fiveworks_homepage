import {TabsProps} from './common.interface';

const Tabs = ({tab, activeTab, setActiveTab}: TabsProps) => {
  return (
    <div className='flex justify-center font-semibold text-sm md:text-lg'>
      {tab.map((item, index) => (
        <button
          key={index}
          className={`px-2 md:px-4 md:py-2 md:mx-2 rounded-t-lg bg-white 
                ${activeTab === index ? 'text-gray-800' : 'text-gray-400'}`}
          onClick={() => setActiveTab(index)}>
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
