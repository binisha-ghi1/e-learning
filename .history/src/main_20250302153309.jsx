import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from "./contexts/authContext";  // Import AuthProvider

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>  {/* Wrap with AuthProvider */}
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </StrictMode>
);
