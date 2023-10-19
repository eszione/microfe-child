import './App.css';
import { RouteConfig, renderRoutes } from 'react-router-config';
import { routes } from './core/routes/routes';
import { useEffect, useState } from 'react';
import { setupAstroSDK } from './core/astroSdk/setup-astro-sdk';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const loading = await setupAstroSDK();
      setLoading(loading);
    })();
  }, []);
   
  return loading ? null : (
    <div className="App">
      {/* This is only shown when running the microFE standalone */}
      {/* Update header */}
      <header className="header">Customers MicroFE</header>
      {renderRoutes(routes as RouteConfig[])}
    </div>
  );
}

export default App;
