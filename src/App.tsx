import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Signin from './pages/signin';
import { ProtectedRoute } from './components';
import { Admin as Profile, NoMatch } from './pages';
import MainPage from './pages/main';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";



function App() {
  return (
    <Routes>
      <Route path='signin' element={<Signin />} />
      <Route path='profile/*' element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
