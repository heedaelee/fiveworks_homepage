export const data = {
  ai: {
    title: 'business.ai.title',
    description: `business.ai.description`,
    workPerformance: 'business.ai.workPerformance',
    tab: 'business.ai.tab',
  },
  si: {
    title: 'SI',
    description: `SI 프로젝트를 통해 기업의 운영 효율성을 높이는 통합 플랫폼을 구축하며, 비즈니스 성과를 극대화하는 것을 목표로 하고 있습니다.`,
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
    description: `BigData Lab은 고급 데이터 분석과 예측 모델링을 통해 다양한 산업에서 데이터 기반 혁신을 실현하며, 미래지향적인 비즈니스 전략 수립을 돕고 있습니다.`,
    workPerformance: [
      '빅데이터 수집 및 저장 (Hadoop, Spark)',
      '빅데이터 분석 및 처리 (Pandas, Numpy)',
      '빅데이터 시각화 (Tableau, PowerBI)',
      '데이터 파이프라인 구축 및 최적화 (Airflow, Kafka)',
      '실시간 데이터 처리 및 스트리밍 분석 (Flink, Kafka Streams)',
      '머신러닝 모델을 통한 예측 분석 (Scikit-learn, TensorFlow)',
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
    description: `제품개발 Lab은 최신 기술 트렌드와 시장 요구를 반영한 고성능 제품을 설계하고, 제품 경쟁력을 강화하는 데 중점을 두고 있습니다.`,
    workPerformance: [
      '제품 기획 및 설계',
      '프로토타입 개발 및 검증',
      '제조 공정 최적화 및 관리',
      '사용자 경험(UX) 리서치 및 테스트',
      '신기술 적용 및 제품 성능 향상 연구',
      '제품 품질 관리 및 개선',
      '시장 요구 분석 및 제품 전략 수립',
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
