import { Routes,Route } from 'react-router-dom';
import './App.css';
import Books from "./components/Books"
import Categories from "./components/Categories"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Books />}/>
        <Route path='/categories' element={<Categories />}/>
      </Routes>
    </div>
  );
}

export default App;
