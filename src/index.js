import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'

import './index.scss'
import App from './components/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
    render() { return <div> Hello!</div> }
}
class Goodbye extends React.Component {
    render() { return <div> Goodbye!</div> }
}

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <App />
                <Route path="/hello" component={Hello} />
                <Route path="/goodbye" component={Goodbye} />
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));