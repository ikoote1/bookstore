import { Routes,Route } from 'react-router-dom';
import './App.css';
import Books from "./components/Books"
import Categories from "./components/Categories"
import navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <navigation />
      <Routes>   
        <Route path='/' element={<Books />}/>
        <Route path='/categories' element={<Categories />}/>
      </Routes>
    </div>
  );
}

export default App;
