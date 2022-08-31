import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("KusaToken", function () {
  async function deployKusaToken() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const KusaToken = await ethers.getContractFactory("KusaToken");
    const kusaToken = await KusaToken.deploy();
    return { kusaToken, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { kusaToken, owner } = await loadFixture(deployKusaToken);
      expect(await kusaToken.owner()).to.equal(owner.address);
    });
  });

  describe("Mint", function () {
    it("Should mint right amount of token", async function () {
      const { kusaToken, owner } = await loadFixture(deployKusaToken);
      const tokenId = 0;
      const amount = 100000;
      const data = "0x";
      await kusaToken.mint(owner.address, 0, amount, data);
      const ownerBalance = await kusaToken.balanceOf(owner.address, tokenId);
      expect(await kusaToken.totalSupply(tokenId)).to.equal(ownerBalance);
    });

    it("Should mint additional token", async function () {
      const { kusaToken, owner } = await loadFixture(deployKusaToken);
      const tokenId = 0;
      const amount = 100000;
      const data = "0x";
      await kusaToken.mint(owner.address, 0, amount, data);

      // Mint additional token
      const additionalAmount = 100000;
      await kusaToken.mint(owner.address, 0, additionalAmount, data);

      const ownerBalance = await kusaToken.balanceOf(owner.address, tokenId);
      console.log("ownerBalance: " + ownerBalance);
      expect(amount + additionalAmount).to.equal(ownerBalance);
    });
  });
});
