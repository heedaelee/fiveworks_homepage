import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';

interface Department {
  name: string;
  children?: (Department | string)[];
}

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatches = () => setMatches(media.matches);
    updateMatches();
    media.addListener(updateMatches);
    return () => media.removeListener(updateMatches);
  }, [query]);

  return matches;
};

const HorizontalTree: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const baseWidth = 1500;
      const currentWidth = window.innerWidth;
      // const newScale = Math.max(currentWidth / baseWidth, 1);
      const newScale = 1.5;
      setScale(isMobile ? 1.5 : newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const {t} = useTranslation();

  const departments: Department[] = [
    {
      name: 'CEO',
      children: [
        {
          name: t('intro.group.items.vicePresident'),
          children: [
            {
              name: t('intro.group.items.dataSolution.title'),
              children: [
                t('intro.group.items.dataSolution.items.solutionA'),
                t('intro.group.items.dataSolution.items.solutionB'),
                t('intro.group.items.dataSolution.items.solutionC'),
                t('intro.group.items.dataSolution.items.solutionD'),
              ],
            },
            {
              name: t('intro.group.items.management.title'),
              children: [
                t('intro.group.items.management.items.management'),
                t('intro.group.items.management.items.strategy'),
              ],
            },
            {
              name: t('intro.group.items.ai.title'),
              children: [t('intro.group.items.ai.items.ai')],
            },
            {
              name: t('intro.group.items.public.title'),
              children: [
                t('intro.group.items.public.items.bigData'),
                t('intro.group.items.public.items.publicBusiness'),
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className='overflow-hidden w-full h-full'>
      <svg
        width={1600}
        height={1000}
        viewBox='45 340 1650 900'
        className='w-full h-full'
        style={{transform: `scale(${scale})`, transformOrigin: 'top left'}}>
        <g transform='translate(50, 600)'>{renderDepartment(departments[0], 0, 0, 0)}</g>
      </svg>
    </div>
  );
};

const renderDepartment = (
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
        {nodeName.split('\n').map((line, i) => (
          <tspan key={i} x={nodeX + nodeWidth / 2} dy={i === 0 ? 0 : '1.2em'}>
            {line}
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
        dept.children.map((child, index) => {
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
                {renderDepartment(child, childX, childY, level + 1)}
              </React.Fragment>
            );
          }
        })}
    </React.Fragment>
  );
};

export default function OrganizationChart() {
  return (
    <div className='container mx-auto px-4 py-16 pb-40'>
      {/* <h1 className='text-3xl font-bold text-center mb-8'>조직도</h1> */}
      <div className='w-full h-[900px] overflow-hidden'>
        <HorizontalTree />
      </div>
    </div>
  );
}
