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
  
    AstroSDK.setup(opts).then(res => {
      console.log(res);
      setLoading(false);
    }).catch(e => {
      console.error(e);
      setLoading(false);
    }); 
  });
   
  return loading ? null : (
    <div className="App">
      <header className="header">Trade Partner MicroFE</header>
      {renderRoutes(routes as any)}
    </div>
  );
}

export default App;
