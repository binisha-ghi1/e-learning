import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from "./contexts/authContext";  // Correct import

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>  {/* Wrap the app with UserProvider */}
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </StrictMode>
);
