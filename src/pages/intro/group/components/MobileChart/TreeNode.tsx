import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ChevronDown, ChevronRight} from 'lucide-react';
import {Department} from '../getDepartments';

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
        ${level === 2 && 'pl-8'}`}
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

export default TreeNode;
