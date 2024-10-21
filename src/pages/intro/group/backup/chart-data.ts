export const departments = {
  name: 'CEO',
  children: [
    {
      name: '부대표',
      children: [
        {
          name: 'DataSolution팀',
          children: [
            {name: 'Solution A팀'},
            {name: 'Solution B팀'},
            {name: 'Solution C팀'},
            {name: 'Solution D팀'},
          ],
        },
        {
          name: '경영지원팀',
          children: [{name: '경영지원팀'}, {name: '전략기획팀'}],
        },
        {
          name: 'AI LAB팀',
          children: [{name: 'AI Lab팀'}],
        },
        {
          name: '공공사업부팀',
          children: [{name: 'Big Data팀'}, {name: '공공사업팀'}],
        },
      ],
    },
  ],
};
