import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import HeroesApp from './HeroesApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroesApp />
  </StrictMode>
);
