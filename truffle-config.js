require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const infuraProjectId = process.env.INFURA_PROJECT_ID;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },

    hashio: {
      network_id: 296, // Any network (default: none)
      provider: () =>
        new HDWalletProvider(
          process.env.DEV_PRIVATE_KEY,
          "https://testnet.hashio.io/api"
        ),
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    },

    arkhia: {
      network_id: 296, // Any network (default: none)
      provider: () =>
        new HDWalletProvider(
          process.env.DEV_PRIVATE_KEY,
          "https://pool.arkhia.io/hedera/testnet/json-rpc/v1/3507eo307e88834f5a2b1924eVe04Fje"
        ),
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    },

    thirdweb: {
      network_id: 296, // Any network (default: none)
      provider: () =>
        new HDWalletProvider(
          process.env.DEV_PRIVATE_KEY,
          "https://296.rpc.thirdweb.com/da6fb18d63608dc5e8728d3de812a689"
        ),
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    },

    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.DEV_PRIVATE_KEY,
          "https://rinkeby.infura.io/v3/" + infuraProjectId
        ),
      network_id: 4, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },

    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.2", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: etherscanApiKey,
  },
};
