import React from "react";
import { ReactDOM } from "react";

var reactElement = React.createElement('p', { id: 'param1' }, 'Hello from React');
ReactDOM.render(reactElement, document.getElementById('root'));
