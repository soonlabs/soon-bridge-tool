# SOON Bridge Tools

This repo provides a comprehensive CLI for seamlessly managing asset transfers between L1 and SOON L2. This toolset enables users to perform essential bridge operations for L1-L2 communication. Built to support the canonical SOON bridge implementation, it handles deposits of ETH and ERC20 tokens from L1 to SOON L2, as well as the creation and management of corresponding SPL tokens on L2.

## Getting Started

### Installation

```bash
yarn
```

### Environment Setup

Create a `.env` file in the root directory with the following configuration:

```
# User Configuration (Required)
EVM_USER_KEY=                         # User private key for EVM side
SVM_USER_KEY=                         # User private key for SVM side
SVM_BRIDGE_ADMIN_KEYPAIR=             # Bridge admin keypair for bridge owner

# Network Configuration (Required)
EVM_RPC_URL=                          # RPC URL for Sepolia
SVM_RPC_URL=                          # RPC URL for SOON
EVM_STANDARD_BRIDGE=                  # Standard bridge address for EVM

# Program IDs (Optional)
SVM_BRIDGE_PROGRAM_KEY=               # Default: 'Bridge1111111111111111111111111111111111111'
SVM_L1_BLOCK_INFO_PROGRAM_KEY=        # Default: 'L1BLockinfo11111111111111111111111111111111'

# Proposer Configuration (Optional)
EVM_PROPOSER_KEY=                     # Proposer private key for EVM, only for propose_withdraw
```

## Usage

### Deposit Operations

1. Deposit ETH:

```bash
yarn deposit_eth --l2Target=442GBBJoU23a92aA3bs9hVkQRxB3SsF3hzbgnjbYetFL --value=100000000000000000 --gasLimit=100000
```

2. Deposit ERC20:

```bash
yarn deposit_erc20 --l1Token=0x8fbd74E3927534fae382Bb586b37AD50a8F96631 --l2Token=5mShWfe7ZYkdeyLgcHxtHUNtCx2cMXkC8roCWdvmW95k --l2Receiver=9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU --amount=2000000000000000000 --gasLimit=100000
```

### Issue Withdrawal Operations

1. Issue ETH withdrawal:

```bash
yarn issue_withdraw_eth --l1Target='0x018281853eCC543Aa251732e8FDaa7323247eBeB' --value=20000000 --gasLimit=100000
```

2. Issue SPL withdrawal:

```bash
yarn issue_withdraw_spl --l1Token='0x8fbd74E3927534fae382Bb586b37AD50a8F96631' --l1Target='0x018281853eCC543Aa251732e8FDaa7323247eBeB' --amount=2000000 --gasLimit=100000
```

### Withdrawal Management Operations

1. Propose withdrawal(only needed without running proposer):

```bash
yarn propose_withdraw --withdrawHeight=15020
```

2. Check proposed L2 height on L1:

```bash
yarn fetch_proposed_height
```

3. Prove withdrawal:

```bash
yarn prove_withdraw --withdrawId=5y4cigJregZVg7QzjXHPJCZwq1nGzjzqWkG7JjXiRHo7 --withdrawHeight=15020
```

4. Check withdrawal status:

```bash
yarn fetch_withdraw_finalize_status --withdrawId=5y4cigJregZVg7QzjXHPJCZwq1nGzjzqWkG7JjXiRHo7
```

5. Finalize withdrawal:

```bash
yarn finalize_withdraw --withdrawId=5y4cigJregZVg7QzjXHPJCZwq1nGzjzqWkG7JjXiRHo7
```

6. Relay withdrawal:

```bash
yarn relay_withdraw --txHash=0x0f95580f185a2e7c6db077c559646cf6081059ca1fbaaff6df14f68201532a66
```

### Token Operations

1. Create SPL token on L2:

```bash
yarn create_spl_token --l1Token='0x8fbd74E3927534fae382Bb586b37AD50a8F96631' --name='USD Coin' --symbol='USDC' --uri='https://ipfs.io/ipfs/QmXRVXSRbH9nKYPgVfakXRhDhEaXWs6QYu3rToadXhtHPr' --decimals=6
```

2. Mint test ERC20 token:

```bash
yarn mint_test_erc20 --l1Token='0x8fbd74E3927534fae382Bb586b37AD50a8F96631' --l1Receiver='0xA96605EcF43E4e16e2255B0006b79a7781797b44' --amount=100000000000000000
```

3. Calculate Associated Token Account (ATA):

```bash
yarn calculate_ata --l2Pubkey='9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU' --splMintKey='Av7G6mUjHpRQtW1eAvKkmcm9NuuUkADmR1xR4F41sSfM'
```

4. Update metadata for SPL token:

```bash
yarn update_spl_metadata --l1Token='0x8fbd74E3927534fae382Bb586b37AD50a8F96631' --name='USD Coin' --symbol='USDC' --uri='https://ipfs.io/ipfs/bafkreicesdbqvp3uhjdz2cucu7a2cj2dshoc2vgnmoadjhgrcrqhohpwqy'
```

### Query Operations

- Fetch withdrawals by user:

```bash
yarn fetch_all_withdrawal_tx_by_user --sender=9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU
```

- Calculate L2 block info hash by l1 block hash:

```bash
 yarn calculate_l2_block_info_tx_signature --l1BlockHash 0xbdca34790fa5942964c587e624d46e94393fc3ce5a9a5ab3262aab8db3e4
```

### Admin Operations

- Change bridge admin:

```bash
yarn change_bridge_admin --newAdmin=9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU
```

### Safe Operations

- Generate Contract Upgrade Signature:

```bash
yarn generate_contract_upgrade_signature --safe 0x5B72117cd20902A2f525D61c436a33eA55fCfdC5 --proxyAdmin 0x62d7F1Fd5Ba13121FcE6E6648c23a25FB43112F2 --proxy 0x8061A80A302C7AEad088194CfD50D9739534A201 --impl 0x5b73ba9d9b500fd770efb2d6b6351deaf6513a71 
```

- Execute Safe Transaction:

```bash
yarn execute_safe_transaction --safe 0x5B72117cd20902A2f525D61c436a33eA55fCfdC5 --target 0x62d7F1Fd5Ba13121FcE6E6648c23a25FB43112F2 --data 0x99a88ec40000000000000000000000008061a80a302c7aead088194cfd50d9739534a2010000000000000000000000005b73ba9d9b500fd770efb2d6b6351deaf6513a71 --signatures 0x09822f566368f4906651ba8aec8fa6f2f544fb0c94730679b7dc89ec6fc0ffd00d7151733cec45c747f1dcff2abda733ae83485cd7be93c2373f20456b2363711bb770b604360db7850d535ee3a0a8638392931df6af0414445697237029d2897d054569572d4aea3bf67a079b485673bb0cd4d9922586f0c0086ad03042fa763b1b 
```