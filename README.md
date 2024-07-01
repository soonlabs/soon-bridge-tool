# Install
`yarn install`

# Usage
### init soon
`yarn init_soon`

### expend deposit account info
`yarn expend_deposit --expandNum=10`

### issue withdraw transaction
`yarn issue_withdraw --l1Target='0x018281853eCC543Aa251732e8FDaa7323247eBeB' --vaule=200000 --gasLimit=100000`

### propose withdraw transaction
`yarn propose_withdraw --withdrawHeight=15020`

### prove withdraw transaction
`yarn prove_withdraw --withdrawId=5y4cigJregZVg7QzjXHPJCZwq1nGzjzqWkG7JjXiRHo7 --withdrawHeight=15020`

### finalize withdraw transaction
`yarn finalize_withdraw --withdrawId=5y4cigJregZVg7QzjXHPJCZwq1nGzjzqWkG7JjXiRHo7`
