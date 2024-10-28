import {GlobalStyles} from '@/styles/globalStyles';

export const resources = {
  ko: {
    translation: {
      carousel: {
        item1: {
          title: '',
          description: '최첨단 기술로 비즈니스의 미래를 열어갑니다',
        },
        item2: {
          title: '고객 맞춤 디지털 트랜스포메이션',
          description: '귀사의 성공을 위한 맞춤형 IT 전략을 제시합니다',
        },
        item3: {
          title: '클라우드 & 빅데이터 솔루션',
          description: '데이터의 힘을 극대화하는 최적의 IT 인프라 구축',
        },
      },
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
            bioinformatics: 'Bioinformatics',
            biometrics: 'Biometrics',
            imageProcessing: '영상처리',
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
          title: `혁신을 선도하는 FIVEWORKS`,
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
            dataSolution: {
              title: 'DataSolution',
            },
            bigdata: {
              title: '빅데이터',
            },
            management: {
              title: '전략기획',
            },
            ai: {
              title: 'AI LAB',
            },
            public: {
              title: '공공사업',
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
            content_7: '벤처 기업 인증 <br/>창업 도약 과제 패키지 수행',
            content_8: '인공지능과 클라우드를 활용한 비대면 진술 조서 시스템 개발 참여기관 수행',
            content_9: 'OMNIMIX - AI (약물효능 및 작용기전 분석서비스)출시',
          },
        },
        partner: {
          title: '파트너사',
        },
      },
      business: {
        header: {
          title: '사업부문 소개',
          label: '주요성과',
        },
        Bioinformatics: {
          title: 'Bioinformatics',
          description: `bioinfomatics 부문에서 최신 딥러닝, 컴퓨터 비전 및 머신러닝 기술을 적용해 생체 데이터의 정확성과 효율성을 극대화하고 있으며, OMNIMIX 솔루션 개발에 박차를 가하고 있습니다.`,
          workPerformance: [
            `<a href="https://omnimix-ai.com/" target="_blank" ${GlobalStyles.linkText}>OMNIMIX 출시</a> : 거대언어모델(LLM)과 검색엔진 기반 검색증강기술 (RAG)을 활용한 한약재-질병 상호작용 확인 및 후보물질 도출 프로그램`,
          ],
          tab: [
            {
              title: 'Omnimix (약물 효능 및 작용기전 분석 서비스)',
              summary: `LLM과 검색엔진 기반 검색 증강기술 활용해 데이터 기반, 성분 질병간 네트워크 분석 결과 제공`,
              subTitles: [
                '데이터 통합 및 수집 시스템',
                '네트워크 약리학 기반 스크리닝',
                '통합 모니터링 서비스',
                '검색 엔진 기반의 관리 및 활용',
                '빅데이터 / 알고리즘 기반 챗본',
              ],
              image: '@/assets/img/pages/business/bioinfomatics/1_Bioinformatics.jpg',
            },
          ],
        },
        biometrics: {
          title: 'Biometrics',
          description: `Biometrics 분야에서 생체 데이터를 통합적으로 분석하는 다중 바이오 마커 감정 분석 서비스를 개발하고 있습니다. 이 서비스는 얼굴 표정의 여러 바이오 마커를 분석하여 사용자의 감정 상태를 정밀하게 평가하는 데 중점을 둡니다. 이를 통해 고객 경험 개선, 맞춤형 서비스 제공, 심리적 상태 모니터링 등의 다양한 응용 분야에서 혁신적인 솔루션을 제공하며, 기업의 사용자 인터랙션을 한 차원 높은 수준으로 끌어올리는 데 기여하고 있습니다.`,
          workPerformance: [
            '분노, 경멸, 불안, 슬픔, 중립, 행복, 놀라움 등 7가지 감정 분석',
            '얼굴의 비대칭적 움직임 등을 비교후 유사도의 수치를 통해 분석된 감정상태로 면접 등 다양한 솔루션 적용',
          ],
          tab: [
            {
              title: `다중 바이오 마커 감정 분석 서비스`,
            },
          ],
        },
        ImageProcessing: {
          title: 'ImageProcessing',
          description: `영상처리 분야에서는 광학 문자 인식(OCR) 기술을 활용하여 텍스트 이미지를 기계가 인식 가능한 텍스트 형식으로 변환하는 혁신적인 솔루션을 개발하고 있습니다. 이를 통해 여권 정보와 같은 중요한 문서의 텍스트를 자동으로 추출하고 처리할 수 있으며, YOLO(You Only Look Once) 알고리즘을 적용한 객체 추출 기술로 다양한 사물 인식과 분석 작업에 활용됩니다. 이 솔루션은 보안, 인증, 데이터 처리의 효율성을 높여 다양한 산업에 실질적인 가치를 제공합니다.`,
          workPerformance: [
            '스캔, 촬영 통해 이미지 파일을 이진 데이터로 변환',
            '텍스트 이미지 가장자리를 부드럽게 전처리, 스크립트 인식률 향상',
            '패턴 매칭및 특징 추출을 활용하여 문자 인식률 향상',
            '분석 종료 후 추출된 텍스트 데이터를 파일로 변환',
          ],
          tab: [
            {
              title: '광학문자 인식 OCR',
            },
            {
              title: '여권 & 객체 인식',
            },
          ],
        },
      },
      media: {
        totalItems: '총 {{totalCnt}}개의 게시물이 있습니다.',
        items: {
          news: 'News',
          event: 'Event',
        },
      },
      careers: {
        human: {
          title: '혁신적인 인재',
          subTitle: '우리는 창의적이고 혁신적인 사고를 가진 인재를 찾고 있습니다.',
          items: {
            creative_thinking: {
              title: '창의적 사고',
              description: '새로운 아이디어를 발굴하고 문제를 창의적으로 해결합니다.',
              content:
                '기존의 틀을 벗어나 혁신적인 솔루션을 제시할 수 있는 능력을 중요하게 생각합니다.',
            },
            challenge_spirit: {
              title: '도전 정신',
              description: '새로운 도전을 두려워하지 않고 끊임없이 성장합니다.',
              content: '불가능해 보이는 목표에 도전하고, 실패를 두려워하지 않는 인재를 원합니다.',
            },
            quick_adaptation: {
              title: '빠른 적응력',
              description: '급변하는 환경에 신속하게 적응하고 대응합니다.',
              content:
                '기술과 시장의 변화에 민첩하게 대응하고, 새로운 기술을 빠르게 습득할 수 있는 능력이 필요합니다.',
            },
          },
        },
        process: {
          recruitment: {
            title: '채용절차',
            steps: {
              item1: {
                title: '상시채용',
                content1: '연중 수시로 필요한 인재를 채용합니다.',
                content2: '언제든지 지원 가능합니다.',
              },
              item2: {
                title: '수시채용',
                content1: '특정 시기에 집중적으로 채용을 진행합니다.',
                content2: '공고를 확인해주세요.',
              },
            },
          },
          selection: {
            title: '전형절차',
            steps: {
              item1: {
                title: '입사지원',
                content: '각종 취업사이트를 통해 지원서 접수',
              },
              item2: {
                title: '서류전형',
                content: '지원서 접수 후 심사를 거쳐 합격자 통보',
              },
              item3: {
                title: '면접',
                content: '지원자의 역량, 적성, 인성을 종합적으로 평가',
              },
              item4: {
                title: '최종합격',
                content: '채용결정',
              },
            },
          },
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
  },
  en: {
    translation: {
      carousel: {
        item1: {
          title: '',
          description: 'Opening the future of business with cutting-edge technology',
        },
        item2: {
          title: 'Customized Digital Transformation for Customers',
          description: 'We provide a customized IT strategy for your success',
        },
        item3: {
          title: 'Cloud & Big Data Solutions',
          description: 'Building the optimal IT infrastructure that maximizes the power of data',
        },
      },
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
            bioinformatics: 'Bioinformatics',
            biometrics: 'Biometrics',
            imageProcessing: 'ImageProcessing',
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
          title: `FIVEWORKS Leading Innovation`,
          content_1: `FIVEWORKS is developing various Web/APP Solutions and KIOSK SW based on Biometrics, RPA, and Image Processing technologies.`,
          content_2: `FIVEWORKS is conducting research and development of its own solutions based on technologies secured through various projects in various business areas over the past 5 years, and the company is growing by an average of more than 50% every year. The CEO and executives understand the grievances of employees more than anyone else, and spare no support and effort for the retention and development of employees.`,
          content_3: `FIVEWORKS is striving to achieve sales of more than 3 billion won within 5 years. In addition, we will make efforts to reward the achievements of employees who have worked together through investment and listing.`,
          content_4: `We look forward to your continued interest and support.`,
        },
        group: {
          title: 'Perfect Harmony of AI, Big Data, and Cloud',
          items: {
            dataSolution: {
              title: 'DataSolution',
            },
            bigdata: {
              title: 'BigData',
            },
            management: {
              title: 'Management',
            },
            ai: {
              title: 'AI LAB',
            },
            public: {
              title: 'Public Business',
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
            content_7: 'Venture Company Certification <br /> Startup Leap Task Package Performance',
            content_8:
              'Participation in the development of a non-face-to-face statement system using artificial intelligence and cloud',
            content_9: 'OMNIMIX - AI (Drug Efficacy and Mechanism Analysis Service) Launch',
          },
        },
        partner: {
          title: 'Partners',
        },
      },
      business: {
        header: {
          title: 'Business Area',
          label: 'WorkPerformance',
        },
        bioinformatics: {
          title: 'Bioinformatics',
          description: `In the Bioinformatics sector, we are developing the OMNIMIX solution by applying the latest deep learning, computer vision, and machine learning technologies to maximize the accuracy and efficiency of biological data.`,
          workPerformance: [
            `<a href="https://omnimix-ai.com/" target="_blank" ${GlobalStyles.linkText}>OMNIMIX Launch</a> : A program that confirms the interaction between herbal medicine and diseases and derives candidate substances using a giant language model (LLM) and search engine-based search augmentation technology (RAG)`,
          ],
          tab: [
            {
              title: 'Omnimix (Drug Efficacy and Mechanism Analysis Service)',
              summary: `Utilizing LLM and search engine-based search augmentation technology to provide network analysis results of data-based, ingredient-disease interactions`,
              subTitles: [
                'Data integration and collection system',
                'Network pharmacology-based screening',
                'Integrated monitoring service',
                'Search engine-based management and utilization',
                'Big data / algorithm-based chatbot',
              ],
              image: '@/assets/img/pages/business/bioinfomatics/1_Bioinformatics.jpg',
            },
          ],
        },
        biometrics: {
          title: 'Biometrics',
          description: `In the Biometrics sector, we are developing a multi-bio marker emotion analysis service that integrates and analyzes biological data. This service focuses on evaluating the user's emotional state precisely by analyzing multiple bio markers of facial expressions. By providing innovative solutions in various application areas such as improving customer experience, providing customized services, and monitoring psychological states, we contribute to raising corporate user interactions to a higher level.`,
          workPerformance: [
            'Analysis of 7 emotions: anger, contempt, anxiety, sadness, neutral, happiness, surprise',
            'Application of various solutions such as interviews based on analyzed emotional states by comparing the similarity of facial asymmetrical movements',
          ],
          tab: [
            {
              title: `Multi Bio Marker Emotion Analysis Service`,
            },
          ],
        },
        ImageProcessing: {
          title: 'ImageProcessing',
          description: `In the Image Processing sector, we are developing an innovative solution that utilizes Optical Character Recognition (OCR) technology to convert text images into machine-readable text format. This solution automatically extracts and processes text from important documents such as passport information, and is applied to various object recognition and analysis tasks using the YOLO (You Only Look Once) algorithm. This solution provides substantial value to various industries by increasing the efficiency of security, authentication, and data processing.`,
          workPerformance: [
            'Convert image files from scans or photos into binary data',
            'Preprocess text image edges smoothly to improve script recognition rate',
            'Improve character recognition rate by utilizing pattern matching and feature extraction',
            'Convert extracted text data to files after analysis is complete',
          ],
          tab: [
            {
              title: 'Optical Character Recognition OCR',
            },
            {
              title: 'Passport & Object Recognition',
            },
          ],
        },
      },
      media: {
        totalItems: '{{totalCnt}} posts in total.',
        items: {
          news: 'News',
          event: 'Event',
        },
      },
      careers: {
        human: {
          title: 'Innovative Talent',
          subTitle: 'We are looking for talents with creative and innovative thinking.',
          items: {
            creative_thinking: {
              title: 'Creative Thinking',
              description: 'Discover new ideas and solve problems creatively.',
              content:
                'We value the ability to propose innovative solutions that go beyond existing frameworks.',
            },
            challenge_spirit: {
              title: 'Challenge Spirit',
              description: 'Do not fear new challenges and continue to grow.',
              content:
                'We want talents who challenge seemingly impossible goals and are not afraid of failure.',
            },
            quick_adaptation: {
              title: 'Quick Adaptation',
              description: 'Quickly adapt and respond to rapidly changing environments.',
              content:
                'We need the ability to respond quickly to changes in technology and the market, and to quickly learn new technologies.',
            },
          },
        },
        process: {
          recruitment: {
            title: 'Recruitment Process',
            steps: {
              item1: {
                title: 'Regular Recruitment',
                content1: 'Recruit the necessary talents throughout the year.',
                content2: 'You can apply anytime.',
              },
              item2: {
                title: 'Special Recruitment',
                content1: 'Recruit intensively',
                content2: 'Please check the announcement.',
              },
            },
          },
          selection: {
            title: 'Selection Process',
            steps: {
              item1: {
                title: 'Application',
                content: 'Apply through various job sites',
              },
              item2: {
                title: 'Document Screening',
                content:
                  'After receiving the application, the screening process is conducted and the successful applicants are notified',
              },
              item3: {
                title: 'Interview',
                content:
                  'Comprehensive evaluation of the applicant’s competence, aptitude, and personality',
              },
              item4: {
                title: 'Final Selection',
                content: 'Recruitment decision',
              },
            },
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
  },
};
