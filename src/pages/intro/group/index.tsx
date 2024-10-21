import DesktopChart from './components/DesktopChart';
import useMobileCheck from '@/hooks/useMobileCheck';
import MobileChart from './components/MobileChart';
import GroupTitle from '@/pages/intro/group/components/GroupTitle';

const Group = () => {
  const isMobile = useMobileCheck();

  return (
    <div className='container mx-auto flex flex-col gap-[30px] md:gap-[80px]'>
      <GroupTitle />
      {isMobile ? <MobileChart /> : <DesktopChart />}
    </div>
  );
};

export default Group;