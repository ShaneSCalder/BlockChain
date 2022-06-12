const ethers = require("ethers");

const {
    addressFactory,
    addressRouter,
    addressFrom,
    addressTo,
} = require("./AddressList.js");

const {
    erc20ABI,
    factoryABI,
    routerABI,
    pairABI,
} = require("./AbiList.js");

// Standard Provider 
const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed.binance.org/"
);

// Connect to Factory
const contractFactory = new ethers.Contract(
    addressFactory,
    factoryABI,
    provider,
);

// Connect to Router 
const contractRouter = new ethers.Contract(
    addressRouter,
    factoryABI,
    provider,
);

console.log(contractRouter);
