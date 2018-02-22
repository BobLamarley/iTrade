import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './redux/createStore';

const store = createStore()


ReactDOM.render(
  <App store={store} />,
   document.getElementById('root')
 );
registerServiceWorker();
