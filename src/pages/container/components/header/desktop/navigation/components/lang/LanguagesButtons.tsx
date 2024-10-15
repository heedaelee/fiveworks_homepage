import {Tooltip as ReactTooltip} from 'react-tooltip'; // react-tooltip 임포트

interface LanguagesButtonsProps {
  toggleDropdown: () => void;
  currentLanguage: string;
}

const LanguagesButtons = ({toggleDropdown, currentLanguage}: LanguagesButtonsProps) => {
  const getFlagEmoji = (lng: string) => {
    switch (lng) {
      case 'ko':
        return '🇰🇷';
      case 'en':
        return '🇺🇸';
      default:
        return '🏳️';
    }
  };
  return (
    <div className='relative'>
      <div
        onClick={toggleDropdown}
        className='cursor-pointer'
        data-tooltip-id='language-tooltip'
        data-tooltip-content='언어 선택'>
        <div className='text-2xl'>{getFlagEmoji(currentLanguage)}</div>
      </div>
      <ReactTooltip id='language-tooltip' place='bottom' />
    </div>
  );
};

export default LanguagesButtons;
