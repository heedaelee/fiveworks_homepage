import {Link, useNavigate} from 'react-router-dom';
import logoDefault from '@/assets/img/logo-default.png';
import logoWhite from '@/assets/img/logo-white.png';
import useIsHomepage from '@/hooks/useIsHomePage';

const Logo = ({isOpen, isMobile}: {isOpen?: boolean; isMobile?: boolean}) => {
  const isHomePage = useIsHomepage();
  const navigate = useNavigate();
  const getLogoImagePath = () => {
    if (isHomePage) {
      return isOpen ? logoDefault : logoWhite;
    }
    return logoDefault;
  };

  return !isMobile ? (
    <div className={`w-[15%] flex flex-row justify-center p-[20px] h-[125px]  `}>
      <Link to='/'>
        <img
          src={getLogoImagePath()}
          alt='logo'
          className='h-[70px] object-cover'
          onClick={() => navigate('/')}
        />
      </Link>
    </div>
  ) : (
    <div className={`w-[15%] flex flex-row justify-center p-[20px] h-[75px]  `}>
      <Link to='/'>
        <img
          src={logoDefault}
          alt='logo'
          className='h-[40px] object-cover'
          onClick={() => navigate('/')}
        />
      </Link>
    </div>
  );
};

export default Logo;
