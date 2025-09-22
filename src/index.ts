import { errors, ethers } from 'ethers';
import {
  base58PublicKeyToHex,
  parseDepositTransactionEventData,
  hexToBase58,
  sendSlackMessage,
} from './helper/tool';
import { createEVMContext } from './helper/evm_context';
import { createSVMContext } from './helper/svm_context';
import { PublicKey } from '@solana/web3.js';
import axios from 'axios';
import { getMint } from '@solana/spl-token';
import { Mint } from '@solana/spl-token/src/state/mint';
import { parseEther } from 'ethers/lib/utils';
import {
  L2OutputOracle__factory,
  SystemConfig__factory,
} from '../typechain-types';
import { Options } from '@layerzerolabs/lz-v2-utilities';
import bs58 from 'bs58';

async function main() {
  // await getSupplyTrackerProof();

  await testBase58();
  // const integerArray = base58ToIntegerArray('')
  // console.log("Integer Array:", integerArray);
  // console.log("Length:", integerArray.length);
}

async function systemConfig() {
  let evm = await createEVMContext();
  let config = SystemConfig__factory.connect(
    // evm.EVM_SYSTEM_CONFIG,
    '0xF6A3b354B42aca16398F23b1f16497cf761FFBE7',
    evm.EVM_PROVIDER,
  );
  // let pubkeyinfo0 = await config.sequencerPubkeyInfos(0);
  // console.log('...pubkeyinfo0:', pubkeyinfo0);
  let pubkeyinfo1 = await config.getSequencerPubkeyInfos();
  console.log('...pubkeyinfo1:', pubkeyinfo1);

  let filters = config.filters.SequencerPubkeyInfoAdded();
  let logs = await config.queryFilter(filters);
  console.log('...logs:', logs);
}

async function l2output() {
  let evm = await createEVMContext();
  let oracle = L2OutputOracle__factory.connect(
    '0xcb55e1e51005249b4eeae4c4f867c89118ab3078',
    evm.EVM_PROVIDER,
  );
  let proposer = await oracle.proposer();
  console.log('...proposer:', proposer);
}

async function transferETH() {
  let evm = await createEVMContext();
  let res = await evm.EVM_USER.sendTransaction({
    to: '0x2FCdB0B88AC15c2e6a3803bd877E44Ee973E59b5',
    value: parseEther('0.01'),
  });
  let receipt = await res.wait(1);
  console.log('...receipt:', receipt);
}

async function getSPLMintInfo() {
  let svmContext = await createSVMContext();
  let l2Token = 'W9qPz1vXFmKago2TsUJeixxh1tSEzeimebJEEf2kY2j';
  let info = await getMint(svmContext.SVM_Connection, new PublicKey(l2Token));
  console.log('info:', info);
}

async function parseTokenMintAccount(mintAccountData: Buffer) {
  console.log('mintAccountData length:', mintAccountData.length);
  console.log('mintAccountData:', mintAccountData.toString('hex'));
  const totalSupply = '0x' + mintAccountData.slice(36, 44).toString('hex');
  const decimal = '0x' + mintAccountData.slice(44, 45).toString('hex');
  console.log('totalSupply:', totalSupply);
  console.log('decimal:', decimal);
}

async function getSupplyTrackerProof() {
  let svmContext = await createSVMContext();
  let l2Height = 2037633;
  let l2Token = 'W9qPz1vXFmKago2TsUJeixxh1tSEzeimebJEEf2kY2j';
  //1. get mint account info
  let tokenAccount = await svmContext.SVM_Connection.getAccountInfo(
    new PublicKey(l2Token),
  );
  console.log('tokenAccount:', tokenAccount);
  await parseTokenMintAccount(tokenAccount?.data!);

  //2.
  const response0 = await axios.post(svmContext.SVM_RPC_URL, {
    jsonrpc: '2.0',
    id: 1,
    method: 'outputAtBlock',
    params: [Number(l2Height)],
  });
  console.log('response0 data:', response0.data);
  console.log('stateRoot:', response0.data.result.stateRoot);
  console.log('withdrawalRoot:', response0.data.result.withdrawalRoot);
  console.log('blockHash:', response0.data.result.blockHash);

  //3.
  const response1 = await axios.post(svmContext.SVM_RPC_URL, {
    jsonrpc: '2.0',
    id: 1,
    method: 'getSoonAccountProof',
    params: [l2Token, Number(l2Height)],
  });
  console.log('getSoonAccountProof response data:', response1.data);
}

