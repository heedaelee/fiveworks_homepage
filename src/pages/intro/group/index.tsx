import groupImage from '@/assets/img/pages/intro-group.png';
// import OrganizationChart from './OrganizationChart';
import OrganizationChart from './Organization-chart';
import useMobileCheck from '@/hooks/useMobileCheck';
import MobileOrganizationChart from './MobileOrganizationChart';

const Group = () => {
  const isMobile = useMobileCheck();

  return (
    <div className='container mx-auto flex flex-col gap-[30px] md:gap-[80px]'>
      <div className='w-full flex flex-col items-center animate-fade-in'>
        <h1 className='h1'>AI, 빅데이터, 클라우드의 완벽한 조화</h1>
      </div>
      {/* <img
        src={groupImage}
        className='h-[80%] w-full object-contain mb-[200px] animate-fade-in-down'
      /> */}
      {isMobile ? <MobileOrganizationChart /> : <OrganizationChart />}
    </div>
  );
};

export default Group;
