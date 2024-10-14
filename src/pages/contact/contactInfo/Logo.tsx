import logoDefault from '@/assets/img/logo-default.png';

const Logo = () => {
  return (
    <div className={`flex items-center h-[40%] w-full flex-row justify-center`}>
      <img src={logoDefault} alt='회사 로고' className='h-[80px] w-auto object-contain' />
    </div>
  );
};

export default Logo;
