import style from './App.module.css';
import { BrowserRouter } from 'react-router-dom'
import Content from './components/Content/Content';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
