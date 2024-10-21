import {useTranslation} from 'react-i18next';
import {Department, getDepartments} from '@/pages/intro/group/components/getDepartments';
import renderDepartmentTree from './renderDepartmentTree';

const DesktopChart = () => {
  const {t} = useTranslation();
  const departments: Department[] = getDepartments(t);

  return (
    <div className='container mx-auto px-4 py-16 pb-40'>
      <div className='w-full h-[900px] overflow-hidden'>
        <svg
          width={1600}
          height={1000}
          viewBox='45 340 1650 900'
          className='w-full h-full'
          style={{transform: `scale(1.5)`, transformOrigin: 'top left'}}>
          <g transform='translate(50, 600)'>{renderDepartmentTree(departments[0], 0, 0, 0)}</g>
        </svg>
      </div>
    </div>
  );
};

export default DesktopChart;
