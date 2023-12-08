import React from 'react';
import Header from './components/Header';
import "./App.css";
import Card from './components/Card';


const App = () => {
  return (
   <>
    <Header/>
    <main> 
      <div style={{display:'flex'}}>
      <Card titleColor="white" title="1" bgimg="https://plus.unsplash.com/premium_photo-1680667682187-52fd5e203efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"/>
      <Card  titleColor="pink" title="2" bgimg="https://images.unsplash.com/photo-1701528643869-653012a86b03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card titleColor= "grey" title="3" bgimg="https://images.unsplash.com/photo-1701735186157-dd4210b62475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"/>

      </div>
    </main>

   </>
)}

export default App