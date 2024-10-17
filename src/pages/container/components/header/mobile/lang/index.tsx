import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import LanguageButton from './LanguageButton';

export type LanguageType = 'ko' | 'en';

const LanguageSwitcher = () => {
  const {i18n} = useTranslation();
  const [activeTab, setActiveTab] = useState<LanguageType>(i18n.language as LanguageType);

  // console.log('i18n : ', i18n.language);
  const changeLanguage = (lng: LanguageType) => {
    // console.log('lng : ', lng);
    i18n.changeLanguage(lng);
    setActiveTab(lng);
  };

  const languages: LanguageType[] = ['ko', 'en'];

  return (
    <div className='flex'>
      <div className='relative inline-flex'>
        {languages.map(lang => (
          <LanguageButton
            key={lang}
            lang={lang}
            activeTab={activeTab}
            changeLanguage={changeLanguage}
          />
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
