import { useLocation } from "react-router-dom";
import { MENU_LIST } from '@/constants/menu-list';
import { useMemo } from "react";

const useFirstMenuName = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return useMemo(() => {
    return (
      MENU_LIST.find(menuItem => menuItem.to.split('/')[1] === pathname.split('/')[1])?.subItems.find(
        subItem => subItem.to === pathname,
      )?.label || ''
    );
  }, [pathname]);
};

export default useFirstMenuName;