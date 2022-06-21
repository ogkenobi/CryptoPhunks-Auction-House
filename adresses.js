/*

        IPhunksToken _phunks,
        address _weth,
        uint256 _timeBuffer,
        uint256 _reservePrice,
        uint8 _minBidIncrementPercentage,
        uint256 _duration,
        address _treasuryWallet

mainnetPhunks contract
0xf07468eAd8cf26c752C676E43C814FEe9c8CF402

weth contract
0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2

timeBuffer
1800

reserve price
0

minBidIncrement
10

duration
259200 3 days

treasuryWallet
0x61f874551c69f0e40c9f55219107b408c989adec


rinkeby smolPhunks contract
0x815cbCD43F214C06e1827893d8Adaa9C8b209259

rinkeby weth contract
0xc778417E063141139Fce010982780140Aa0cD5Ab

timebuffer (60 = 1 min)
180 (3 minutes)

reserve price (in wei)
1

minBidIncrementPercentage
2

duration
600 (10 minutes)

treasuryWallet
0x165489bF0497401101929e2AA8De78f33Dc53D30


Open Issues:
1. SettleAndCreateAuction costs gas. Anyone can call it, assets sent trustlessly
4. Current phunks are reserved for special auction: 7-trait, Ape, 4 zombies


Notes: 
1. Treasury must setApprovalForAll to Auction contract?? (check this)
2. If you are outbid, funds automatically returned
3. Ability to cancel an auction -->> Pause contract before current auction ends.
4. Current phunks are reserved for special auction: 7-trait, Ape, 4 zombies (2711, 1478, 5066, 5312, 5742, 8348)

Todo:
Community Members can Auction their shit
Raffle a phunk, each ticket costs 0.01 etc











*/
