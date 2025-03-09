
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0Provider
    domain="dev-8umwky1w7im1pu2x.us.auth0.com"
    clientId="ZqeimAeAjs3dbOvTy41znX7aYcXowkP4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>,
  </BrowserRouter>,
)
