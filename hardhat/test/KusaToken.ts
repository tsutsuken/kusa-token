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
});
