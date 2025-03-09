import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Your styles
import App from './App.jsx'; // Main app component
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './components/context/UserContext'; // Ensure the path is correct

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the app wrapped in StrictMode, Router, and UserProvider
root.render(
  <StrictMode>
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  </StrictMode>
);

