const erc20ABI =["function decimals() external view returns (uint8)"];
const factoryABI = [
    "function getPair(address tokenA, address tokenB) external view returns (address pair)", 
];

const pairABI = [
    "function token0() external view returns (address)",
    "function token1() external view returns (address)",
    "function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)",
];

const routerABI = [
    "function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) public pure virtual override returns (uint amountOut)",
];

module.exports = { erc20ABI, factoryABI, pairABI, routerABI };
