async function main() {
    // Grab the contract factory 
    const auctionContract = await ethers.getContractFactory("PhunksAuctionHouse");
 
    // Start deployment, returning a promise that resolves to a contract object
    const auctionHouse = await auctionContract.deploy(); // mainnet
    // const beanoNFT = await beePhunks.deploy("0xe1d8e86d222b8c0e479eb9ee3d89415123ac6387","0x6f415afdce0d9774241e33128db54956edce8b61"); // rinkeby 
    console.log("Contract deployed to address:", auctionHouse.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });