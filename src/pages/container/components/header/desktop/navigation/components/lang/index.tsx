import useOutsideClick from '@/hooks/useOutsideClick';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import LanguagesButtons from './LanguagesButtons';
import LanguagesDropdown from './LanguagesDropdown';

const Languages = () => {
  const {i18n} = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const dropdownRef = useOutsideClick(toggleDropdown);

  const changeLanguage = (lng: string) => {
    // console.log('lng : ', lng);
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    setDropdownOpen(false); // 드롭다운 닫기
  };

  return (
    <div className='relative w-[10%] flex flex-row justify-center pt-[30px] pr-0'>
      <LanguagesButtons toggleDropdown={toggleDropdown} currentLanguage={currentLanguage} />
      {dropdownOpen && (
        <LanguagesDropdown changeLanguage={changeLanguage} dropdownRef={dropdownRef} />
      )}
    </div>
  );
};

export default Languages;
