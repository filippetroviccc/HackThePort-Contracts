pragma solidity ^0.5.0;

import "./ERC20.sol";
import "../utils/Ownable.sol";

contract PirateToken is ERC20, Ownable {

    string _name;
    string _symbol;
    uint256 _decimals;

    constructor (string memory name, string memory symbol, uint256 decimals, uint256 totalSupply, address owner) public {
        _name = name;
        _symbol = symbol;

        _mint(owner, totalSupply);
        transferOwnership(owner);
    }

}