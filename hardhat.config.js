require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "0_J1oAxiHxv9fr7K-gAGsHcjA7gU2tZ_";
const PRIVATE_KEY =
  "96a3c557c6d2bff6334177cb8dc2c6c374d541e2bc8a0017dc4815b290b7abf5";
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};
