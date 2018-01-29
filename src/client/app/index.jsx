import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Banner from './components/Banner';
import Sections from './components/Sections';
import Footer from './components/Footer';

import './../../assets/css/main.css';
import './../../assets/fonts/blue/stylesheet.css';

import data from './data.json';

const App = () => (
  <div id="page-wrapper">
    <Header />
    <Banner />
    <Sections sections={data.sections} />
    <Footer
      company={data.company}
      contact={data.contact}
      vat={data.vat}
    />
  </div>
);

render(<App />, document.getElementById('root'));
