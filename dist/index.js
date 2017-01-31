"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const configureStore_1 = require("./store/configureStore");
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const SearchApp_1 = require("./containers/SearchApp");
const App_1 = require("./containers/App");
const FavouriteApp_1 = require("./containers/FavouriteApp");
require("./stylesheets/style.scss");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: configureStore_1.default },
    React.createElement(react_router_1.Router, { history: react_router_1.browserHistory },
        React.createElement(react_router_1.Route, { component: App_1.default, path: '/' },
            React.createElement(react_router_1.IndexRedirect, { to: "/search" }),
            React.createElement(react_router_1.Route, { component: SearchApp_1.default, path: '/search' }),
            React.createElement(react_router_1.Route, { component: FavouriteApp_1.default, path: '/favourites' })))), document.getElementById('root'));
//# sourceMappingURL=index.js.map