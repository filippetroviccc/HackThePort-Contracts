'use strict';
require('dotenv').config({path: '../.env'});

const PirateToken = artifacts.require("PirateToken");

const {
  TOKEN_OWNER,
  FILLING_ADDRESS,
  TOTAL_SUPPLY
} = process.env;

module.exports = function (deployer) {
  deployer.then(function () {
    return PirateToken.deployed().then(async token => {
      const tx = await token.transfer(FILLING_ADDRESS, TOTAL_SUPPLY, {from: TOKEN_OWNER});
    });
  });
};