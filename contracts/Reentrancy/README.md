# Re-entrancy

Stavová premenná contractu sa mení po tom, čo sa vyvolá `call.value`. Útočník používa [fallback funkciu](reExploit.sol#L26-L33) ktorá sa automaticky vyvolá po presune Etheru z cieľového contractu – na opätovné spustenie zraniteľnej funkcie pred zmenou stavovej premennej.

## Útočný scenár

- Contract, ktorý obsahuje mapovanie zostatkov na účtoch, umožňuje používateľom zavolať funkciu `withdraw`. Avšak odoslanie `withdraw` volania zavolá `send`, ktorý síce prevedie kontrolu o volaní nad contractom, ale nezníži zostatok aktív na účte, kým sa celé odoslanie neskončí. Tým pádom môže útočník opakovane vyberať peniaze, ktoré nemá.

## Konkrétný príklad

- V príklade vyššie možno vidieť aj [nezabezpečenú](reEntrancy.sol#L14-21), aj [zabezpečenú](reEntrancy.sol#L23-31) verziu funkcie `withdraw`.


## Náprava zraniteľnosti

- Treba aktualizovať všetky stavové premenné ešte pred odoslaním volania na extrený smart contract.

- **Neoporúča** sa používať `call.value`.

## Užitočné linky

- https://hackernoon.com/hack-solidity-reentrancy-attack

- https://consensys.github.io/smart-contract-best-practices/attacks/reentrancy/

- https://www.youtube.com/watch?v=3sIwIYfeOD8

- https://blog.chain.link/reentrancy-attacks-and-the-dao-hack/
