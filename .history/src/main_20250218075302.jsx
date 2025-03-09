import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0Provider
    domain="dev-cgihc3o66rzyc3mx.us.auth0.com"
    clientId="7SBe4yFt3rYa3YhYrUZC3MTTG03d0HP8"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>,
  </BrowserRouter>,
);
