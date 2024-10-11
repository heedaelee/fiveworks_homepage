// import historyImage from '@/assets/img/pages/intro-history.png';
import { GlobalStyles } from '@/styles/globalStyles';
import CompanyHistory from './company-history';

const History = () => {
  return (
    <div className={GlobalStyles.classes.businessContainer}>
      <div className='w-full flex flex-col items-center animate-fade-in'>
        <h1 className='h1'>HISTORY</h1>
      </div>
      {/* <img
        src={historyImage}
        className='h-[80%] w-full object-contain animate-fade-in-down'
      /> */}
      <CompanyHistory />
    </div>
  );
};

export default History;
