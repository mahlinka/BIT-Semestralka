# Deployment script

Účelom scriptu bolo zjednoduchšenie si procesu nasadzovania smart contractov do testovacej blockchain siete (v našom prípade [hardhat network](https://hardhat.org/hardhat-network/docs/overview)). Každý smart contract je nutné nasadiť do siete za účelom akejkoľvek manipulácie s jeho obsahom a funcionalitou. Obsahom [scriptu](deploy.js) okrem spomínaného nasadenia je aj výpis adries nasadených smart contractov. 

Samotný script je možné spustiť prákazom:
```shell
npx hardhat run --network hardhat scripts/deploy.js
```