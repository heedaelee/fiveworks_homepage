import {Lightbulb, Rocket, Zap} from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const CardList = () => {
  const cardData = [
    {
      icon: Lightbulb,
      title: '창의적 사고',
      description: '새로운 아이디어를 발굴하고 문제를 창의적으로 해결합니다.',
      content: '기존의 틀을 벗어나 혁신적인 솔루션을 제시할 수 있는 능력을 중요하게 생각합니다.',
    },
    {
      icon: Rocket,
      title: '도전 정신',
      description: '새로운 도전을 두려워하지 않고 끊임없이 성장합니다.',
      content: '불가능해 보이는 목표에 도전하고, 실패를 두려워하지 않는 인재를 원합니다.',
    },
    {
      icon: Zap,
      title: '빠른 적응력',
      description: '급변하는 환경에 신속하게 적응하고 대응합니다.',
      content:
        '기술과 시장의 변화에 민첩하게 대응하고, 새로운 기술을 빠르게 습득할 수 있는 능력이 필요합니다.',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-[100px]'>
      {cardData.map((card, index) => (
        <AnimatedCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          content={card.content}
          index={index}
        />
      ))}
    </div>
  );
};

export default CardList;
