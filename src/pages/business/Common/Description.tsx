import {DescriptionProps} from './common.interface';

const Description = ({description, workPerformance}: DescriptionProps) => {
  return (
    <div className='bg-gray-100 w-full p-8 rounded-lg mt-16 '>
      <p className='text-start mb-4'>
        <strong>(예시)</strong> {description}
      </p>
      <h2 className='font-bold mb-2'>[주요성과]</h2>
      <ul className='list-disc list-inside'>
        {workPerformance.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Description;
