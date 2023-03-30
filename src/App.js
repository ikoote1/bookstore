import { Routes,Route } from 'react-router-dom';
import './App.css';
import Books from "./components/Books"
import Categories from "./components/Categories"

function App() {
  return (
    <div className="App">
      <h1>IKOOTE</h1>
      <Routes>
        <Route path='/' element={<Books />}/>
        <Route path='/categories' element={<Categories />}/>
      </Routes>
     
    </div>
  );
}

export default App;
