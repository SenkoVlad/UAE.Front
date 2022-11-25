import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const DebugRouter = ({ children }: { children: any }) => {
  const location = useLocation()
  if (process.env.NODE_ENV === 'development') {
    console.log(      
      `Route: ${location.pathname}${location.search}, State: ${JSON.stringify(location.state)}`,
    )
  }

  return children
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DebugRouter>
        <App />
      </DebugRouter>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
