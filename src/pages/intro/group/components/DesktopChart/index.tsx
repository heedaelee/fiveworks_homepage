import React from 'react';

import {getDepartments} from '../getDepartments';
import {useTranslation} from 'react-i18next';
import {renderDepartmentTree} from './renderDepartmentTree';

const OrganizationChart: React.FC = () => {
  const {t} = useTranslation();
  const departments = getDepartments(t);

  return (
    <svg width='100%' height='800' viewBox='-300 -300 1000 700'>
      <defs>
        <filter id='shadow' x='-20%' y='-20%' width='140%' height='140%'>
          <feDropShadow dx='0' dy='4' stdDeviation='10' floodOpacity='0.2' />
        </filter>
      </defs>
      {departments.map(dept => renderDepartmentTree(dept, 0, 0))}
    </svg>
  );
};

export default OrganizationChart;
