import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import MyBooks from './components/MyBooks';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MyBooks />} />
        <Route path="/category" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
