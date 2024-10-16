'use client';

import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ChevronDown, ChevronRight} from 'lucide-react';
import {useTranslation} from 'react-i18next';

interface Department {
  name: string;
  children?: (Department | string)[];
}

const TreeNode: React.FC<{node: Department | string; level: number}> = ({node, level}) => {
  const [isOpen, setIsOpen] = useState(level < 2);

  if (typeof node === 'string') {
    return (
      <div className='ml-4 py-2 border-l border-gray-300 pl-20 text-slate-500'>
        <span className='text-sm'>{node}</span>
      </div>
    );
  }

  return (
    <div>
      <div
        className={`flex items-center py-2 ${level > 0 ? 'ml-4 border-l border-gray-300 pl-4' : ''}
        ${level === 2 && 'pl-8'} 
        
        `}
        onClick={() => setIsOpen(!isOpen)}>
        {node.children && node.children.length > 0 ? (
          isOpen ? (
            <ChevronDown className='w-4 h-4 mr-2 text-gray-500' />
          ) : (
            <ChevronRight className='w-4 h-4 mr-2 text-gray-500' />
          )
        ) : (
          <div className='w-4 h-4 mr-2' />
        )}
        <span className={`${level === 0 ? 'text-xl font-bold' : 'text-base'}`}>{node.name}</span>
      </div>
      <AnimatePresence>
        {isOpen && node.children && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.3}}>
            {node.children.map((child, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: index * 0.05}}>
                <TreeNode
                  key={typeof child === 'string' ? child : child.name}
                  node={child}
                  level={level + 1}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function MobileOrganizationChart() {
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
    <div className='container mx-auto px-8 py-8  '>
      {/* <h1 className="text-2xl font-bold text-center mb-6">조직도</h1> */}
      <div className='bg-white rounded-lg shadow-lg p-4 px-8 sm:px-48'>
        {departments.map(dept => (
          <TreeNode key={dept.name} node={dept} level={0} />
        ))}
      </div>
    </div>
  );
}
