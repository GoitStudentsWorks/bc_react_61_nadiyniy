import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import { persistor, store } from 'redux/store';

import './variables.css';
import './index.css';
import './pages/TransactionsHistory/DatePicker.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/bc_react_61_nadiyniy">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>

    <ToastContainer />
  </BrowserRouter>
);
