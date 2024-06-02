import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import IndexRoutes from './Routes/IndexRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
