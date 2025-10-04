import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement(
        'div',
        { id: 'child', key: 'child-1' },
        [
            React.createElement('h1', { key: 'child-1-h1' }, "I'm h1 Tag"),
            React.createElement('h2', { key: 'child-1-h2' }, "I'm h2 Tag"),
        ]
    ),
    React.createElement(
        'div',
        { id: 'child2', key: 'child-2' },
        [
            React.createElement('h1', { key: 'child-2-h1' }, "I'm h1 Tag"),
            React.createElement('h2', { key: 'child-2-h2' }, "I'm h2 Tag"),
        ]
    ),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

