import {title} from 'process';

export const data = {
  ai: {
    title: 'AI',
    description: `A.I. Lab은 A.B.C.D를 기반으로 하는 aaaaa을/를 개발해오고 있으며, xxx를 목표로 성장해나가고 있습니다.`,
    workPerformance: [
      'AI기반 PRA 솔루션 개발 (OCR, Object Detection)',
      'BioMetrics 모듈 (Liveness detect, 감정분석모듈)',
      'Data 분석 및 Data 통계를 활용한 예측(시청률 예측, 파고측정)',
    ],
    tab: [
      {
        title: '영수증 수집 및 OCR 분석 모듈 개발',
        summary: `한국 및 해외 영수증 데이터 크롤링 통한 데이터 수집 후 추출`,
        subTitles: [
          '한국, 일본, 중국, 베트남 등 각국 영수증 데이터 수집',
          '인공지능 기반 영수증 OCR 모듈 개발',
        ],
        image: '@/assets/img/pages/business/ai/1_OCR.png',
      },
      {
        title: '상명대 로보어드바이저',
        summary: '교내 정보를 제공하는 카카오톡 챗봇 서비스',
        subTitles: [
          '영상인식 기능 활용 모듈을 통해 면접상황에서 표정에 대한 피드백 제공',
          '진학 정보 및 직업 추천',
        ],
        image: '@/assets/img/pages/business/ai/2_robo.png',
      },
      {
        title: '세무자동화 플랫폼',
        summary: `세무를 진행하는 동안 생성된 수기 또는 이미지의 문서 정보에서\n 
          텍스트와 템플릿을 자연어 처리하는 업무 자동화 기술`,
        subTitles: [
          '세금신고 문서 생성 및 오류 탐지 기술',
          '사용자 경험 기반 세무 프로세스가 적용된 대시보드',
          '크롤링 기능이 포함된 빅데이터 수집 저장 시스템',
          '회사와 세무대리인의 유기적인 소통 채널 구축',
        ],
        image: '@/assets/img/pages/business/ai/3_taxation.png',
      },
      {
        title: '스마트 안전관리 솔루션',
        summary: `작업자들이 건설 현장에서 안전사고를 사전에 예방하기 위해\n
          CCTV나 이동형 영상을 이용한 딥러닝 알고리즘을 통해 \n
          건설현장에서 효과적으로 안전관리를 할 수 있는 플랫폼 구축`,
        subTitles: [
          'CCTV 실시간 영상정보수집',
          '인공지능 기반 근로자 안전보호구 착용 여부 판별',
          '통합모니터링 시스템 제공',
        ],
        image: '@/assets/img/pages/business/ai/4_safety.png',
      },
    ],
  },
  si: {
    title: 'SI',
    description: `SI는 A.B.C.D를 기반으로 하는 aaaaa을/를 개발해오고 있으며, xxx를 목표로 성장해나가고 있습니다.`,
    workPerformance: [
      '웹 개발 (React, Vue, Angular)',
      '앱 개발 (React Native, Flutter)',
      '서버 개발 (Node.js, Spring Boot)',
      '데이터베이스 설계 및 구축 (MySQL, MongoDB)',
      'CI/CD 구축 및 운영 (Jenkins, GitLab)',
    ],
    tab: [
      {
        title: `광고 효율 예측 기술 개발`,
        summary: `광고 효율 예측을 위한 데이터 수집 및 분석, 맞춤형 광고 솔루션 개발`,
        subTitles: [
          '광고 제공 옵션에 따른 광고 예상 매출액 예측',
          '광고 매출 향상을 위한 광고 별 맞춤 옵션 추천',
          '광고 매출 향상을 위한 광고 문구 추천',
        ],
        image: '@/assets/img/pages/business/si/1_advertising.png',
      },
      {
        title: '무인치킨방 자동튀김기 및 관리시스템',
        summary: `Big Data 기반의 A.I., Deep Learning을 응용한 제품 인식 알고리즘을 통해\n무인치킨방용 IoT형 튀김기와 관리시스템 서비스 개발`,
        subTitles: ['매장 정보 및 보안 관리', '기기 및 식자재 관리', '수익 관리'],
        image: '@/assets/img/pages/business/si/2_chicken.png',
      },
    ],
  },
  bigdata: {
    title: 'Big Data',
    description: `Big Data는 A.B.C.D를 기반으로 하는 aaaaa을/를 개발해오고 있으며, xxx를 목표로 성장해나가고 있습니다.`,
    workPerformance: [
      '빅데이터 수집 및 저장 (Hadoop, Spark)',
      '빅데이터 분석 및 처리 (Pandas, Numpy)',
      '빅데이터 시각화 (Tableau, PowerBI)',
    ],
    tab: [
      {
        title: 'MES 3.0 통합 로그 분석 시스템 구축',
        summary: `Pivotal Cloud Foundry 에 따른 인프라 및 개발 업무에 적합한 통합 IT 자원 모니터링 체계 구축.`,
        subTitles: [
          '다양한 모니터링 통합',
          '서비스 모니터링 체계 구현',
          '사전 예방 가능한 관제 인프라 구축',
        ],
        image: '@/assets/img/pages/business/bigdata/1_mes3.0.png',
      },
      {
        title: '이상징후 탐지 시스템 구축',
        summary: `기업 내부의 데이터(인사, IP, H/W, S/W, DB, 로그 등)을 수집하고 작성된 시나리오 기반으로 이상징후를 탐지하여 탐지된 이상행위 등급에 따른 소명처리 시스템 구축.`,
        subTitles: [
          '기업 내부 데이터 수집 및 분석',
          '이상징후 탐지 시나리오 작성',
          '이상징후 탐지 시스템 구축',
        ],
        image: [
          '@/assets/img/pages/business/bigdata/2_abnormal_sign.png',
          '@/assets/img/pages/business/bigdata/2_abnormal_sign2.png',
        ],
      },
      {
        title: 'One-Stop Influencer Management System',
        summary: `Influencer들의 Commerce 활동 데이터를 수집 및 분석, 소셜 마케팅 분석 플랫폼 구축.`,
        subTitles: [
          '제품과 Influencer 매칭',
          '게시물 키워드(해시태그) 추천',
          '인공지능 기반 감성분석 방법론을통한 브랜딩 방향성 제시',
        ],
        image: '@/assets/img/pages/business/bigdata/3_influ.png',
      },
    ],
  },
  product: {
    title: 'Product',
    description: `Product는 A.B.C.D를 기반으로 하는 aaaaa을/를 개발해오고 있으며, xxx를 목표로 성장해나가고 있습니다.`,
    workPerformance: [
      '웹 개발 (React, Vue, Angular)',
      '앱 개발 (React Native, Flutter)',
      '서버 개발 (Node.js, Spring Boot)',
      '데이터베이스 설계 및 구축 (MySQL, MongoDB)',
      'CI/CD 구축 및 운영 (Jenkins, GitLab)',
    ],
    tab: [
      {
        title: 'e카운셀링크 화상 심리상담',
        summary: `화상상담을 통한 심리상담 서비스`,
        subTitles: ['상담사와 회원 매칭 시스템 구현', '비대면 표면측정기술을 응용한 감정분석'],
        image: '@/assets/img/pages/business/product/1_e_counseling.png',
      },
    ],
  },
};
