import {MapPin, Phone, Mail} from 'lucide-react';
import logoDefault from '@/assets/img/logo-default.png';
import {motion} from 'framer-motion';

const ContactInfo = () => {
  const icon = `w-6 h-6 mr-4 text-gray-600`;
  const flex_items_center = `flex items-center`;
  const subwayLineNumber = `inline-block w-6 h-6 text-white rounded-xl text-center leading-6 font-bold mr-2`;
  const subwayWrapper = `flex items-center text-xl font-normal`;

  return (
    <div className='w-full md:w-1/2'>
      <motion.div
        className={`p-6 h-full ${flex_items_center} flex-col`}
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}>
        <div className={`${flex_items_center} h-[40%] w-full flex-row justify-center`}>
          <img src={logoDefault} alt='회사 로고' className='h-[80px] w-auto object-contain' />
        </div>
        <div className='space-y-4 text-lg mt-8 md:mt-0'>
          <div className={flex_items_center}>
            <MapPin className={icon} />
            <span>서울 특별시 강남구 봉은사로 30길 42 202호</span>
          </div>
          <div className={flex_items_center}>
            <Phone className={icon} />
            <span>02-3661-0813</span>
          </div>
          <div className={flex_items_center}>
            <Mail className={icon} />
            <span className='text-xl font-semibold'>yseom@5works.co.kr</span>
          </div>
          <div className={subwayWrapper}>
            <span className={`${subwayLineNumber} bg-[#00a651]`}>2</span>
            <span className='text-[#00a651] font-bold mr-1'>역삼역</span> 7번 출구 : 도보 8분
          </div>
          <div className={subwayWrapper}>
            <span className={`${subwayLineNumber} bg-[#B7A57A]`}>9</span>
            <span className='text-[#B7A57A] font-bold mr-1'>언주역</span> 6번 출구 : 도보 5분
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
