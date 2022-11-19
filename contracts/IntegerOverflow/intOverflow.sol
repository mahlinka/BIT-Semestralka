pragma solidity ^0.4.15;

contract Overflow {
    uint public sellerBalance=0;
    
    function getBalance() public returns (uint){
        return sellerBalance;
    }

    function add(uint value) returns (uint){
        sellerBalance += value; // possible overflow
        // possible auditor assert
        // assert(sellerBalance >= value); 
        return sellerBalance;
    } 

    function safe_add(uint value) returns (bool){
        require(value + sellerBalance >= sellerBalance);
        sellerBalance += value; 
    } 
}