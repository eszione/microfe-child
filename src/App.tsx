import "./App.css";
import { renderRoutes } from 'react-router-config';
import routes from "./core/routes/routes";

function App() {
  return (
    <div className="App">
      <header className="header">Trade Partner MicroFE</header>
      {renderRoutes(routes as any)}
    </div>
  );
}

export default App;
