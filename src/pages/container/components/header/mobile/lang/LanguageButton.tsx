import {motion} from 'framer-motion';
import {LanguageType} from '.';

interface LanguageButtonProps {
  lang: LanguageType;
  activeTab: string;
  changeLanguage: (lng: LanguageType) => void;
}

const LanguageButton = ({lang, activeTab, changeLanguage}: LanguageButtonProps) => {
  return (
    <button
      key={lang}
      className={`relative pr-2 mt-2 py-2 text-white text-lg font-light focus:outline-none`}
      onClick={() => changeLanguage(lang)}>
      <div className='flex items-center space-x-1'>
        <span>{lang.toUpperCase()}</span>
        <motion.span
          initial={{opacity: 0, width: 0}}
          animate={{
            opacity: activeTab === lang ? 1 : 0,
            width: activeTab === lang ? 'auto' : 0,
          }}
          transition={{duration: 0.3}}>
          {lang === 'ko' ? '🇰🇷' : '🇺🇸'}
        </motion.span>
      </div>
      {activeTab === lang && (
        <motion.div
          className=' absolute bottom-[5px] left-[0px] right-[29px] h-[1px] bg-white'
          layoutId='underline'
          initial={false}
        />
      )}
    </button>
  );
};

export default LanguageButton;
