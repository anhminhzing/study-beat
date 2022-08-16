import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IntroScreen from './components/intro';
import MainLayout from './components/mainlayout';


class App extends React.Component{
  render(){
    return  (
      <BrowserRouter>
        <Routes>
          <Route path='/study-beat' element={<IntroScreen></IntroScreen>}></Route>
          <Route path='/study-beat/list' element={<MainLayout></MainLayout>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
