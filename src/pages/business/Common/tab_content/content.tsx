import {TabContentProps} from '../common.interface';

const Content = ({activeTab, tab}: Pick<TabContentProps, 'activeTab' | 'tab'>) => {
  return (
    <div className='w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white py-[40px] rounded-lg'>
      <h3 className='text-lg md:text-2xl font-bold mb-4 px-4 md:px-0'>
        {/*  줄 넘김 */}
        {tab[activeTab].summary.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </h3>
      <ul className='list-disc list-inside text-sm md:text-base'>
        {tab[activeTab].subTitles.map((subtitle, index) => (
          <li key={index}>{subtitle}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
