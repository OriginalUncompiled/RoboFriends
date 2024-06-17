import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'tachyons';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducers.js';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = legacy_createStore(rootReducer, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// email={'bigcereal@badsa.gov'} email={'bigjul@badsa.gov'}  email={'zooming@badsa.gov'}
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
