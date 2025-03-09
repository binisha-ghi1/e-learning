import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext } from "./components/context/UserContext";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
       <UserContext>
      <Router>
        <App />
      </Router>
      </UserContext>
  </StrictMode>
);
