import react, {Component} from 'react';
import './App.css';
// import {Routes,Route,Link} from react-dom;
import Header from './component/Header';
import Main from './component/Main';

function App() {
  return (
    <div className='App'>
      {/* <nav>
        <Link to='/'>Home</Link>
      </nav>
      <Route path='/' element={</>}></Route> */}
      <Header />
      <Main />
    </div>
  );
}


export default App;
