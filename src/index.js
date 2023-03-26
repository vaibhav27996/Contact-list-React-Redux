import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import contactReducer from './reducers';
import Other from "./components/Other";
import { Provider } from 'react-redux';

const store = createStore(contactReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <App />
            {/* <Other /> */} {/* this is related to the react portal means create another top level another react tree and added its children with is see the html file and Other.js file */}
        </Router>
    </Provider>
  </React.StrictMode>
);
