import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './components/context/UserContext.jsx';
import CartProvider from './components/cartcontext/CartContext.jsx';
import { WishProvider } from './components/wishcontext/WishContext.jsx';
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;


root.render(
  <Router>
    <UserProvider>
      <CartProvider>
        <WishProvider>
        <Auth0Provider
     domain="dev-8umwky1w7im1pu2x.us.auth0.com"
     clientId="2RsTYJdGMltbqaMZfg7nQDFu3xFenD24"
     authorizationParams={{
       redirect_uri: window.location.origin
     }}
   >
          <App />
          </Auth0Provider>,
        </WishProvider>
      </CartProvider>
    </UserProvider>
  </Router>
);



