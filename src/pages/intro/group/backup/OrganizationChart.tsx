import React, {useState, useEffect, useRef} from 'react';
import Tree from 'react-d3-tree';
import {orgChartData} from '../chart-data';

const OrganizationChart = () => {
  const [translate, setTranslate] = useState({x: 0, y: 0});
  const treeContainerRef = useRef(null);

  useEffect(() => {
    const dimensions = treeContainerRef.current?.getBoundingClientRect();
    setTranslate({
      x: dimensions.width / 2,
      y: dimensions.height / 2,
    });
  }, []);

  return (
    <div className='w-full h-[80vh]'>
      <div ref={treeContainerRef} className='w-full h-full'>
        <Tree
          data={orgChartData}
          // translate={translate}
          translate={{x: 200, y: 500}}
          nodeSize={{x: 200, y: 80}}
          orientation={'horizontal'}
          pathFunc='step' // 깔끔한 트리 모양을 위해 elbow 방식 사용
          collapsible={false}
        />
      </div>
    </div>
  );
};

export default OrganizationChart;
