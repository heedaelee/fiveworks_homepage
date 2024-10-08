import {Route, Routes} from 'react-router-dom';
import Container from '@/pages/container';
// import Home from '@/pages/home';
import {ROUTE_PATHS} from '@/constants/routes';
import Home from '@/pages/home';
import Overview from '@/pages/intro/overview';
import Group from '@/pages/intro/group';
import History from '@/pages/intro/history';
import Partners from '@/pages/intro/partners';
import Ai from '@/pages/business/ai';
import Si from '@/pages/business/si';
import Bigdata from '@/pages/business/bigdata';
import Product from '@/pages/business/product';
import News from '@/pages/media/news';
import Event from '@/pages/media/event';
import Human from './pages/careers/human';
import Process from './pages/careers/process';
import Benefits from './pages/careers/benefit';
import Contact from './pages/contact';

// 예시 컴포넌트들
// const Home = () => <div>Home</div>;
// const Overview = () => <div>Overview</div>;
// const Group = () => <div>Group</div>;
// const History = () => <div>History</div>;
// const Partners = () => <div>Partners</div>;
// const AI = () => <div>AI</div>;
// const SI = () => <div>SI</div>;
// const BigData = () => <div>BigData</div>;
// const Product = () => <div>Product</div>;
// const News = () => <div>News</div>;
// const Event = () => <div>Event</div>;
// const Human = () => <div>Human</div>;
// const Process = () => <div>Process</div>;
// const Benefit = () => <div>Benefit</div>;
// const Contact = () => <div>Contact</div>;

const {intro, business, media, careers, contact} = ROUTE_PATHS;

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Container />}>
        <Route index element={<Home />} />
        <Route path={intro.overview} element={<Overview />} />
        <Route path={intro.group} element={<Group />} />
        <Route path={intro.history} element={<History />} />
        <Route path={intro.partners} element={<Partners />} />
        <Route path={business.ai} element={<Ai />} />
        <Route path={business.si} element={<Si />} />
        <Route path={business.bigdata} element={<Bigdata />} />
        <Route path={business.product} element={<Product />} />
        <Route path={media.news} element={<News />} />
        <Route path={media.event} element={<Event />} />
        <Route path={careers.human} element={<Human />} />
        <Route path={careers.process} element={<Process />} />
        <Route path={careers.benefit} element={<Benefits />} />
        <Route path={contact.contact} element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
