# BIT - Zraniteľnosti v smart contractoch

Praktická časť semestrálneho projektu je prezentovaná v tomto github repozitári. Tento repozitár obsahuje Solidity kódy viacerých smart contractov, pričom tieto contracty obsahujú 3 rôzne zraniteľnosti.


V tejto praktickej časti projektu si konkrétne ukážeme:
* [Denial of service](contracts/DoS/)
* [Reentrancy](contracts/Reentrancy/)  
* [Integer Overflow](contracts/IntegerOverflow/)


Zdrojove kódy zraniteľností boli čerpané z nasledujúceho [github repozitára](https://github.com/crytic/not-so-smart-contracts). Zdrojové kódy bolo nutné mierne upraviť, aby ich bolo možné skompilovať s verziou solidity "0.4.15" a zároveň drobné úpravy boli nutné aj pri vykonávaní automatizovaných unit testov.

Contracty sme si zaobalili do [hardhat](https://hardhat.org) frameworku za účelom jednoduchšej manipulácie a testovania smart contractov. 

Za účelom zjednošenia procesu deploymentu contractov sme si vytvorili [script](scripts/).

 Samotnú funkčnosť contractov a vykonanie exploitov sme overili prostredníctvom nami napísaných [unit testov](test/).


## Technická príručka

Za účelom spustenia programu použite nasledujúce príkazy v termináli:

```shell
npx hardhat run --network hardhat scripts/deploy.js

npx hardhat test
```

