import { useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routes/publicRoutes';
import { getRoutes } from './router/routes';

export default function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes, getRoutes()]);

  return <Router allRoutes={allRoutes} />;
}
