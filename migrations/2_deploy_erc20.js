'use strict';
require('dotenv').config({path: '../.env'});

const PirateToken = artifacts.require("PirateToken");

const {
  TOKEN_NAME,
  TOKEN_SYMBOL,
  TOKEN_DECIMALS,
  TOTAL_SUPPLY,
  TOKEN_OWNER
} = process.env;

module.exports = function (deployer) {
  deployer.deploy(PirateToken,
    TOKEN_NAME,
    TOKEN_SYMBOL,
    TOKEN_DECIMALS,
    TOTAL_SUPPLY,
    TOKEN_OWNER
  );
};
