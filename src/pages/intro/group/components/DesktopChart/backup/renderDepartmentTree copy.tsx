import React from 'react';
import {motion} from 'framer-motion';
import {Department} from '../../getDepartments';

const renderDepartmentTree = (
  dept: Department,
  x: number,
  y: number,
  level: number,
): React.ReactNode => {
  const nodeWidth = 120;
  const nodeHeight = 60;
  const horizontalGap = 200;
  const verticalGap = 80;

  const renderNode = (nodeName: string, nodeX: number, nodeY: number) => (
    <g key={nodeName}>
      <motion.rect
        initial={{opacity: 0, scale: 0}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5, delay: level * 0.1}}
        x={nodeX}
        y={nodeY - nodeHeight / 2}
        width={nodeWidth}
        height={nodeHeight}
        rx={5}
        ry={5}
        fill='#f0f0f0'
        stroke='#bababa'
        strokeWidth={1}
      />
      <motion.text
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: level * 0.1 + 0.2}}
        x={nodeX + nodeWidth / 2}
        y={nodeY}
        textAnchor='middle'
        dominantBaseline='middle'
        fontSize={17}
        style={{
          whiteSpace: 'pre-line',
        }}
        fill='#333'>
        {nodeName.split('\n').map((name, i) => (
          <tspan key={i} x={nodeX + nodeWidth / 2} dy={i === 0 ? 0 : '1.2em'}>
            {name}
          </tspan>
        ))}
      </motion.text>
    </g>
  );

  const calculateChildrenHeight = (children: (Department | string)[]): number => {
    return children.reduce((total, child) => {
      if (typeof child === 'string') {
        return total + verticalGap;
      } else {
        return total + Math.max(verticalGap, calculateChildrenHeight(child.children || []));
      }
    }, 0);
  };

  const totalHeight = dept.children ? calculateChildrenHeight(dept.children) : 0;
  let currentY = y - totalHeight / 2;

  return (
    <React.Fragment key={dept.name}>
      {renderNode(dept.name, x, y)}
      {dept.children &&
        dept.children.map(child => {
          const childX = x + nodeWidth + horizontalGap;
          let childY = currentY;

          if (typeof child === 'string') {
            currentY += verticalGap;
            return (
              <React.Fragment key={child}>
                <motion.line
                  initial={{pathLength: 0}}
                  animate={{pathLength: 1}}
                  transition={{duration: 0.5, delay: level * 0.1 + 0.3}}
                  x1={x + nodeWidth}
                  y1={y}
                  x2={childX}
                  y2={childY}
                  stroke='#bababa'
                  strokeWidth={1}
                />
                {renderNode(child, childX, childY)}
              </React.Fragment>
            );
          } else {
            const childHeight = calculateChildrenHeight(child.children || []);
            childY += childHeight / 2;
            currentY += Math.max(childHeight, verticalGap);
            return (
              <React.Fragment key={child.name}>
                <motion.line
                  initial={{pathLength: 0}}
                  animate={{pathLength: 1}}
                  transition={{duration: 0.5, delay: level * 0.1 + 0.3}}
                  x1={x + nodeWidth}
                  y1={y}
                  x2={childX}
                  y2={childY}
                  stroke='#bababa'
                  strokeWidth={1}
                />
                {renderDepartmentTree(child, childX, childY, level + 1)}
              </React.Fragment>
            );
          }
        })}
    </React.Fragment>
  );
};

export default renderDepartmentTree;
