import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './components/context/Usercontext'; // Correct path
import { AuthProvider } from './components/context/authContext'; // Import AuthProvider

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserProvider>
      <AuthProvider> {/* Wrap with AuthProvider */}
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </UserProvider>
  </StrictMode>
);

