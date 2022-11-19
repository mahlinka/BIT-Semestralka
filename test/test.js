
const { expect } = require('chai');
const { ethers, network } = require('hardhat');


describe('[*] DoS contracts', () => {
  beforeEach(async () =>{
      dosContract = await ethers.getContractFactory('DosAuction');
      dos = await dosContract.deploy();

      SdosContract = await ethers.getContractFactory('SecureAuction');
      sdos = await SdosContract.deploy();

      BAuctionContract = await ethers.getContractFactory('CrowdFundBad');
      bauction = await BAuctionContract.deploy();

      PAuctionContract = await ethers.getContractFactory('CrowdFundPull');
      pauction = await PAuctionContract.deploy();

      SAuctionContract = await ethers.getContractFactory('SecureAuction');
      sauction = await SAuctionContract.deploy();

      [owner, USER1, USER2, _] = await ethers.getSigners();
  });

  describe('Contract deployment', () => {
      it('Correct DosAuction deployment', async () => {
          expect(await dos).to.exist;
      });
      it('Correct SafeAuction deployment', async () => {
        expect(await sdos).to.exist;
      });
      it('Correct CrowdFundBad deployment', async () => {
        expect(await bauction).to.exist;
      });
      it('Correct CrowdFundPull deployment', async () => {
        expect(await pauction).to.exist;
      });
      it('Correct SecureAuction deployment', async () => {
        expect(await sauction).to.exist;
      });
  });

  describe('DoS attack', () => {
    it('Volanie bid', async () => {
        await dos.bid(10);
    });
    it('Volanie bid s vyššou hodnoutou', async () => {
      await dos.bid(20);
    });
    it('Volanie refundDos', async () => {
      for(let i=0; i<=20; i++)
        await bauction.refundDos();
    });
    it('Zaseknutá funkcia withdraw', async () => {
      expect(bauction.refundDos()).revertedWith("Error")
    });
  
});

});


describe('[*] Reentrancy contracts', () => {
  beforeEach(async () =>{
      ReEntr = await ethers.getContractFactory('Reentrance');
      reEnt = await ReEntr.deploy();

      ReExpl = await ethers.getContractFactory('ReentranceExploit');
      reExpl = await ReExpl.deploy();

      [owner, USER1, USER2, _] = await ethers.getSigners();
  });

  describe('Contract deployment', () => {
      it('Correct reEntrancy.sol deployment', async () => {
          expect(await reEnt).to.exist;
      });
      it('Correct reExploit.sol deployment', async () => {
        expect(await reExpl).to.exist;
    });
  });

  describe('Reentrancy attack', () => {
      it('Volanie deposit', async () => {
          await reExpl.deposit(reEnt.address);
      });
      it('Volanie withdrawBalance', async () => {
        await reEnt.withdrawBalance();
    });
    it('Volanie launch_attack', async () => {
      await reExpl.launch_attack();
    });
    it('Hodnota balance vyčerpaná na 0', async () => {
      let balance = await reEnt.getBalance(reEnt.address);
      expect(balance).to.equal(0)
      console.log("Balance:", balance);
    });
    
  });

});

describe('[*] Integer Overflow contract', () => {
  beforeEach(async () =>{
      Over = await ethers.getContractFactory('Overflow');
      over = await Over.deploy();

      [owner, USER1, USER2, _] = await ethers.getSigners();
  });

  describe('Contract deployment', () => {
      it('Correct dos.sol deployment', async () => {
          expect(await over).to.exist;
      });
  });

  describe('Integer overflow attack', () => {
    it('Pretečenie po pripočítaní 2^256+1 (Max kapacity uint256)', async () => {
      await over.add(2^256+1);
      let value =  await over.getBalance();
      expect(value).not.equal(2^256+1)
      
    });
});
});