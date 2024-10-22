// import {motion} from 'framer-motion';

// const departments = [
//   {
//     name: 'CEO',
//     children: [
//       {
//         name: '부대표',
//         children: [
//           {
//             name: 'DataSolution팀',
//             children: ['Solution A팀', 'Solution B팀', 'Solution C팀', 'Solution D팀'],
//           },
//           {
//             name: '경영지원팀',
//             children: ['경영지원팀', '전략기획팀'],
//           },
//           {
//             name: 'AI LAB팀',
//             children: ['AI Lab팀'],
//           },
//           {
//             name: '공공사업부팀',
//             children: ['Big Data팀', '공공사업팀'],
//           },
//         ],
//       },
//     ],
//   },
// ];
// const circleRadius = 50; // 원의 반지름을 10으로 설정

// const HorizontalTree = () => (
//   <svg viewBox='-200 0 1200 300' className='w-full h-full' preserveAspectRatio='xMidYMid none'>
//     <defs>
//       <filter id='shadow' x='-20%' y='-20%' width='140%' height='140%'>
//         <feDropShadow dx='0' dy='1' stdDeviation='2' floodOpacity='0.1' />
//       </filter>
//     </defs>
//     {renderHorizontalDepartment(departments[0], 0, 200)}
//   </svg>
// );

// function countElementsByDepth(departments, depth = 0, counts = {}) {
//   if (!counts[depth]) {
//     counts[depth] = 0;
//   }
//   counts[depth] += departments.length;

//   departments.forEach(department => {
//     if (department.children && department.children.length > 0) {
//       countElementsByDepth(department.children, depth + 1, counts);
//     }
//   });

//   return counts;
// }

// const elementCountsByDepth = countElementsByDepth(departments);
// const totalHeight = 150; // 전체 높이
// const levelSpacing = 200; // 각 레벨 간의 간격

// function renderHorizontalDepartment(dept, x, y, level = 0) {
//   const childSpacing = totalHeight / elementCountsByDepth[level];

//   return (
//     <g>
//       <motion.text
//         initial={{opacity: 0}}
//         animate={{opacity: 1}}
//         x={x}
//         y={y}
//         textAnchor='middle'
//         dominantBaseline='middle'
//         fill='#333'
//         fontSize={14 - level}>
//         {dept.name || dept}
//       </motion.text>

//       {dept.children &&
//         dept.children.map((child, index) => {
//           const childY = y + (index - (dept.children.length - 1) / 2) * childSpacing;
//           const childX = x + levelSpacing;

//           return (
//             <g key={child.name}>
//               <motion.line
//                 initial={{pathLength: 0}}
//                 animate={{pathLength: 1}}
//                 x1={x + circleRadius}
//                 y1={y}
//                 x2={childX - circleRadius}
//                 y2={childY}
//                 stroke='#CCC'
//                 strokeWidth='1'
//               />
//               {renderHorizontalDepartment(child, childX, childY, level + 1)}
//             </g>
//           );
//         })}
//     </g>
//   );
// }

// export default function OrganizationChart() {
//   return (
//     <div className='container mx-auto px-4 py-16'>
//       <div className='w-full h-[700px]'>
//         <HorizontalTree />
//       </div>
//     </div>
//   );
// }
