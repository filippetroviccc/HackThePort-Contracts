// 99_export_abis.js
const fs = require('fs');
const path = require('path');
const contracts = path.resolve(__dirname, '../build/contracts/');
const unityAbis = path.resolve(__dirname, '../../HackThePort/Assets/loomSDK/Contracts');

const loomDappChain = '13654820909954';

module.exports = async function (deployer, network, accounts) {
  let builtContracts = fs.readdirSync(contracts);
  // loop over every contract
  builtContracts.forEach(contract => {
    // Get the JSON for a specific contract
    const json = JSON.parse(fs.readFileSync(path.resolve(contracts, contract)));
    if (network === 'dappChain' && contract === 'PirateToken.json') {
      fs.writeFileSync(path.resolve(unityAbis, 'address.' + contract), json.networks[loomDappChain].address)
    }
    // Write the abi to a new file in the unityAbis directory
    fs.writeFileSync(path.resolve(unityAbis, contract), JSON.stringify(json.abi))
  });
};