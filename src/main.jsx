import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './components/context/UserContext.jsx';
import CartProvider from './components/cartcontext/CartContext.jsx';
import { WishProvider } from './components/wishcontext/WishContext.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <UserProvider>
      <CartProvider>
        <WishProvider>
          <App />
        </WishProvider>
      </CartProvider>
    </UserProvider>
  </Router>
);