async function testSendSlackMsg() {
  await sendSlackMessage(
    'https://hooks.slack.com/services/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',
    'test',
  );
}

async function testBase58() {
  const base58Key = hexToBase58(
    '0xf97c6de928cdd311b7de2e0c4c5599d8aef16de74f293ef735aa99ad1bf5b087',
  );
  console.log(`base58Key: ${base58Key}`);

  const hexKey = base58PublicKeyToHex(
    '6Xus3bYbhZbs2xkx9dhUXKB5xw5y1a1XB6dD7hbQGjt1',
  );
  console.log(`hexKey: ${hexKey}`);
}

function base58ToIntegerArray(base58PrivateKey: string): number[] {
  // Base58 解码为字节数组（Uint8Array）
  const decodedBytes: Uint8Array = bs58.decode(base58PrivateKey);

  // 转换为整数数组
  const integerArray: number[] = Array.from(decodedBytes);

  return integerArray;
}

async function testParseDepositData() {
  const evm = await createEVMContext();
  try {
    const ret = await parseDepositTransactionEventData(
      evm,
      '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005F45B00E5D0A3D70001000000000000000000000000000000000000000000000000000000000035000000000000000000000000DC8D9CB62E4AD001531EEDFDFB30AD581DC6147A02C806312CB859F1BC25448E39F87AA09857D83CCB4A837DF55648E000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000186A000000000000000000000000000000000000000000000000000000000000000C000000000000000000000000000000000000000000000000000000000000000E4F73FB39C0CE3095E4FF4411D4600BE4238C7F299C380B820691BCECD6DB45F1F08B1E08C0000000000000000000000008FBD74E3927534FAE382BB586B37AD50A8F96631000000000000000000000000A96605ECF43E4E16E2255B0006B79A7781797B442D593AD12B04FABA1AFCDCE2384FE061BFB2C83C60DCE9E906E7DD4493E97B6300000000000000000000000000000000000000000000000000000000001E848000000000000000000000000000000000000000000000000000000000000000C0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    );
    console.log('ret:', ret);
  } catch (error) {
    console.log('error:', error);
  }
}

async function querySolanaSignatureHeigth() {
  let svmContext = await createSVMContext();
  const signature =
    '39zvQqiSRfVBsS21sQ8Hkcwwr8BaQNrMFLdFD2BWvpBQqBBsGArTZVEjuzWdCnSrasbEqWQdHtBwhpRs7kFXCYW2';
  const status = await svmContext.SVM_Connection.getSignatureStatus(signature);
  console.log(`Tx Signature Height: ${status!.value?.slot}`);
}

async function generateUpdateWithdrawalFrozenStateTx() {
  const evm = await createEVMContext();

  const contractAddress = '0x5A0702C7EbbEC83802b35DB737FCcDc5fc6c5E07';
  const functionAbi =
    'function updateWithdrawalFrozenState(bytes32 withdrawalHash, bool isFrozen) external';
  const Portal = new ethers.Contract(
    contractAddress,
    [functionAbi],
    evm.EVM_PROVIDER,
  );

  const rawTx = await Portal.populateTransaction.updateWithdrawalFrozenState(
    '0x5783689b654645b28b467e821b79f6d159056b605f538188905e6d41c4c66fba',
    false,
    {
      nonce: 3,
      gasLimit: '200000',
      gasPrice: '50000000000', //50G
    },
  );
  const signedTx = await evm.EVM_USER.signTransaction(rawTx);
  console.log('signedTx:', signedTx);
  console.log(`Soon Bridge Tool`);
}

main().catch((error) => {
  console.error(error);
});
