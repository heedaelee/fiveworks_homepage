// import {getImages} from '@/utils';
import image1 from '@/assets/img/pages/media/news/1.jpg';
import image2 from '@/assets/img/pages/media/news/2.jpg';
import image3 from '@/assets/img/pages/media/news/3.jpg';
export interface NewsItem {
  id: number;
  title: string;
  src: string;
  link: string;
  regDate: string;
}

export type NewsDataType = NewsItem[];

export const newsData: NewsDataType = [
  {
    id: 1,
    title: '인공지능이 감정을 분석할 수 있을까? - 파이브웍스[혁신, 스타트업을 만나다]',
    src: image1,
    regDate: '2024-10-15',
    link: 'https://n.news.naver.com/mnews/article/144/0000887716?sid=110',
  },
  {
    id: 2,
    title: '인하대, 벤처스타트업 아카데미 사업단과 파이브웍스 MOU 체결',
    src: image2,
    regDate: '2024-10-15',
    link: 'https://www.kyosu.net/news/articleView.html?idxno=113796',
  },
  {
    id: 3,
    title:
      '[한남대학교 창업중심대학 스타트업 CEO] "For the better life balance between Work and Life" ICT 전문 스타트업, 파이브웍스',
    src: image3,
    regDate: '2024-10-15',
    link: 'https://magazine.hankyung.com/job-joy/article/202402128198d',
  },
].reverse();
