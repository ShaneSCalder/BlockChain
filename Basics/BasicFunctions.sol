// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 < 0.9.0;

contract BasicFunctions {

    // Setting things up
    string coinName = "Epic Coin";

    struct Coin {
        string name;
        string symbol;
        uint supply;
    }

    mapping (address => Coin) internal myCoins;

    // functions (string _variables, int _variables) public view/pure returns(type) {}
    function guessNumber(uint _guess) public pure returns (bool) {
        if (_guess == 5) {
        return true;
        } else {
            return false;
        }
    }

}
