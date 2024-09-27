import {useLocation} from 'react-router-dom';

const useIsHomepage = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return isHomePage;
};

export default useIsHomepage;
