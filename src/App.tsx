import { Routes, Route } from 'react-router-dom';
import Signin from './pages/signin';
import MainPage from './pages/main';
import PrimeReact from 'primereact/api';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {

  PrimeReact.ripple = true;

  return (
    <Routes>
      <Route path='signin' element={<Signin />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
}

export default App;
