import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Ensure this is named correctly
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './components/context/Usercontext.jsx'; // Update this to match the actual file name and path


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  </StrictMode>
);

