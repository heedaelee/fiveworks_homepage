import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {GlobalStyles} from '@/styles/globalStyles';
import {motion} from 'framer-motion';
import {useState} from 'react';

interface AnimatedCardProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  content: string;
  index: number;
}

const AnimatedCard = ({icon: Icon, title, description, content, index}: AnimatedCardProps) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const cardVariants = {
    hidden: {opacity: 0, x: -80},
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {delay: i * 0.3, duration: 0.5, ease: 'easeInOut'},
    }),
  };

  return (
    <motion.div
      custom={index}
      initial='hidden'
      whileInView='visible'
      variants={cardVariants}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className='md:h-[250px]'>
      <Card
        className={`hover:bg-slate-400 h-full hover:text-white ${GlobalStyles.classes.box_shadow}`}>
        <CardHeader>
          <Icon className='w-10 h-10 mb-4 ' />
          <CardTitle>{title}</CardTitle>
          <CardDescription className={`${isMouseOver ? 'text-white' : ''}`}>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;
