const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

const {
    addressFactory,
    addressRouter,
    addressFrom,
    addressTo,
} = require("../Utils/AddressList");

const {erc20ABI, factoryABI, routerABI } = require("../Utils/AbiList");
const { inputToConfig } = require("@ethereum-waffle/compiler");

describe("Read and write to the BlockChain", () => {
    let provider,
    contractFactory,
    contractRouter,
    contractToken,
    decimals,
    amountIn,
    amountOut;

    provider = new ethers.providers.StaticJsonRpcProvider(
        "https://eth-mainnet.alchemyapi.io/v2/0RibJPc5M1osoyp6sobvcM5bmOWCPQlC"
    );

    contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);
    contractRouter = new ethers.Contract(addressRouter, routerABI, provider);
    contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);

    it("conects to a provider, factory, token and router", () => {
        assert(provider._isProvider);

        expect(contractFactory.address).to.equal(
            "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"
        );
        
        expect(contractRouter.address).to.equal(
            "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
        );

        expect(contractToken.address).to.equal(
            "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
        );

    });
});
