import {useTranslation} from 'react-i18next';
import {Department, getDepartments} from '../getDepartments';
import TreeNode from './TreeNode';

const MobileChart = () => {
  const {t} = useTranslation();
  const departments: Department[] = getDepartments(t);

  return (
    <div className='container mx-auto px-8 py-8  '>
      <div className='bg-white rounded-lg shadow-lg p-4 px-8 sm:px-48'>
        {departments.map(dept => (
          <TreeNode key={dept.name} node={dept} level={0} />
        ))}
      </div>
    </div>
  );
};

export default MobileChart;
