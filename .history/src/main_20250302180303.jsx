import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Your global styles
import App from './App.jsx';  // Main app component
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './components/context/UserContext';  // Your context provider

// Ensure that 'root' matches the id in your index.html
const rootElement = document.getElementById('root');  
const root = createRoot(rootElement);  // React 18+ uses `createRoot` instead of `ReactDOM.render`

root.render(
  <StrictMode>
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  </StrictMode>
);

