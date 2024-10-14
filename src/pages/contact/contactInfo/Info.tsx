import {MapPin, Phone, Mail} from 'lucide-react';
import {motion} from 'framer-motion';
import {GlobalStyles} from '@/styles/globalStyles';
import {contact_data} from '@/pages/contact/contactInfo/contact-data';
import {sub} from 'framer-motion/client';

const Info = () => {
  const subwayLineNumber = `inline-block w-6 h-6 text-white rounded-xl text-center leading-6 font-bold mr-2`;
  const icon = `w-6 h-6 mr-4 text-gray-600`;
  const flex_items_center = GlobalStyles.classes.contact_flex_items_center;
  const {address, tel, email, subway} = contact_data;

  const animationProps = {
    initial: {opacity: 0, y: 30},
    animate: {opacity: 1, y: 0},
    transition: {duration: 1},
  };

  // 공통 텀포넌트
  interface AnimatedDivProps {
    children: React.ReactNode;
    delay: number;
    className: string;
  }

  const AnimatedDiv = ({children, delay, className}: AnimatedDivProps) => (
    <motion.div
      className={className}
      initial={animationProps.initial}
      animate={animationProps.animate}
      transition={{...animationProps.transition, delay}}>
      {children}
    </motion.div>
  );

  return (
    <div className='space-y-4 text-lg mt-8 md:mt-0'>
      <AnimatedDiv delay={0.1} className={flex_items_center}>
        <MapPin className={icon} />
        <span>{address}</span>
      </AnimatedDiv>
      <AnimatedDiv delay={0.2} className={flex_items_center}>
        <Phone className={icon} />
        <span>{tel}</span>
      </AnimatedDiv>
      <AnimatedDiv delay={0.3} className={flex_items_center}>
        <Mail className={icon} />
        <span className='text-xl font-semibold'>{email}</span>
      </AnimatedDiv>
      {subway.map((item, index) => (
        <AnimatedDiv key={index} delay={0.4 + index * 0.1} className={flex_items_center}>
          <span className={`${subwayLineNumber} bg-[${item.color}]`}>{item.line}</span>
          <span className={`text-[${item.color}] font-bold mr-1`}>{item.name}</span>
          <span>{`${item.exit}번 출구 : 도보 ${item.walk}분`}</span>
        </AnimatedDiv>
      ))}
    </div>
  );
};

export default Info;
