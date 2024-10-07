import {CalendarClock, Clock} from 'lucide-react';

export const recruitmentSteps = [
  {
    icon: CalendarClock,
    title: '상시채용',
    description: (
      <>
        연중 수시로 필요한 인재를 채용합니다.
        <br />
        언제든지 지원 가능합니다.
      </>
    ),
  },
  {
    icon: Clock,
    title: '수시채용',
    description: (
      <>
        특정 시기에 집중적으로 채용을 진행합니다.
        <br />
        공고를 확인해주세요.
      </>
    ),
  },
];

export const processSteps = [
  {step: 1, title: '입사지원', description: '각종 취업사이트를 통해 지원서 접수'},
  {step: 2, title: '서류전형', description: '지원서 접수 후 심사를 거쳐 합격자 통보'},
  {step: 3, title: '면접', description: '지원자의 역량, 적성, 인성을 종합적으로 평가'},
  {step: 4, title: '최종합격', description: '채용결정'},
];
