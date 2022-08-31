import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();

/**
 * Set your target network!!!
 */
const TARGET_NETWORK = "mumbai";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: TARGET_NETWORK,
  networks: {
    localhost: {},
    polygon: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_POLYGON}`,
      accounts: [`${process.env.DEPLOYER_PRIVATE_KEY}`],
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_MUMBAI}`,
      accounts: [`${process.env.DEPLOYER_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      polygon: `${process.env.POLYGONSCAN_API_KEY}`,
      polygonMumbai: `${process.env.POLYGONSCAN_API_KEY}`,
    },
  },
};

export default config;
