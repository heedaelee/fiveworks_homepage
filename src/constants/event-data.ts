import {getImages} from '@/utils';

export interface EventItem {
  id: number;
  title: string;
  content: string;
  src: string;
  regDate: string;
}

export type EventDataType = EventItem[];

// function getRandomDate(start: Date, end: Date): string {
//   const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
// }

export const eventData: EventDataType = [
  {
    id: 1,
    title: '2024년 10월 21일 OMNIMIX - AI (약물효능 및 작용기전 분석서비스)출시',
    content: `
    저희 FIVEWORKS는 2024년 10월 21일 OMNIMIX - AI 서비스를 정식 오픈 하였습니다.

    OMNIMIX-AI 란 '약물효능 및 작용기전 분석 서비스'로 라틴어로 all 이라는 뜻을 갖고 있는 ‘OMNI’와  적절한 조합으로 서비스를 제공한다는 의미의 ‘MIX’를 조합한 ‘OMNIMIX-AI'로 명명하게 되었으며, IT 기술이 접목되어 bioinformatics 기반 Bigdata 및 인공지능을 이용하여 특화된 서비스를 제공합니다

    FIVEWORKS는 TMMC DB를 기반으로 빅데이타 및 AI를 접목하여 성분의 작용단백질을 예측이 가능하며,  Bioinfomatics 분야에 특화된 플랫폼을 만들기 위하여 'OMNIMIX-AI' 서비스를 개발하였으며 약물과 질병 간의 효능 및 작용 기전 과정을 OMNIMIX-AI를 사용하여 약물의 효능을 분석하고, 약물이 특정 질병에 미치는 영향을 데이터 기반으로 예측하여 약물의 효능 연구시 불필요한 시간을 줄이고, 
    관련자료 작성시에도 네트워크 약리학 관점의 데이터 및 그래프를 빠르게 적용하여 시간과 비용을 절감할 수 있다는 장점을 가지고 있습니다.

    그밖에 건강기능식품 개발 등 OMNIMIX-AI를 이용하여 연구개발의 시간과 비용을 줄여 빠르게 네트워크 약리학 관점의 데이터를 획득할 수 있습니다.
    
    예로 기존 연구의 보고서에 들어갈 데이터분석자료 작성에 필요한 평균 소요시간은 대략 2주 정도 걸리지만, OMNIMIX-AI를 통해 1일 이내의 데이터 분석자료 제공이 가능합니다.

    저희 FIVEWORKS는 2025년 상반기까지 LLM 및 RAG을 접목하여 프롬프트 챗봇 포함된 OMNIMIX-AI 2.0 출시할 예정입니다.

    OMNIMIX-AI 는 http://omnimix-ai.com 이용 하실 수 있습니다.
    `,
    src: getImages('mediaEvent')[0] as string,
    regDate: '2024-10-21',
  },
];

// export const mockEventData = [
//   {id: 36, title: 'Image 1', src: 'https://loremflickr.com/640/480'},
//   {id: 35, title: 'Image 2', src: 'https://loremflickr.com/640/480'},
//   {id: 34, title: 'Image 3', src: 'https://loremflickr.com/150/480'},
//   {id: 33, title: 'Image 4', src: 'https://loremflickr.com/640/280'},
//   {id: 32, title: 'Image 5', src: 'https://loremflickr.com/640/480'},
//   {id: 31, title: 'Image 6', src: 'https://loremflickr.com/640/580'},
//   {id: 30, title: 'Image 7', src: 'https://loremflickr.com/240/480'},
//   {id: 29, title: 'Image 8', src: 'https://loremflickr.com/440/480'},
//   {id: 28, title: 'Image 9', src: 'https://loremflickr.com/640/480'},
//   {id: 27, title: 'Image 10', src: 'https://loremflickr.com/680/453'},
//   {id: 26, title: 'Image 11', src: 'https://loremflickr.com/680/453'},
//   {id: 25, title: 'Image 12', src: 'https://loremflickr.com/680/453'},
//   {id: 24, title: 'Image 13', src: 'https://loremflickr.com/680/453'},
//   {id: 23, title: 'Image 14', src: 'https://loremflickr.com/680/453'},
//   {id: 22, title: 'Image 15', src: 'https://loremflickr.com/680/453'},
//   {id: 21, title: 'Image 16', src: 'https://loremflickr.com/680/453'},
//   {id: 20, title: 'Image 17', src: 'https://loremflickr.com/680/453'},
//   {id: 19, title: 'Image 18', src: 'https://loremflickr.com/680/453'},
//   {id: 18, title: 'Image 19', src: 'https://loremflickr.com/680/453'},
//   {id: 17, title: 'Image 20', src: 'https://loremflickr.com/680/453'},
//   {id: 16, title: 'Image 21', src: 'https://loremflickr.com/680/453'},
//   {id: 15, title: 'Image 22', src: 'https://loremflickr.com/680/453'},
//   {id: 14, title: 'Image 23', src: 'https://loremflickr.com/680/453'},
//   {id: 13, title: 'Image 24', src: 'https://loremflickr.com/680/453'},
//   {id: 12, title: 'Image 25', src: 'https://loremflickr.com/680/453'},
//   {id: 11, title: 'Image 26', src: 'https://loremflickr.com/680/453'},
//   {id: 10, title: 'Image 27', src: 'https://loremflickr.com/680/453'},
//   {id: 9, title: 'Image 28', src: 'https://loremflickr.com/680/453'},
//   {id: 8, title: 'Image 29', src: 'https://loremflickr.com/680/453'},
//   {id: 7, title: 'Image 30', src: 'https://loremflickr.com/680/453'},
//   {id: 6, title: 'Image 31', src: 'https://loremflickr.com/680/453'},
//   {id: 5, title: 'Image 32', src: 'https://loremflickr.com/680/453'},
//   {id: 4, title: 'Image 33', src: 'https://loremflickr.com/680/453'},
//   {id: 3, title: 'Image 34', src: 'https://loremflickr.com/680/453'},
//   {id: 2, title: 'Image 35', src: 'https://loremflickr.com/680/453'},
//   {id: 1, title: 'Image 36', src: 'https://loremflickr.com/680/453'},
//   // 더 많은 데이터 추가 가능
// ].map(item => ({
//   ...item,
//   regDate: getRandomDate(new Date(2020, 0, 1), new Date()),
// }));
