import {BrowserRouter} from 'react-router-dom';
import MainApp from './pages';


function App() {
  return (
    <div>
      <h1>Election Application</h1>
      <BrowserRouter basement="/">
        <MainApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
