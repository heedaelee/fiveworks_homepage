// import historyImage from '@/assets/img/pages/intro-history.png';
import {GlobalStyles} from '@/styles/globalStyles';
import HistoryGraph from './components/HistoryGraph';

const History = () => {
  return (
    <div className={GlobalStyles.classes.businessContainer}>
      <div className='w-full flex flex-col items-center animate-fade-in'>
        <h1 className='h1'>HISTORY</h1>
      </div>
      <HistoryGraph />
    </div>
  );
};

export default History;
