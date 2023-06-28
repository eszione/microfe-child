import "./App.css";
import { renderRoutes } from 'react-router-config';
import { routes } from "./core/routes/routes";
import AstroSDK from 'astro-sso-sdk';
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  fetch('/config.json')
  .then(res => res.json())
  .then(({
    clientId,
    env
  }) => {
    const opts = {
      clientId: clientId,
      env: env,
      isSPA: true,
      silentRedirectUri: `${window.location.protocol}//${window.location.host}/callback.html?silent`,
    };
  
    const tempOicdKey = 'oidc.user:https://[env]accounts.thlonline.com:[client_id]';
    const tempOicd = localStorage.getItem(tempOicdKey);
    if (tempOicd) {
      localStorage.setItem(tempOicdKey.replace('[env]', env).replace('[client_id]', clientId), tempOicd);
      localStorage.removeItem(tempOicdKey);
    }
    AstroSDK.setup(opts).catch(e => {
      console.error(e);
      setLoading(false);
    }).finally(() => {
      setLoading(false);
    });
  });
   
  return loading ? null : (
    <div className="App">
      <header className="header">Customers MicroFE</header>
      {renderRoutes(routes as any)}
    </div>
  );
}

export default App;
