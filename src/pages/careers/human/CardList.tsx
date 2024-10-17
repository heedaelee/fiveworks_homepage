import {Lightbulb, Rocket, Zap} from 'lucide-react';
import AnimatedCard from '@/pages/careers/human/AnimatedCard';
import {useTranslation} from 'react-i18next';

const CardList = () => {
  const {t} = useTranslation();

  const cardData = [
    {
      icon: Lightbulb,
      title: t('careers.human.items.creative_thinking.title'),
      description: t('careers.human.items.creative_thinking.description'),
      content: t('careers.human.items.creative_thinking.content'),
    },
    {
      icon: Rocket,
      title: t('careers.human.items.challenge_spirit.title'),
      description: t('careers.human.items.challenge_spirit.description'),
      content: t('careers.human.items.challenge_spirit.content'),
    },
    {
      icon: Zap,
      title: t('careers.human.items.quick_adaptation.title'),
      description: t('careers.human.items.quick_adaptation.description'),
      content: t('careers.human.items.quick_adaptation.content'),
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
