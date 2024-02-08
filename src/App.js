import {React, useContext,useEffect} from 'react'
import {AppContext} from "./context1/AppContextApp.jsx"
import Header from './components/Header.jsx';
import Content from './components/content.jsx';
import Paginationn from './components/paginationn.jsx';
import './App.css'
const App = () => {
  const {fatchBlog} = useContext(AppContext);

  useEffect( () => {
     fatchBlog();
  },[]);
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Paginationn></Paginationn>
    </div>
  )
}

export default App
