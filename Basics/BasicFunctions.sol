// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 < 0.9.0;

contract BasicFunctions {

    // Setting things up
    string coinName = "Epic Coin";
    uint public myBalance = 2000;

    struct Coin {
        string name;
        string symbol;
        uint supply;
    }

    mapping (address => Coin) internal myCoins;

    // functions (string memory _variables, int _variables) public view/pure returns(type) {}
    function guessNumber(uint _guess) public pure returns (bool) {
        if (_guess == 5) {
        return true;
        } else {
            return false;
        }
    }


    // returns a string
    function getMyCoinName() public view returns(string memory) {
        return coinName;
    }

    // that can only be called externally
    function multiplyBalance(uint _multiplier) external {
        myBalance = myBalance * _multiplier;
    }
}
