import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page1 from './pages/Page1';
import Button from './components/Button';
import Page2 from './pages/Page2';
import {Page3} from'./pages/Page3';
import {Page4} from './pages/Page4';
import {Page5} from './pages/Page5';
import {Page8} from './pages/Page8';
ReactDOM.render(
  <div className='place-content-center '>
    <Button>
      {/* <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/> */}
      <Page8/>
    </Button>
  </div>,
  document.getElementById('root')
);

