import {motion} from 'framer-motion';
import Logo from '@/pages/contact/contactInfo/Logo';
import Info from '@/pages/contact/contactInfo/Info';

const ContactInfo = () => {
  return (
    <div className='w-full md:w-1/2'>
      <motion.div
        className={`p-6 h-full flex items-center flex-col`}
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}>
        <Logo />
        <Info />
      </motion.div>
    </div>
  );
};

export default ContactInfo;
