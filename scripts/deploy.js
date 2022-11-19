const hre = require("hardhat");

async function main() {
 
  const [deployer] = await ethers.getSigners();

    console.log("[*] Deploying contracts with the account:", deployer.address);
    console.log("[*] Account balance:", (await deployer.getBalance()).toString());

    console.log("\n-------------------------\n[*] Deploy: DOS contracts\n-------------------------\n")
    const Auction = await ethers.getContractFactory("DosAuction");
    const auction = await Auction.deploy();
    console.log("DosAuction address: ", auction.address);
    console.log("-------------------------\n");
    const OKAuction = await ethers.getContractFactory("SecureAuction");
    const okauction = await OKAuction.deploy();
    console.log("SacureAuction address: ", okauction.address);
    console.log("-------------------------\n");
    const Dos = await ethers.getContractFactory("CrowdFundBad");
    const dos = await Dos.deploy();
    console.log("Vulnerable dos address: ", dos.address, "\n-------------------------\n");
    const PDos = await ethers.getContractFactory("CrowdFundPull");
    const pdos = await PDos.deploy();
    console.log("Pull dos address: ", pdos.address, "\n-------------------------\n");
    const SDos = await ethers.getContractFactory("CrowdFundSafe");
    const sdos = await SDos.deploy();
    console.log("Safe dos address: ", sdos.address, "\n-------------------------\n");
    
    console.log("-------------------------\n[*] Deploy: Reentrancy contracts\n-------------------------\n")
    const ReEnt = await ethers.getContractFactory("Reentrance");
    const reEnt = await ReEnt.deploy();
    console.log("reEntrancy address: ", reEnt.address);
    console.log("-------------------------\n");
    const ReExpl = await ethers.getContractFactory("ReentranceExploit");
    const reExpl = await ReExpl.deploy();
    console.log("reExploit address: ", reExpl.address, "\n-------------------------\n");


    console.log("-------------------------\n[*] Deploy: Integer Overflow contract\n-------------------------\n")
    const Over = await ethers.getContractFactory("Overflow");
    const over = await Over.deploy();
    console.log("intOverflow address: ", over.address);
    console.log("-------------------------\n");
    

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
