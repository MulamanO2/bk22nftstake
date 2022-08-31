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
var ethers_1 = require("ethers");
var react_2 = require("react");
var Home_module_css_1 = require("../styles/Home.module.css");
var nftDropContractAddress = "0xF628278364CE3613674D6bf85F8580eEa3b1Cd8c";
var tokenContractAddress = "0x3304bA142B00BC3aED7d2946eFb9B584089245Ae";
var stakingContractAddress = "0x65bD2f52CB40082625108a48cA8Fc5ef18D96356";
var Stake = function () {
    // Wallet Connection Hooks
    var address = (0, react_1.useAddress)();
    var connectWithMetamask = (0, react_1.useMetamask)();
    // Contract Hooks
    var nftDropContract = (0, react_1.useNFTDrop)(nftDropContractAddress);
    var tokenContract = (0, react_1.useToken)(tokenContractAddress);
    var _a = (0, react_1.useContract)(stakingContractAddress), contract = _a.contract, isLoading = _a.isLoading;
    // Load Unstaked NFTs
    var ownedNfts = (0, react_1.useOwnedNFTs)(nftDropContract, address).data;
    // Load Balance of Token
    var tokenBalance = (0, react_1.useTokenBalance)(tokenContract, address).data;
    ///////////////////////////////////////////////////////////////////////////
    // Custom contract functions
    ///////////////////////////////////////////////////////////////////////////
    var _b = (0, react_2.useState)([]), stakedNfts = _b[0], setStakedNfts = _b[1];
    var _c = (0, react_2.useState)(), claimableRewards = _c[0], setClaimableRewards = _c[1];
    (0, react_2.useEffect)(function () {
        if (!contract)
            return;
        function loadStakedNfts() {
            return __awaiter(this, void 0, void 0, function () {
                var stakedTokens, stakedNfts;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (contract === null || contract === void 0 ? void 0 : contract.call("getStakedTokens", address))];
                        case 1:
                            stakedTokens = _a.sent();
                            return [4 /*yield*/, Promise.all(stakedTokens === null || stakedTokens === void 0 ? void 0 : stakedTokens.map(function (stakedToken) { return __awaiter(_this, void 0, void 0, function () {
                                    var nft;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, (nftDropContract === null || nftDropContract === void 0 ? void 0 : nftDropContract.get(stakedToken.tokenId))];
                                            case 1:
                                                nft = _a.sent();
                                                return [2 /*return*/, nft];
                                        }
                                    });
                                }); }))];
                        case 2:
                            stakedNfts = _a.sent();
                            setStakedNfts(stakedNfts);
                            console.log("setStakedNfts", stakedNfts);
                            return [2 /*return*/];
                    }
                });
            });
        }
        if (address) {
            loadStakedNfts();
        }
    }, [address, contract, nftDropContract]);
    (0, react_2.useEffect)(function () {
        if (!contract || !address)
            return;
        function loadClaimableRewards() {
            return __awaiter(this, void 0, void 0, function () {
                var cr;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (contract === null || contract === void 0 ? void 0 : contract.call("availableRewards", address))];
                        case 1:
                            cr = _a.sent();
                            console.log("Loaded claimable rewards", cr);
                            setClaimableRewards(cr);
                            return [2 /*return*/];
                    }
                });
            });
        }
        loadClaimableRewards();
    }, [address, contract]);
    ///////////////////////////////////////////////////////////////////////////
    // Write Functions
    ///////////////////////////////////////////////////////////////////////////
    function stakeNft(id) {
        return __awaiter(this, void 0, void 0, function () {
            var isApproved, stake;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!address)
                            return [2 /*return*/];
                        return [4 /*yield*/, (nftDropContract === null || nftDropContract === void 0 ? void 0 : nftDropContract.isApproved(address, stakingContractAddress))];
                    case 1:
                        isApproved = _a.sent();
                        if (!!isApproved) return [3 /*break*/, 3];
                        return [4 /*yield*/, (nftDropContract === null || nftDropContract === void 0 ? void 0 : nftDropContract.setApprovalForAll(stakingContractAddress, true))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, (contract === null || contract === void 0 ? void 0 : contract.call("stake", id))];
                    case 4:
                        stake = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function withdraw(id) {
        return __awaiter(this, void 0, void 0, function () {
            var withdraw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (contract === null || contract === void 0 ? void 0 : contract.call("withdraw", id))];
                    case 1:
                        withdraw = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function claimRewards() {
        return __awaiter(this, void 0, void 0, function () {
            var claim;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (contract === null || contract === void 0 ? void 0 : contract.call("claimRewards"))];
                    case 1:
                        claim = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    if (isLoading) {
        return Loading < /div>;;
    }
    return className = { styles: Home_module_css_1.default, : .container } >
        className;
    {
        Home_module_css_1.default.h1;
    }
     > Stake;
    Your;
    Bored;
    Kitty;
    NFT;
    's</h1>
        < hr;
    className = {}(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), Home_module_css_1.default.divider, Home_module_css_1.default.spacerTop);
};
/>;
{
    !address ? className = { styles: Home_module_css_1.default, : .mainButton } : ;
    onClick = { connectWithMetamask: connectWithMetamask } >
        Connect;
    Wallet
        < /button>;
    Your;
    BK22;
    Tokens < /h2>
        < div;
    className = { styles: Home_module_css_1.default, : .tokenGrid } >
        className;
    {
        Home_module_css_1.default.tokenItem;
    }
     >
        className;
    {
        Home_module_css_1.default.tokenLabel;
    }
     > Claimable;
    Rewards < /h3>
        < p;
    className = { styles: Home_module_css_1.default, : .tokenValue } >
        {};
    claimableRewards
        ? "Loading..."
        : ethers_1.ethers.utils.formatUnits(claimableRewards, 18);
}
/b>{" "};
{
    tokenBalance === null || tokenBalance === void 0 ? void 0 : tokenBalance.symbol;
}
/p>
    < /div>
    < div;
className = { styles: Home_module_css_1.default, : .tokenItem } >
    className;
{
    Home_module_css_1.default.tokenLabel;
}
 > Current;
Balance < /h3>
    < p;
className = { styles: Home_module_css_1.default, : .tokenValue } >
    { tokenBalance: tokenBalance, displayValue: displayValue } < /b> {tokenBalance?.symbol}
    < /p>
    < /div>
    < /div>
    < button;
className = {}(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), Home_module_css_1.default.mainButton, Home_module_css_1.default.spacerTop);
onClick = {}();
claimRewards();
    >
        Claim;
Rewards
    < /button>
    < hr;
className = {}(templateObject_3 || (templateObject_3 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), Home_module_css_1.default.divider, Home_module_css_1.default.spacerTop);
/>
    < h2 > Your;
Staked;
NFTs < /h2>
    < div;
className = { styles: Home_module_css_1.default, : .nftBoxGrid } >
    { stakedNfts: stakedNfts, map: function () { } }(nft);
className = { styles: Home_module_css_1.default, : .nftBox };
key = { nft: nft, : .metadata.id.toString() } >
    metadata;
{
    nft.metadata;
}
className = { styles: Home_module_css_1.default, : .nftMedia }
    /  >
    { nft: nft, : .metadata.name } < /h3>
    < button;
className = {}(templateObject_4 || (templateObject_4 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), Home_module_css_1.default.mainButton, Home_module_css_1.default.spacerBottom);
onClick = {}();
withdraw(nft.metadata.id);
    >
        Withdraw
    < /button>
    < /div>;
/div>
    < hr;
className = {}(templateObject_5 || (templateObject_5 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), Home_module_css_1.default.divider, Home_module_css_1.default.spacerTop);
/>
    < h2 > Your;
Unstaked;
NFTs < /h2>
    < div;
className = { styles: Home_module_css_1.default, : .nftBoxGrid } >
    { ownedNfts: ownedNfts, map: function () { } }(nft);
className = { styles: Home_module_css_1.default, : .nftBox };
key = { nft: nft, : .metadata.id.toString() } >
    metadata;
{
    nft.metadata;
}
className = { styles: Home_module_css_1.default, : .nftMedia }
    /  >
    { nft: nft, : .metadata.name } < /h3>
    < button;
className = {}(templateObject_6 || (templateObject_6 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), Home_module_css_1.default.mainButton, Home_module_css_1.default.spacerBottom);
onClick = {}();
stakeNft(nft.metadata.id);
    >
        Stake
    < /button>
    < /div>;
/div>
    < />;
/div>;
;
;
exports.default = Stake;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
