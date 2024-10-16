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

  return (
    <div
      className={`w-[20%] md:w-[10%] flex flex-row justify-center p-[10px] pt-[20px] md:p-[20px] h-[75px] md:h-[125px] md:pl-0`}>
      <Link to='/'>
        <img
          src={isMobile ? logoDefault : getLogoImagePath()}
          alt='logo'
          className='h-[35px] md:h-[60px] object-cover'
          onClick={() => navigate('/')}
        />
      </Link>
    </div>
  );
};

export default Logo;
