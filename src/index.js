import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import { Link } from 'react-router-dom'

import './style/app.scss'

import reducers from './reducers';
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div className="container">
            <div className="nav">
                <Link to="/">back to index</Link>
                <Link to="/posts/new">add new</Link>
            </div>
                <Switch>
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path="/posts/:id" component={PostsShow} />
                    <Route path="/" component={PostsIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));