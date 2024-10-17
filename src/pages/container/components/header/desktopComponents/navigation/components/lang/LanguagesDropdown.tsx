interface LanguagesDropdownProps {
  changeLanguage: (lng: string) => void;
  dropdownRef: React.RefObject<HTMLElement>;
}

const LanguagesDropdown = ({changeLanguage, dropdownRef}: LanguagesDropdownProps) => {
  return (
    <div
      className='absolute top-[50px] left-[50px] mt-2 bg-white border rounded shadow-lg'
      ref={dropdownRef as React.LegacyRef<HTMLDivElement>}>
      <div
        onClick={e => {
          e.stopPropagation();
          changeLanguage('ko');
        }}
        className='flex items-center p-2 cursor-pointer hover:bg-gray-200'>
        <div className='w-6 h-6 mr-2'>🇰🇷</div>
        <span>한국어</span>
      </div>
      <div
        onClick={() => changeLanguage('en')}
        className='flex items-center p-2 cursor-pointer hover:bg-gray-200'>
        <div className='w-6 h-6 mr-2'>🇺🇸</div>
        <span>English</span>
      </div>
    </div>
  );
};

export default LanguagesDropdown;
