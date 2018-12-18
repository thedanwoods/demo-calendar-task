import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import './App.css';
import Layout from './components/Layout';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Layout />
    </div>
  </Provider>
);

export default App;
