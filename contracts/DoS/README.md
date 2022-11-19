# Denial of Service

Škodlivý kontrakt môže trvalo zablokovať ďalší kontrakt strategickým zlyhaním. Najmä contracty, ktoré hromadne vykonávajú transakcie alebo aktualizácie pomocou `for` cyklu, môžu byť DoS-ované, ak volanie iného contractu alebo transfer zlyhá počas vykonávania cyklu.

## Útočný scenár

- Za predpokladu že aukčný contract, v ktorom musí byť účastník vyplatený, v momente keď bude prekonaný vyšším bidom, tak v prípade, že ak volanie na vrátenie peňazí prekonanému účastníkovi aukcie neustále zlyháva, tak sa aukcia úplne zastaví.

- Contract iteruje cez pole, aby spätne vyplatil aktíva používateľom. Ak jeden `transfer` zlyhá uprostred `for` cyklu, všetky ostatné zlyhajú tiež.

- Útočník spamuje contract, čo spôsobuje, že niektoré polia sa zväčšujú. Potom vo `for` cykle iterujúcim cez pole môže dôjsť gas a vrátiť sa späť na začiatok.


## Konkrétný príklad

- V príklade Solidity kódu vyššie možno vidieť aj [nezabezpečenú](auction.sol#L4), aj [zabezpečenú](auction.sol#L26) verziu aukcie smart contractu.

- Funkcionalitu refund taktiež možno vidieť aj v [nezabezpečenej](dos.sol#L3), aj v [zabezpečenej](dos.sol#L29) verzií.

## Náprava zraniteľnosti

- Je nutné uprednostniť vzor `pull` pred vzorom `push`

- Pokiaľ sa iteruje cez dynamicky dimenzovanú dátovú štruktúru, je nutné zvládnuť prípad, keď funkcia vyžaduje na vykonanie viacero blokov. Jednou zo stratégií na to je ukladanie iterátora do súkromnej premennej a používanie `while` cyklu, až keď gas klesne pod určitú hranicu.


## Užitočné linky

- https://medium.com/@Knownsec_Blockchain_Lab/in-depth-understanding-of-denial-of-service-vulnerabilities-dd437b1d7a1c

- https://www.youtube.com/watch?v=O2-YH2XqpLQ

- https://github.com/ConsenSys/smart-contract-best-practices#dos-with-unexpected-revert

- https://www.reddit.com/r/ethereum/comments/4ghzhv/governmentals_1100_eth_jackpot_payout_is_stuck/ 