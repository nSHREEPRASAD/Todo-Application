import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Addtodo from './Components/Addtodo';
import Seetodo from './Components/Seetodo'
import Home from './Components/Home';
function App() {

  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route element={<Home></Home>} path='/'></Route>
          <Route element={<Addtodo></Addtodo>} path='/addtodo'></Route>
          <Route element={<Seetodo></Seetodo>} path='/seetodo'></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
