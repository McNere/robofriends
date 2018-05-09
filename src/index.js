import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cardlist from "./Cardlist";
import "tachyons";
import registerServiceWorker from './registerServiceWorker';
import { robots } from "./robots";

ReactDOM.render(<Cardlist robots={robots}/>, document.getElementById('root'));
registerServiceWorker();
