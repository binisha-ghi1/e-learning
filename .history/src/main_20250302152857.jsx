import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContext } from "./components/Usercontext/Usercontext";


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
