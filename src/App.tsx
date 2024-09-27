import {Route, Routes} from 'react-router-dom';
import Container from '@/pages/container';
// import Home from '@/pages/home';
import {ROUTE_PATHS} from './constants/routes';

// 예시 컴포넌트들
const Home = () => <div>Home</div>;
const Overview = () => <div>Overview</div>;
const Group = () => <div>Group</div>;
const History = () => <div>History</div>;
const Partners = () => <div>Partners</div>;
const Map = () => <div>Map</div>;
const AI = () => <div>AI</div>;
const SI = () => <div>SI</div>;
const BigData = () => <div>BigData</div>;
const Product = () => <div>Product</div>;
const News = () => <div>News</div>;
const Event = () => <div>Event</div>;
const Human = () => <div>Human</div>;
const Process = () => <div>Process</div>;
const Benefit = () => <div>Benefit</div>;
const Contact = () => <div>Contact</div>;

const {
  overview,
  group,
  history,
  partners,
  map,
  ai,
  si,
  bigdata,
  product,
  news,
  event,
  human,
  process,
  benefit,
  contact,
} = ROUTE_PATHS;

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Container />}>
        <Route index element={<Home />} />
        <Route path={overview} element={<Overview />} />
        <Route path={group} element={<Group />} />
        <Route path={history} element={<History />} />
        <Route path={partners} element={<Partners />} />
        <Route path={map} element={<Map />} />
        <Route path={ai} element={<AI />} />
        <Route path={si} element={<SI />} />
        <Route path={bigdata} element={<BigData />} />
        <Route path={product} element={<Product />} />
        <Route path={news} element={<News />} />
        <Route path={event} element={<Event />} />
        <Route path={human} element={<Human />} />
        <Route path={process} element={<Process />} />
        <Route path={benefit} element={<Benefit />} />
        <Route path={contact} element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
