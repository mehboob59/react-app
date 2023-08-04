// import logo from './logo.svg';
// import './App.css';
import Create from './Component/Create';
import { Routes, Route } from 'react-router-dom';
import Read from './Component/Read';
import Edit from './Component/Edit';

function App() {
  return (
    <div className="Container">
      {/* <Create/> */}
      <Routes>
        <Route exact path='/'element={<Read/>}></Route>
        <Route exact path='/Create'element={<Create/>}></Route>
        <Route exact path='/Edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
