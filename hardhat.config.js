/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: {
      version: "0.8.15",
      settings: {
      optimizer: {
      enabled: true,
      runs: 200,
      },
    },
   },
   defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      rinkeby: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
    apiKey: "3SBPY4PF1ITK3FRM338Z5ZNS8M2UUY8SCF"
   }
}