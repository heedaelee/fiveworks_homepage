// import {getImages} from '@/utils';
import image1 from '@/assets/img/pages/media/event/1.png';

export interface EventItem {
  id: number;
  title: string;
  content: string;
  src: string;
  regDate: string;
}

export type EventDataType = EventItem[];

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
    src: image1,
    regDate: '2024-10-21',
  },
];
