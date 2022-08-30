import { ethers } from "hardhat";

async function main() {
  const KusaToken = await ethers.getContractFactory("KusaToken");
  const kusaToken = await KusaToken.deploy();
  await kusaToken.deployed();
  console.log(`KusaToken deployed to ${kusaToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
