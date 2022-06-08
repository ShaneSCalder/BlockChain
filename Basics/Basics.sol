// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 < 0.9.0;

contract Basics {

    // General variables 
    uint public myBalance = 15;
    int private txAmount = -2;
    string internal coinName = "Epic Coin";
    bool inValid = true;

    //Globad Variables
    uint public blockTime = block.timestamp;
    address public sender = msg.sender;

    // Arrays

    string[] public tokenNames = ["Chainlink", "Ethereum", "Dodge"];
    uint[5] levels = [1,2,3,4,5];

    //Datetime
    uint timeNowSec = 1 seconds;
    uint timeNowMin = 1 minutes;
    uint timeNowHour = 1 hours;
    uint timeNowDay = 1 days;
    uint timeNowWeek = 1 weeks;

    //Struct

    struct User {
        address userAddress;
        string name:
        bool hasTraded;
    }

    // Store a Struck in an Array 
    User[] public users;

    // Mappings
    mapping(string => string) public accountNameMap;

    // Mappings and strucks
    mapping(address => mapping(string => User)) private userNestesMap;

    // Enums
    enum coinRanking {STRONG, CAUTION, DODGY}
    coinRanking trustLevel;
    coinRanking public defaultTrustLevel = coinRanking.CAUTION;


}
