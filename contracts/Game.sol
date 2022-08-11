// SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

contract Game {
    constructor () payable{}

    function guessTheNumber(uint _num) public{
        uint answer = uint(keccak256(abi.encodePacked(blockhash(block.number-1),block.timestamp)));
        if(_num == answer){
            (bool sent,) = msg.sender.call{value:1 ether}("");
            require(sent,"failed");
        }
    }
}
