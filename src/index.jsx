import React from 'react';
import ReactDOM from 'react-dom';

import Graph from './components/Graph';

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.decapitalize = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
};

// ReactDOM.render(
//     <Graph url="https://raw.githubusercontent.com/WorkGurin/rex-rates/master/public/data/data.csv" />,
//     document.getElementById('graph'));

ReactDOM.render(
    <Graph url='../public/data/data.csv' />,
    document.getElementById('graph'));
