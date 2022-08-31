"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@thirdweb-dev/react");
require("../styles/globals.css");
// This is the chainId your dApp will work on.
var activeChainId = react_1.ChainId.Polygon;
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return desiredChainId = { activeChainId: activeChainId } >
        __assign({}, pageProps) /  >
        /ThirdwebProvider>;
    ;
}
exports.default = MyApp;
