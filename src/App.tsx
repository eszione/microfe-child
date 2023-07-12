import './App.css';
import { renderRoutes } from 'react-router-config';
import { routes } from './core/routes/routes';
import { useEffect, useState } from 'react';
import { SetupAstroSDK } from './helpers/astro-sdk.helper';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const loading = await SetupAstroSDK();
      setLoading(loading);
    })();
  }, []);
   
  return loading ? null : (
    <div className="App">
      <header className="header">Tradepartners MicroFE</header>
      {renderRoutes(routes as any)}
    </div>
  );
}

export default App;
