import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/navbar/navbar.component';
import Home from './routes/home/home.component';

import './app.styles.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route path='' element={<Home />} />
      </ Route>
    </Routes>
  );
}

export default App;
