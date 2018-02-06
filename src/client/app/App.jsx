import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Header from './components/Header';
import Banner from './components/Banner';
import Sections from './components/Sections';
import Footer from './components/Footer';

import './../../assets/fonts/blue/stylesheet.css';
import './../../assets/css/main.css';

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

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root'),
);
