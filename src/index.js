import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';
import AnotherApp from './containers/App/AnotherApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
<App />
<AnotherApp />
</div>
, document.getElementById('root'));
registerServiceWorker();
