import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StateComp from './hooks/StateComp.jsx';
import App from './App.jsx';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <StateComp>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StateComp>
);
