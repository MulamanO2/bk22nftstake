var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@thirdweb-dev/react");
var router_1 = require("next/router");
var Home_module_css_1 = require("../styles/Home.module.css");
var Mint = function () {
    var router = (0, router_1.useRouter)();
    // Get the currently connected wallet's address
    var address = (0, react_1.useAddress)();
    // Function to connect to the user's Metamask wallet
    var connectWithMetamask = (0, react_1.useMetamask)();
    // Get the NFT Collection contract
    var nftDropContract = (0, react_1.useNFTDrop)("0xF628278364CE3613674D6bf85F8580eEa3b1Cd8c");
    function claimNft() {
        return __awaiter(this, void 0, void 0, function () {
            var tx, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, (nftDropContract === null || nftDropContract === void 0 ? void 0 : nftDropContract.claim(1))];
                    case 1:
                        tx = _a.sent();
                        console.log(tx);
                        alert("NFT Claimed!");
                        router.push("/stake");
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        alert(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return className = { styles: Home_module_css_1.default, : .container } >
        className;
    {
        Home_module_css_1.default.h1;
    }
     > Mint;
    A;
    Bored;
    Kitty;
    NFT < /h1>
        < p;
    className = { styles: Home_module_css_1.default, : .explain } >
        Here;
    is;
    where;
    you;
    will;
    be;
    able;
    to < b > MINT < /b> a <b>BORED KITTY NFT</b >
        /p>
        < hr;
    className = {}(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), Home_module_css_1.default.smallDivider, Home_module_css_1.default.detailPageHr);
};
/>;
{
    !address ? className = {}(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), Home_module_css_1.default.mainButton, Home_module_css_1.default.spacerBottom) : ;
}
onClick = { connectWithMetamask: connectWithMetamask }
    >
        Connect;
Wallet
    < /button>;
className = {}(templateObject_3 || (templateObject_3 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), Home_module_css_1.default.mainButton, Home_module_css_1.default.spacerBottom);
onClick = {}();
claimNft();
    >
        Claim;
A;
Kitty
    < /button>;
/div>;
;
;
exports.default = Mint;
var templateObject_1, templateObject_2, templateObject_3;
