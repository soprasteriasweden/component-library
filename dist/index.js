import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
registerServiceWorker();
