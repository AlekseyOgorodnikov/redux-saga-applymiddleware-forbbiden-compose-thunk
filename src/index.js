import React from 'react'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import {sagaWatcher} from './redux/sagas'
import { render } from 'react-dom'
import App from './App'
import * as serviceWoker from './serviceWorker'
import { rootReducer } from './redux/rootReducer'
import { forbiddenWordsMiddleware } from './redux/middleware'

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk, forbiddenWordsMiddleware, saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

saga.run(sagaWatcher)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(app, document.getElementById('root'));

serviceWoker.unregister();