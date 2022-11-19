# Integer Overflow

V Solidity je možné spôsobiť pretečenie (alebo podtečenie) pri sčítavaní (`add`) a odčítavaní (`sub`) akéhokoľvek typu celého čísla(int).

## Útočný scenár

- (Underflow) Útočník má 10 jednotiek akéhokoľvek [ERC20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) tokenu. Ak minie 11 jednotiek a za predpokladu, že program nekontroluje underflow, skončí s 2^256 jednotkami tokenu.

- (Overflow) Contracty, ktoré obsahujú dynamické pole a nebezpečnú metódu `pop` môžu byť útočníkom zneužité tým, že sa zaplní maximálna dĺžka poľa a zmenia sa ďalšie premenné v contracte.

## Konkrétný príklad

- V príklade vyššie možno vidieť aj [nezabezpečenú](intOverflow.sol#6), aj [zabezpečenú](intOverflow.sol#13) verziu funkcie `add`.

## Náprava zraniteľnosti

- Je nutné validovať všetky aritmetické operácie

- Taktiež sa odporúča používať [safeMath knižnicu](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol)

## Užitočné linky

- https://hackernoon.com/hack-solidity-integer-overflow-and-underflow

- https://valid.network/post/integer-overflow-in-ethereum

- https://www.youtube.com/watch?v=zqHb-ipbmIo