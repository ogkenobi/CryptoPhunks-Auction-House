Release Notes: 
1. Treasury wallet must setApprovalForAll on contract of Collection being auctioned.

2. If you are outbid, funds automatically returned.

3. When 'unpaused' is true, only settleCurrentAndCreateNewAuction() can be called. Anyone can call it, assets are sent trustlessly before creating a new auction.

4. When 'paused' is true, only settleAuction() can be called.

5. createSpecialAuction() can only be called by PhunksAuctionHouse contract owner.

6. To auction specific tokenID: first call pause(), then settleAuction(), then call createSpecialAuction() and specificy tokenID and endTime.

7. Current phunks are reserved for special auction: 7-trait (8348)

8. When you get to the last phunk, it will auction that last phunk, and if people try to settleCurrentAndCreateNew() they will get hit with a gas error.

However, the treasury can then pause() the contract and call settleAuction() to send ETH to treasury and the last Phunk to auction winner.


