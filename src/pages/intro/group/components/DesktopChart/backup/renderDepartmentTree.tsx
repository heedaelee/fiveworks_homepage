import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface Department {
  name: string
  children?: string[]
}

const OrganizationChart: React.FC = () => {
  const { t } = useTranslation()

  const departments: Department[] = [
    {
      name: 'CEO',
      children: [
        t('intro.group.items.dataSolution.title'),
        t('intro.group.items.bigdata.title'),
        t('intro.group.items.management.title'),
        t('intro.group.items.ai.title'),
        t('intro.group.items.public.title'),
      ],
    },
  ]

  const nodeWidth = 160
  const nodeHeight = 80
  const horizontalGap = 300 // Increased from 200
  const verticalGap = 120 // Increased from 100

  const renderNode = (nodeName: string, x: number, y: number, isRoot: boolean = false) => (
    <g key={nodeName}>
      <motion.rect
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        x={x - nodeWidth / 2}
        y={y - nodeHeight / 2}
        width={nodeWidth}
        height={nodeHeight}
        rx={10}
        ry={10}
        fill={isRoot ? '#4a90e2' : '#f0f0f0'}
        stroke={isRoot ? '#2c3e50' : '#bababa'}
        strokeWidth={2}
        filter="url(#shadow)"
      />
      <motion.text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={18}
        fontWeight={isRoot ? 'bold' : 'normal'}
        fill={isRoot ? '#ffffff' : '#333333'}
      >
        {nodeName}
      </motion.text>
    </g>
  )

  const renderDepartmentTree = (dept: Department, x: number, y: number) => {
    const childrenCount = dept.children ? dept.children.length : 0
    const totalHeight = (childrenCount - 1) * verticalGap
    let startY = y - totalHeight / 2

    return (
      <React.Fragment key={dept.name}>
        {renderNode(dept.name, x, y, true)}
        {dept.children &&
          dept.children.map((child, index) => {
            const childX = x + horizontalGap
            const childY = startY + index * verticalGap
            const midX = x + horizontalGap / 2

            return (
              <React.Fragment key={child}>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  d={`M${x + nodeWidth / 2},${y} H${midX} V${childY} H${childX - nodeWidth / 2}`}
                  fill="none"
                  stroke="#bababa"
                  strokeWidth={2}
                />
                {renderNode(child, childX, childY)}
              </React.Fragment>
            )
          })}
      </React.Fragment>
    )
  }

  return (
    <svg width="100%" height="700" viewBox="-500 -300 1000 700">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="10" floodOpacity="0.2" />
        </filter>
      </defs>
      {departments.map((dept) => renderDepartmentTree(dept, 0, 0))}
    </svg>
  )
}

export default OrganizationChart