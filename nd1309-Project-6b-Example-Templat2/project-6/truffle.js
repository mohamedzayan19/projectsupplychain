const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "16c66b547d344e609be633f2bd35eb36";
//
// const fs = require('fs');
const mnemonic = "boil huge bullet bomb age tobacco arrow sun diagram path elbow engine";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`,0, 7),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000,
        from: '0x22C75CC0539e2b8572e89Fe644CD969120c4333f'
    }
  }
};