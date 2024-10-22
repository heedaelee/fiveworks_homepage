import {Route, Routes} from 'react-router-dom';
import Container from '@/pages/container';
import {ROUTE_PATHS} from '@/constants/routes';
import Home from '@/pages/home';
import Overview from '@/pages/intro/overview';
import Group from '@/pages/intro/group';
import HistoryGraph from '@/pages/intro/history';
import Partners from '@/pages/intro/partners';
import Bioinformatics from '@/pages/business/bioinformatics';
import Biometrics from '@/pages/business/biometrics';
import ImageProcessing from '@/pages/business/imageProcessing';
import News from '@/pages/media/news';
import Event from '@/pages/media/event';
import Human from './pages/careers/human';
import Process from './pages/careers/process';
import Benefits from './pages/careers/benefit';
import Contact from './pages/contact';

const {intro, business, media, careers, contact} = ROUTE_PATHS;

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Container />}>
        <Route index element={<Home />} />
        <Route path={intro.overview} element={<Overview />} />
        <Route path={intro.group} element={<Group />} />
        <Route path={intro.history} element={<HistoryGraph />} />
        <Route path={intro.partners} element={<Partners />} />
        <Route path={business.bioinformatics} element={<Bioinformatics />} />
        <Route path={business.biometrics} element={<Biometrics />} />
        <Route path={business.imageProcessing} element={<ImageProcessing />} />
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
