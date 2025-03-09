import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Ensure that this path is correct for your project structure
import App from './App.jsx'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './components/context/usercontext'; 

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserProvider>
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <App />
      </Router>
      </CartProvider>
    </UserProvider>
  </StrictMode>
);



