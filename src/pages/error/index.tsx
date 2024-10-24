import {ArrowLeft, Home} from 'lucide-react';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center text-center px-4'>
      <div className='space-y-6 max-w-2xl'>
        <h1 className='text-6xl font-bold text-blue-600'>404</h1>
        <h2 className='text-3xl font-semibold text-gray-800'>페이지를 찾을 수 없습니다</h2>
        <p className='text-xl text-gray-600'>
          죄송합니다. 요청하신 페이지를 찾을 수 없습니다. <br />
          주소를 잘못 입력하셨거나, 페이지가 이동 또는 삭제되었을 수 있습니다.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4 pt-4'>
          <Link
            to={'/'}
            className='inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            <Home className='mr-2 h-4 w-4' />
            홈으로 가기
          </Link>
          <Link
            onClick={e => {
              e.preventDefault();
              navigate(-1);
            }}
            to='#'
            className='inline-flex items-center justify-center px-4 py-2 text-base font-medium text-blue-600 bg-white border border-blue-600 rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
            <ArrowLeft className='mr-2 h-4 w-4' />
            이전 페이지로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
