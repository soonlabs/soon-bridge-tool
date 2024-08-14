# Install
`yarn`

# Usage
### init soon
`yarn init_soon`

### expend deposit account info
`yarn expend_deposit --expandNum=10`

### create SPL token on L2
`yarn create_spl_token --l1Token='0x8fbd74E3927534fae382Bb586b37AD50a8F96631' --name='USD Coin' --symbol='USDC' --decimals=6`

### issue withdraw eth transaction
`yarn issue_withdraw_eth --l1Target='0x018281853eCC543Aa251732e8FDaa7323247eBeB' --value=200000000 --gasLimit=100000`

### issue withdraw spl transaction
`yarn issue_withdraw_spl --l1Target='0x018281853eCC543Aa251732e8FDaa7323247eBeB' --amount=200000000 --gasLimit=100000`

### propose withdraw transaction
`yarn propose_withdraw --withdrawHeight=15020`

### fetch proposed l2 height on l1
`yarn fetch_proposed_height`

### prove withdraw transaction
`yarn prove_withdraw --withdrawId=5y4cigJregZVg7QzjXHPJCZwq1nGzjzqWkG7JjXiRHo7 --withdrawHeight=15020`

### fetch withdraw finalized status
`yarn fetch_withdraw_finalize_status --withdrawId=5y4cigJregZVg7QzjXHPJCZwq1nGzjzqWkG7JjXiRHo7`

### finalize withdraw transaction
`yarn finalize_withdraw --withdrawId=5y4cigJregZVg7QzjXHPJCZwq1nGzjzqWkG7JjXiRHo7`

### deposit eth transaction
`yarn deposit_eth --l2Target=442GBBJoU23a92aA3bs9hVkQRxB3SsF3hzbgnjbYetFL --value=100000000000000000 --gasLimit=100000`

### deposit erc20 transaction
`yarn deposit_erc20 --l1Token=0x8fbd74E3927534fae382Bb586b37AD50a8F96631 --l2Token=5TS8yBPiiZ6v3XFcmVj8XRykPtZbAs1P9GPsKsNUzHzb --l2Receiver=442GBBJoU23a92aA3bs9hVkQRxB3SsF3hzbgnjbYetFL --amount=2000000000000000 --gasLimit=100000`

### fetch all withdrawal transactions by user pubkey
`yarn fetch_all_withdrawal_tx_by_user --sender=9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU`

### mint test ERC20 token
`yarn mint_test_erc20 --l1Token=0x8fbd74E3927534fae382Bb586b37AD50a8F96631 --l1Receiver=0xA96605EcF43E4e16e2255B0006b79a7781797b44 --amount=100000000000000000`
