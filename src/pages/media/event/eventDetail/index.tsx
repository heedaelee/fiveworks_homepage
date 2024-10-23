import {EventItem} from '@/constants/event-data';
import {GlobalStyles} from '@/styles/globalStyles';

interface EventContentProps {
  event: EventItem;
  onBack: () => void;
}

const EventDetail = ({event, onBack}: EventContentProps) => {
  const linkify = (text: string) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      urlPattern,
      url =>
        `<a ${GlobalStyles.linkText} href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`,
    );
  };

  const {content, title, regDate} = event;

  return (
    <div className='max-w-4xl mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-2'>{title}</h1>
      <p className='text-base text-[#666] mb-4'>{regDate}</p>
      <hr className='border-t border-[#666] mb-6' />
      <div className='mb-6'>
        <img
          src={event.src}
          alt={event.title}
          className='w-full h-auto md:h-[400px] object-contain'
        />
      </div>
      <div className='mb-6'>
        <p
          className='text-base leading-relaxed text-gray-700 whitespace-pre-wrap'
          dangerouslySetInnerHTML={{__html: linkify(content)}}
        />
      </div>
      <hr className='border-t border-[#666] mb-6' />
      <div className='text-center'>
        <button
          onClick={onBack}
          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300'>
          목록가기
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
