export interface EventItem {
  id: number;
  title: string;
  src: string;
  regDate: string;
}

export type EventDataType = EventItem[];

function getRandomDate(start: Date, end: Date): string {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
}

export const mockEventData = [
  {id: 36, title: 'Image 1', src: 'https://loremflickr.com/640/480'},
  {id: 35, title: 'Image 2', src: 'https://loremflickr.com/640/480'},
  {id: 34, title: 'Image 3', src: 'https://loremflickr.com/150/480'},
  {id: 33, title: 'Image 4', src: 'https://loremflickr.com/640/280'},
  {id: 32, title: 'Image 5', src: 'https://loremflickr.com/640/480'},
  {id: 31, title: 'Image 6', src: 'https://loremflickr.com/640/580'},
  {id: 30, title: 'Image 7', src: 'https://loremflickr.com/240/480'},
  {id: 29, title: 'Image 8', src: 'https://loremflickr.com/440/480'},
  {id: 28, title: 'Image 9', src: 'https://loremflickr.com/640/480'},
  {id: 27, title: 'Image 10', src: 'https://loremflickr.com/680/453'},
  {id: 26, title: 'Image 11', src: 'https://loremflickr.com/680/453'},
  {id: 25, title: 'Image 12', src: 'https://loremflickr.com/680/453'},
  {id: 24, title: 'Image 13', src: 'https://loremflickr.com/680/453'},
  {id: 23, title: 'Image 14', src: 'https://loremflickr.com/680/453'},
  {id: 22, title: 'Image 15', src: 'https://loremflickr.com/680/453'},
  {id: 21, title: 'Image 16', src: 'https://loremflickr.com/680/453'},
  {id: 20, title: 'Image 17', src: 'https://loremflickr.com/680/453'},
  {id: 19, title: 'Image 18', src: 'https://loremflickr.com/680/453'},
  {id: 18, title: 'Image 19', src: 'https://loremflickr.com/680/453'},
  {id: 17, title: 'Image 20', src: 'https://loremflickr.com/680/453'},
  {id: 16, title: 'Image 21', src: 'https://loremflickr.com/680/453'},
  {id: 15, title: 'Image 22', src: 'https://loremflickr.com/680/453'},
  {id: 14, title: 'Image 23', src: 'https://loremflickr.com/680/453'},
  {id: 13, title: 'Image 24', src: 'https://loremflickr.com/680/453'},
  {id: 12, title: 'Image 25', src: 'https://loremflickr.com/680/453'},
  {id: 11, title: 'Image 26', src: 'https://loremflickr.com/680/453'},
  {id: 10, title: 'Image 27', src: 'https://loremflickr.com/680/453'},
  {id: 9, title: 'Image 28', src: 'https://loremflickr.com/680/453'},
  {id: 8, title: 'Image 29', src: 'https://loremflickr.com/680/453'},
  {id: 7, title: 'Image 30', src: 'https://loremflickr.com/680/453'},
  {id: 6, title: 'Image 31', src: 'https://loremflickr.com/680/453'},
  {id: 5, title: 'Image 32', src: 'https://loremflickr.com/680/453'},
  {id: 4, title: 'Image 33', src: 'https://loremflickr.com/680/453'},
  {id: 3, title: 'Image 34', src: 'https://loremflickr.com/680/453'},
  {id: 2, title: 'Image 35', src: 'https://loremflickr.com/680/453'},
  {id: 1, title: 'Image 36', src: 'https://loremflickr.com/680/453'},
  // 더 많은 데이터 추가 가능
].map(item => ({
  ...item,
  regDate: getRandomDate(new Date(2020, 0, 1), new Date()),
}));
