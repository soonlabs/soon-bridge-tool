# SOON Bridge Tools

This repo provides a comprehensive command-line interface (CLI) for seamlessly managing asset transfers between Sepolia (Layer 1) and SOON (Layer 2). This toolset enables users to perform essential bridge operations for L1-L2 communication, including depositing and withdrawing both ETH and custom tokens. Built to support the canonical SOON bridge implementation, it handles deposits of ETH and ERC20 tokens from Sepolia to SOON testnet, as well as the creation and management of corresponding SPL tokens on Layer 2.

## Installation

yarn

## Environment Setup

Create a .env file in the root directory:

# Proposer Configuration (Optional)

EVM_PROPOSER_KEY= # Proposer private key for EVM, only for propose_withdraw

# User Configuration

EVM_USER_KEY= # User private key for EVM (default: 0x2FCdB0B88AC15c2e6a3803bd877E44Ee973E59b5)
SVM_USER_KEY= # User private key for SVM
SVM_BRIDGE_ADMIN_KEYPAIR= # Bridge admin keypair for bridge owner

# Network Configuration (Required)

EVM_PROVIDER_URL= # RPC URL for Sepolia
EVM_STANDARD_BRIDGE= # Standard bridge address for EVM
SVM_CONNECTION_URL= # RPC URL for SVM
SVM_SOON_RPC_URL= # SOON RPC URL for SVM

# Program IDs (Optional)

SVM_BRIDGE_PROGRAM_KEY= # Default: 'Bridge1111111111111111111111111111111111111'
SVM_L1_BLOCK_INFO_PROGRAM_KEY= # Default: 'L1BLockinfo11111111111111111111111111111111'

## Usage

### Initial Setup

Initialize SOON bridge:
yarn init_soon --l1CrossDomainMessenger='0xeAf0D514E0339dafd6Cf4f6e0d30a1068883204a' --l1StandardBridge='0x43D6C6D64D7a7D30E155C7C2F1bd2d385A592AD2'

Expand deposit account:
yarn expend_deposit --expandNum=10

### Token Operations

Create SPL token on L2:
yarn create_spl_token --l1Token='0x8fbd74E3927534fae382Bb586b37AD50a8F96631' --name='USD Coin' --symbol='USDC' --decimals=6

Mint test ERC20 token:
yarn mint_test_erc20 --l1Token='0x8fbd74E3927534fae382Bb586b37AD50a8F96631' --l1Receiver='0xA96605EcF43E4e16e2255B0006b79a7781797b44' --amount=100000000000000000

Calculate Associated Token Account (ATA):
yarn calculate_ata --l2Pubkey='9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU' --splMintKey='Av7G6mUjHpRQtW1eAvKkmcm9NuuUkADmR1xR4F41sSfM'

### Deposit Operations

Deposit ETH:
yarn deposit_eth --l2Target=442GBBJoU23a92aA3bs9hVkQRxB3SsF3hzbgnjbYetFL --value=100000000000000000 --gasLimit=100000

Deposit ERC20:
yarn deposit_erc20 --l1Token=0x8fbd74E3927534fae382Bb586b37AD50a8F96631 --l2Token=5mShWfe7ZYkdeyLgcHxtHUNtCx2cMXkC8roCWdvmW95k --l2Receiver=9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU --amount=2000000000000000000 --gasLimit=100000

### Withdrawal Operations

Issue ETH withdrawal:
yarn issue_withdraw_eth --l1Target='0x018281853eCC543Aa251732e8FDaa7323247eBeB' --value=20000000 --gasLimit=100000

Issue SPL withdrawal:
yarn issue_withdraw_spl --l1Token='0x8fbd74E3927534fae382Bb586b37AD50a8F96631' --l1Target='0x018281853eCC543Aa251732e8FDaa7323247eBeB' --amount=2000000 --gasLimit=100000

### Withdrawal Management

Propose withdrawal:
yarn propose_withdraw --withdrawHeight=15020

Check proposed L2 height on L1:
yarn fetch_proposed_height

Prove withdrawal:
yarn prove_withdraw --withdrawId=5y4cigJregZVg7QzjXHPJCZwq1nGzjzqWkG7JjXiRHo7 --withdrawHeight=15020

Check withdrawal status:
yarn fetch_withdraw_finalize_status --withdrawId=5y4cigJregZVg7QzjXHPJCZwq1nGzjzqWkG7JjXiRHo7

Finalize withdrawal:
yarn finalize_withdraw --withdrawId=5y4cigJregZVg7QzjXHPJCZwq1nGzjzqWkG7JjXiRHo7

### Query Operations

Fetch withdrawals by user:
yarn fetch_all_withdrawal_tx_by_user --sender=9AEqVwntF6tc6CHkZWbm2cj3HmiCNffcE9dRWMuCBmU
