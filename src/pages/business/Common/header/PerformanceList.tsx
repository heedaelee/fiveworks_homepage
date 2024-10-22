import {PerformanceListProps} from '@/pages/business/Common/common.interface';

const PerformanceList = ({items}: PerformanceListProps) => {
  return (
    <ul className='list-disc list-inside'>
      {items.map((item: string, index: number) => (
        <li key={index} dangerouslySetInnerHTML={{__html: item}} />
      ))}
    </ul>
  );
};

export default PerformanceList;
