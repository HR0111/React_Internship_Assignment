import { Route, BrowserRouter , Routes } from 'react-router-dom';
import SecondPage from './components/SecondPage';
import FirstPage from './components/FirstPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<FirstPage/>} />
    <Route path="/second"  element={<SecondPage/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
