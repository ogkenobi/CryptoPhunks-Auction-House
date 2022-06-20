/*

        IPhunksToken _phunks,
        address _weth,
        uint256 _timeBuffer,
        uint256 _reservePrice,
        uint8 _minBidIncrementPercentage,
        uint256 _duration,
        address _treasuryWallet

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
1. Reserve price? (easy to set this)
2. Ability to cancel an auction? 
3. SettleAndCreateAuction costs gas. Anyone can call it, assets sent trustlessly
4. Current phunks are reserved for special auction: 7-trait, Ape, 4 zombies


Notes: 
1. Treasury must setApprovalForAll to Auction contract?? (check this)
2. If you are outbid, funds automatically returned











*/
