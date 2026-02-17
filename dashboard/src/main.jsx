import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { Toaster } from 'react-hot-toast';

const App = lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
          <Toaster
            toastOptions={{
              position: 'top-right',
              style: {
                background: '#283046',
                color: '#fff'
              }
            }}
          />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
