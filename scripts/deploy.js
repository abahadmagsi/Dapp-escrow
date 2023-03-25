async function main() {
  const [owner, addr2] = await ethers.getSigners();
  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.depoly(owner.address, addr2.address);
  await escrow.depolyed();
  console.log(Escrow);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
