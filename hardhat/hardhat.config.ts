import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();

/**
 * Set your target network!!!
 */
const TARGET_NETWORK = "localhost";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: TARGET_NETWORK,
  networks: {
    localhost: {},
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY_MUMBAI}`,
      accounts: [`${process.env.DEPLOYER_PRIVATE_KEY}`],
    },
  },
};

export default config;
