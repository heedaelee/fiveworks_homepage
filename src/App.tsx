import {Route, Routes} from 'react-router-dom';
import Container from './pages/container';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Container />}>
        {/* <Route index element={<Home />} />
        <Route path={researchArea} element={<ResearchArea />} />
        <Route path={researchDetail} element={<ResearchDetail />} />
        <Route path={news} element={<News />} />
        <Route path={gallery} element={<Gallery />} />
        <Route path={members} element={<Members />} />
        <Route path={publication} element={<Publications />} />
        <Route path={newsDetail} element={<NewsDetail />} />
        <Route path={funding} element={<Funding />} />
        <Route path={contact} element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
