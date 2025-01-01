# Install
`yarn`

# Usage
### init soon
`yarn init_soon --l1CrossDomainMessenger='0xeAf0D514E0339dafd6Cf4f6e0d30a1068883204a' --l1StandardBridge='0x43D6C6D64D7a7D30E155C7C2F1bd2d385A592AD2'`

### expend deposit account info
`yarn expend_deposit --expandNum=10`

### create SPL token on L2
`yarn create_spl_token --l1Token='0x8fbd74E3927534fae382Bb586b37AD50a8F96631' --name='USD Coin' --symbol='USDC' --decimals=6`

### issue withdraw eth transaction
`yarn issue_withdraw_eth --l1Target='0x018281853eCC543Aa251732e8FDaa7323247eBeB' --value=20000000 --gasLimit=100000`

### issue withdraw spl transaction
`yarn issue_withdraw_spl --l1Token='0x8fbd74E3927534fae382Bb586b37AD50a8F96631' --l1Target='0x018281853eCC543Aa251732e8FDaa7323247eBeB' --amount=2000000 --gasLimit=100000`

### fetch user withdrawal history
`yarn fetch_user_withdrawal_history --l2User='9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU'`

### calculate ata
`yarn calculate_ata --l2Pubkey='9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU' --splMintKey='Av7G6mUjHpRQtW1eAvKkmcm9NuuUkADmR1xR4F41sSfM'`

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
`yarn deposit_erc20 --l1Token=0x8fbd74E3927534fae382Bb586b37AD50a8F96631 --l2Token=5mShWfe7ZYkdeyLgcHxtHUNtCx2cMXkC8roCWdvmW95k --l2Receiver=9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU --amount=2000000000000000000 --gasLimit=100000`

### mint test ERC20 token
`yarn mint_test_erc20 --l1Token=0x8fbd74E3927534fae382Bb586b37AD50a8F96631 --l1Receiver=0xA96605EcF43E4e16e2255B0006b79a7781797b44 --amount=100000000000000000`
