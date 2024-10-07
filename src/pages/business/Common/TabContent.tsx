import {TabContentProps} from './common.interface';

const TabsContent = ({tab, activeTab, images}: TabContentProps) => {
  return (
    <div className='w-full p-8 flex flex-col gap-16 '>
      <div className='w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white py-[40px] px-[200px] rounded-lg'>
        <h3 className='text-2xl font-bold mb-4'>
          {/*  줄 넘김 */}
          {tab[activeTab].summary.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </h3>
        <ul className='list-disc list-inside'>
          {tab[activeTab].subTitles.map((subtitle, index) => (
            <li key={index}>{subtitle}</li>
          ))}
        </ul>
      </div>

      {Array.isArray(images[activeTab]) ? (
        (images[activeTab] as string[]).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${tab[activeTab].title} ${index + 1}`}
            className='w-full h-auto object-cover'
          />
        ))
      ) : (
        <img
          src={images[activeTab] as string}
          alt={tab[activeTab].title}
          className='w-full h-auto object-cover'
        />
      )}
    </div>
  );
};

export default TabsContent;
