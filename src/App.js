import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Books/>} />
        <Route path="/category" element={<Categories/>} />
      </Routes>
    </div>
  );
}

export default App;
