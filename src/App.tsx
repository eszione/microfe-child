import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './Router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>Trade Partner MicroFE</header>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
