export const resources = {
  ko: {
    translation: {
      menulist: {
        intro: {
          title: '회사소개',
          items: {
            overview: 'Overview',
            group: '조직도',
            history: '연혁',
            partners: '파트너',
          },
        },
        business: {
          title: '사업영역',
          items: {
            ai: 'AI',
            si: 'SI',
            bigdata: 'Big Data',
            product: '제품 개발',
          },
        },
        media: {
          title: '미디어센터',
          items: {
            news: 'News',
            event: 'Event',
          },
        },
        careers: {
          title: '채용',
          items: {
            human: '인재상',
            process: '채용절차',
            benefit: '복리후생',
          },
        },
        contact: {
          title: 'CONTACT',
          items: {
            contact: 'CONTACT',
          },
        },
      },
      navigation: {
        subtitle: '고객의 비즈니스를 위한 스마트하고 효율적인 기술 파트너가 되어드리겠습니다',
      },
      footer: {
        address: '서울 특별시 강남구 봉은사로 30길 42 202호',
        businessNumber: '사업자번호: 261-88-01451',
      },
      intro: {
        overview: {
          title: `혁신을 선도하는 FIVE WORKS`,
          content_1: `파이브웍스는 Biometrics, RPA, 영상처리 기술을 기반으로 각종 Web/APP Solution 및 KIOSK SW를
          개발하고 있습니다.`,
          content_2: `파이브웍스는 5년간 다양한 사업군의 프로젝트를 통해 확보된 기술을 바탕으로 자체솔루션을
          연구 및 개발을 진행하고 있으며, 매년 평균 50%이상의 성장을 하고 있는 회사입니다. 대표자 및
          임원이 직원들의 고충을 누구보다 이해하고 있으며, 직원들의 근속 및 발전을 위해 지원과
          노력을 아끼지 않고있습니다.`,
          content_3: `파이브웍스는 5년안에 매출 30억이상을 목표로 연구개발에 매진하고 있습니다. 또한 투자 및 상장을 통한 같이 노력한 직원들의 성과보상에 대하여 노력할 것입니다.`,
          content_4: `앞으로도 많은 관심과 성원을 기대하겠습니다.`,
        },
        group: {
          title: 'AI, 빅데이터, 클라우드의 완벽한 조화',
          items: {
            vicePresident: '부대표',
            dataSolution: {
              title: 'DataSolution팀',
              items: {
                solutionA: 'Solution A팀',
                solutionB: 'Solution B팀',
                solutionC: 'Solution C팀',
                solutionD: 'Solution D팀',
              },
            },
            management: {
              title: '경영지원팀',
              items: {
                management: '경영지원팀',
                strategy: '전략기획팀',
              },
            },
            ai: {
              title: 'AI LAB팀',
              items: {
                ai: 'AI Lab팀',
              },
            },
            public: {
              title: '공공사업부팀',
              items: {
                bigData: 'Big Data팀',
                publicBusiness: '공공사업팀',
              },
            },
          },
        },
        history: {
          items: {
            content_1: '회사창립',
            content_2: '기업 부설 연구소 설립',
            content_3: '전략형 창업과제 선정',
            content_4: 'AI바우처 공급기업 등록',
            content_5: '데이터 바우처 공급기업 선정',
            content_6: 'AWS 교육 프로그램 & MSP 사업 연계',
            content_7: '벤처 기업 인증',
            content_8: '인공지능과 클라우드를 활용한 비대면 진술 조서 시스템 개발 참여기관 수행',
            content_9: 'Smart Seller, 현대백화점 면세점 납품',
          },
        },
        partner: {
          title: '파트너사',
        },
      },
      business: {
        header: {
          title: '사업부문 소개',
        },
        ai: {
          title: 'AI',
          description: `A.I. Lab은 다양한 인공지능 모듈과 빅데이터 분석 기술을 기반으로 한 자동화 솔루션을 개발해오며, 기업의 디지털 혁신을 목표로 성장하고 있습니다.`,
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
        si: {},
        bigdata: {},
        product: {},
      },
      benefits: {
        title: '복리후생',
        items: {
          annual_leave: '연차 및 리프레시 휴가제공',
          annual_allowance: '연차 수당 지급',
          flexible_hours: '9시~10시 출근제도',
          snacks: '간식제공',
          celebration_allowance: '경조사비 지급',
          birthday_half_day: '생일자 오후 반차',
          education_books: '업무관련 교육 및 도서구입',
          holiday_gifts: '명절 및 창립기념일 선물',
        },
      },
    },
  },
  en: {
    translation: {
      menulist: {
        intro: {
          title: 'Introduction',
          items: {
            overview: 'Overview',
            group: 'Organization',
            history: 'History',
            partners: 'Partners',
          },
        },
        business: {
          title: 'Business Area',
          items: {
            ai: 'AI',
            si: 'SI',
            bigdata: 'Big Data',
            product: 'Product Development',
          },
        },
        media: {
          title: 'Media Center',
          items: {
            news: 'News',
            event: 'Event',
          },
        },
        careers: {
          title: 'Careers',
          items: {
            human: 'Human Resources',
            process: 'Recruitment Process',
            benefit: 'Benefits',
          },
        },
        contact: {
          title: 'Contact',
          items: {
            contact: 'Contact',
          },
        },
      },
      footer: {
        address: '202, 42, Bongeunsa-ro 30-gil, Gangnam-gu, Seoul',
        businessNumber: 'Business Number: 261-88-01451',
      },
      navigation: {
        subtitle: 'We will be a smart and efficient technology partner for your business',
      },
      intro: {
        overview: {
          title: `FIVE WORKS Leading Innovation`,
          content_1: `FIVE WORKS is developing various Web/APP Solutions and KIOSK SW based on Biometrics, RPA, and Image Processing technologies.`,
          content_2: `FIVE WORKS is conducting research and development of its own solutions based on technologies secured through various projects in various business areas over the past 5 years, and the company is growing by an average of more than 50% every year. The CEO and executives understand the grievances of employees more than anyone else, and spare no support and effort for the retention and development of employees.`,
          content_3: `FIVE WORKS is striving to achieve sales of more than 3 billion won within 5 years. In addition, we will make efforts to reward the achievements of employees who have worked together through investment and listing.`,
          content_4: `We look forward to your continued interest and support.`,
        },
        group: {
          title: 'Perfect Harmony of AI, Big Data, and Cloud',
          items: {
            vicePresident: 'Vice President',
            dataSolution: {
              title: 'DataSolution',
              items: {
                solutionA: 'Solution A',
                solutionB: 'Solution B',
                solutionC: 'Solution C',
                solutionD: 'Solution D',
              },
            },
            management: {
              title: 'Management\nSupport',
              items: {
                management: 'Management\nSupport',
                strategy: 'Strategy\nPlanning',
              },
            },
            ai: {
              title: 'AI LAB',
              items: {
                ai: 'AI LAB',
              },
            },
            public: {
              title: 'Public\nBusiness',
              items: {
                bigData: 'Big Data',
                publicBusiness: 'Public\nBusiness',
              },
            },
            benefits: {
              title: 'Benefits',
              items: {
                annual_leave: 'Annual Leave and Refresh Leave',
                annual_allowance: 'Annual Allowance',
                flexible_hours: '9 AM ~ 10 AM Flexible Working Hours',
                snacks: 'Snacks Provided',
                celebration_allowance: 'Celebration Allowance',
                birthday_half_day: 'Half Day Off on Birthday',
                education_books: 'Work-related Education and Book Purchase',
                holiday_gifts: 'Holiday and Anniversary Gifts',
              },
            },
          },
        },
        history: {
          items: {
            content_1: 'Company Establishment',
            content_2: 'Establishment of Corporate Research Institute',
            content_3: 'Selection of Strategic Startup Tasks',
            content_4: 'AI Voucher Supply Company Registration',
            content_5: 'Data Voucher Supply Company Selection',
            content_6: 'AWS Education Program & MSP Business Linkage',
            content_7: 'Venture Company Certification',
            content_8:
              'Participation in the development of a non-face-to-face statement system using artificial intelligence and cloud',
            content_9: 'Smart Seller, Hyundai Department Store Duty-free shop delivery',
          },
        },
        partner: {
          title: 'Partners',
        },
      },
      business: {
        header: {
          title: 'Business Area',
        },
        ai: {
          title: 'AI',
          description: `A.I. Lab is developing automation solutions based on various artificial intelligence modules and big data analysis technologies, aiming to grow with the goal of digital innovation of companies.`,
          workPerformance: [
            'AI-based PRA solution development (OCR, Object Detection)',
            'BioMetrics module (Liveness detect, emotion analysis module)',
            'Prediction using data analysis and statistics (viewing rate prediction, wave measurement)',
          ],
        },
        si: {},
        bigdata: {},
        product: {},
      },
      benefits: {
        title: 'Benefits',
        items: {
          annual_leave: 'Annual Leave and Refresh Leave',
          annual_allowance: 'Annual Allowance',
          flexible_hours: '9 AM ~ 10 AM Flexible Working Hours',
          snacks: 'Snacks Provided',
          celebration_allowance: 'Celebration Allowance',
          birthday_half_day: 'Half Day Off on Birthday',
          education_books: 'Work-related Education and Book Purchase',
          holiday_gifts: 'Holiday and Anniversary Gifts',
        },
      },
    },
  },
};
