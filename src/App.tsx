import {Route, Routes} from 'react-router-dom';
import Container from '@/pages/container';
import Home from '@/pages/home';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Container />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
