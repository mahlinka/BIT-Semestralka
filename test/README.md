# Unit testy

Predmetom [unit testov](test.js) bolo overenie korektného nasadenia smart contractov do siete. Zároveň sme testovali vykonanie samotných exploitov na zraniteľné smart contracty. 

Konkrétne sme testovali:
* [Denial of service](test.js#L-6), 
* [Reetrancy](test.js#L-64), 
* [Integer overflow](test.js#L-104).

Samotné testy je možné spustiť príkazom: 

```shell
npx hardhat test
```