# Install
`yarn`

# Usage
### init soon
`yarn init_soon`

### expend deposit account info
`yarn expend_deposit --expandNum=10`

### issue withdraw transaction
`yarn issue_withdraw --l1Target='0x0000000000000000000000000000000000000001' --value=100 --gasLimit=100000`

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
`yarn deposit_eth --l2Target=442GBBJoU23a92aA3bs9hVkQRxB3SsF3hzbgnjbYetFL --value=200000 --gasLimit=100000`

### fetch all withdrawal transactions by user pubkey
`yarn fetch_all_withdrawal_tx_by_user --sender=9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU`
