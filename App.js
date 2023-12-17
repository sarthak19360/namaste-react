
const parent = React.createElement('div',
    { id: 'parent' },
    React.createElement('div',
        { id: 'child' },
        [
            React.createElement('h1', {}, "Hi, I am an h1 tag!"),
            React.createElement('h2', {}, "Hi, I am an h2 tag!")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);