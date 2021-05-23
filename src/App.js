//  import logo from './logo.svg';
// import {add,multiply} from './helpers';
//  import data, {meow} from './cats';
import React from 'react';
import Alert from './Alert';
import Greeting from './Greeting';
 import items from './items';
 import moreItems from './moreitems';
import fakeLogo from './fakeLogo.svg';
import './App.css';
import ShoppingCart from './ShoppingCart';

function App() {
  
  return (
      <div>
        <Alert variant="success">
          <h1>WELCOME BACK!</h1>
          <Greeting/>
        </Alert>
        <Alert variant="danger">
          <h1>OH NO!</h1>
        </Alert>
        < img src={fakeLogo}id="logo" alt="logo"/>
      <ShoppingCart items={items} username="Tania" />
      <ShoppingCart items={moreItems} username= "Farheena" />
      </div>
    );

 
}

export default App;
