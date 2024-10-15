import {getImages} from '@/utils';

export interface NewsItem {
  id: number;
  title: string;
  src: string;
  link: string;
  regDate: string;
}

export type NewsDataType = NewsItem[];

function getRandomDate(start: Date, end: Date): string {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
}
function getConnectNaver() {
  const naver = 'https://www.naver.com';
  return naver;
}

export const newsData: NewsDataType = [
  {
    id: 1,
    title: '인공지능이 감정을 분석할 수 있을까? - 파이브웍스[혁신, 스타트업을 만나다]',
    src: getImages('mediaNews')[0] as string,
    regDate: '2024-10-15',
    link: 'https://n.news.naver.com/mnews/article/144/0000887716?sid=110',
  },
  {
    id: 2,
    title: '인하대, 벤처스타트업 아카데미 사업단과 파이브웍스 MOU 체결',
    src: getImages('mediaNews')[1] as string,
    regDate: '2024-10-15',
    link: 'https://www.kyosu.net/news/articleView.html?idxno=113796',
  },
  {
    id: 3,
    title:
      '[한남대학교 창업중심대학 스타트업 CEO] "For the better life balance between Work and Life" ICT 전문 스타트업, 파이브웍스',
    src: getImages('mediaNews')[2] as string,
    regDate: '2024-10-15',
    link: 'https://magazine.hankyung.com/job-joy/article/202402128198d',
  },
].reverse();

/* export const mockNewsData = [
  {id: 1, title: 'Image 1', src: 'https://loremflickr.com/680/453'},
  {id: 2, title: 'Image 2', src: 'https://loremflickr.com/680/453'},
  {id: 3, title: 'Image 3', src: 'https://loremflickr.com/680/453'},
  {id: 4, title: 'Image 4', src: 'https://loremflickr.com/680/453'},
  {id: 5, title: 'Image 5', src: 'https://loremflickr.com/680/453'},
  {id: 6, title: 'Image 6', src: 'https://loremflickr.com/680/453'},
  {id: 7, title: 'Image 7', src: 'https://loremflickr.com/680/453'},
  {id: 8, title: 'Image 8', src: 'https://loremflickr.com/680/453'},
  {id: 9, title: 'Image 9', src: 'https://loremflickr.com/680/453'},
  {id: 10, title: 'Image 10', src: 'https://loremflickr.com/680/453'},
  {id: 11, title: 'Image 11', src: 'https://loremflickr.com/680/453'},
  {id: 12, title: 'Image 12', src: 'https://loremflickr.com/680/453'},
  {id: 13, title: 'Image 13', src: 'https://loremflickr.com/680/453'},
  {id: 14, title: 'Image 14', src: 'https://loremflickr.com/680/453'},
  {id: 15, title: 'Image 15', src: 'https://loremflickr.com/680/453'},
  {id: 16, title: 'Image 16', src: 'https://loremflickr.com/680/453'},
  {id: 17, title: 'Image 17', src: 'https://loremflickr.com/680/453'},
  {id: 18, title: 'Image 18', src: 'https://loremflickr.com/680/453'},
  {id: 19, title: 'Image 19', src: 'https://loremflickr.com/680/453'},
  {id: 20, title: 'Image 20', src: 'https://loremflickr.com/680/453'},
  {id: 21, title: 'Image 21', src: 'https://loremflickr.com/680/453'},
  {id: 22, title: 'Image 22', src: 'https://loremflickr.com/680/453'},
  {id: 23, title: 'Image 23', src: 'https://loremflickr.com/680/453'},
  {id: 24, title: 'Image 24', src: 'https://loremflickr.com/680/453'},
  {id: 25, title: 'Image 25', src: 'https://loremflickr.com/680/453'},
  {id: 26, title: 'Image 26', src: 'https://loremflickr.com/680/453'},
  {id: 27, title: 'Image 27', src: 'https://loremflickr.com/680/453'},
  {id: 28, title: 'Image 28', src: 'https://loremflickr.com/680/453'},
  {id: 29, title: 'Image 29', src: 'https://loremflickr.com/680/453'},
  {id: 30, title: 'Image 30', src: 'https://loremflickr.com/680/453'},
  {id: 31, title: 'Image 31', src: 'https://loremflickr.com/680/453'},
  {id: 32, title: 'Image 32', src: 'https://loremflickr.com/680/453'},
  {id: 33, title: 'Image 33', src: 'https://loremflickr.com/680/453'},
  {id: 34, title: 'Image 34', src: 'https://loremflickr.com/680/453'},
  {id: 35, title: 'Image 35', src: 'https://loremflickr.com/680/453'},
  {id: 36, title: 'Image 36', src: 'https://loremflickr.com/680/453'},
  // 더 많은 데이터 추가 가능
]
  .map(item => ({
    ...item,
    regDate: getRandomDate(new Date(2020, 0, 1), new Date()),
    link: getConnectNaver(),
  }))
  .reverse();
 */
