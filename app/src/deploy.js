// import { ethers } from "ethers";
const ethers = require("ethers");
// import Escrow from "./artifacts/contracts/Escrow.sol/Escrow";
const Escrow = require("./artifacts/contracts/Escrow.sol/Escrow");
async function deploy(signer, arbiter, beneficiary, value) {
  const factory = new ethers.ContractFactory(
    Escrow.abi,
    Escrow.bytecode,
    signer
  );
  await factory.deploy(arbiter, beneficiary, { value });

  console.log(factory);
}
