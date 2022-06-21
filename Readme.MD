Release Notes: 
1. Treasury wallet must setApprovalForAll on contract of Collection being auctioned.

2. If you are outbid, funds automatically returned.

3. When 'unpaused' is true, only settleCurrentAndCreateNewAuction() can be called. Anyone can call it, assets are sent trustlessly before creating a new auction.

4. When 'paused' is true, only settleAuction() can be called.

5. To auction specific tokenID: first call pause(), then settleAuction(), then call createSpecialAuction() and specificy tokenID and endTime.

6. Current phunks are reserved for special auction: 7-trait, Ape, 4 zombies (2711, 1478, 5066, 5312, 5742, 8348)

7. You can remove these reserved tokens by removing lines 218-222 in PhunksAuctionHouse.sol


