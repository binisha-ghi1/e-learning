import { createRoot } from 'react-dom/client';
import './index.css';  
import App from './App.jsx'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './components/context/usercontext'; 
import CartProvider from './components/cartcontext/CartContext.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
     <Router>
    <UserProvider>
    <CartProvider >
        <App />
      </CartProvider>
    </UserProvider>
    </Router>

);



