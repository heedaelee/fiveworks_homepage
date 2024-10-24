import {motion} from 'framer-motion';
import React from 'react';
import {Department} from '../getDepartments';

const nodeWidth = 160;
const nodeHeight = 80;
const horizontalGap = 400; // Increased from 200
const verticalGap = 120; // Increased from 100

export const renderDepartmentTree = (dept: Department, x: number, y: number) => {
  // console.log(dept);
  // 자식 노드가 있으면 자식 노드의 수만큼 높이를 계산한다.
  const childrenCount = dept.children ? dept.children.length : 0;
  const totalHeight = (childrenCount - 1) * verticalGap;
  // Y는 0부터 시작
  const startY = y - totalHeight / 2;
  // console.log('childrenCount', childrenCount);
  // console.log('totalHeight', totalHeight);
  // console.log('startY', startY);
  // console.log('dept.name', dept.name);
  // 이 return은 CEO 노드를 그려줌
  return (
    <React.Fragment key={dept.name}>
      {/* CEO */}
      {renderNode(dept.name, x, y, 0)}
      {/* 2Depts 부서 */}
      {dept.children &&
        dept.children.map((child, index) => {
          const childX = x + horizontalGap;
          const childY = startY + index * verticalGap;
          const midX = x + horizontalGap / 2;

          // console.log('2depts 시작');
          // console.log('child', child);
          // console.log('childX', childX);
          // console.log('childY', childY);
          // console.log('midX', midX);
          // console.log(
          //   `시작점 M${x + nodeWidth / 2},${y} 수평선H${midX} 수직선V${childY} 수평선H${childX - nodeWidth / 2} `,
          // );
          // console.log('2depts 끝');

          return (
            <React.Fragment key={child.name}>
              <motion.path
                initial={{pathLength: 0}}
                animate={{pathLength: 1}}
                transition={{duration: 0.5, delay: 0.3}}
                d={`M${x + nodeWidth / 2},${y} H${midX} V${childY} H${childX - nodeWidth / 2} `}
                fill='none'
                stroke='#d8d8d8d6'
                strokeWidth={1}
              />
              {renderNode(child.name, childX, childY, index)}
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
};

const renderNode = (nodeName: string, x: number, y: number, index: number) => (
  <g key={nodeName}>
    <motion.rect
      initial={{opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5, delay: index * 0.15 + 0.2}}
      x={x - nodeWidth / 2}
      y={y - nodeHeight / 2}
      width={nodeWidth}
      height={nodeHeight}
      rx={10}
      ry={10}
      fill='#f0f0f0'
      // stroke='#bababa'
      // strokeWidth={2}
      filter='url(#shadow)'
    />
    <motion.text
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.2}}
      x={x}
      y={y}
      textAnchor='middle'
      dominantBaseline='middle'
      fontSize={18}
      // fontWeight='semnibold'
      fill='#696868'>
      {nodeName}
    </motion.text>
  </g>
);
