import react, {Component} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './component/Form';
import Main from './component/Main';
import Header from './component/Header';

function App() {
  return (
    // <div className='App'>
    //   <Header/>
    //   <Main/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="" element={<Main />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
