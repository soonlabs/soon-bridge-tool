import minimist from 'minimist';
import { isValidSolanaPublicKey, parseWithdrawTxInfo } from './helper/tool';
import { createSVMContext } from './helper/svm_context';
import { PublicKey } from '@solana/web3.js';
import { createEVMContext } from './helper/evm_context';
import {
  L2OutputOracle__factory,
  OptimismPortal__factory,
} from '../typechain-types';
import axios from 'axios';
import { ethers } from 'ethers';
import bs58 from 'bs58';

const options = {
  string: ['withdrawId', 'withdrawHeight'],
};

async function main() {
    let response0 = {
        jsonrpc: '2.0',
        result: {
          blockHash: '0xf081aa64a6bff952f58cbc28df4e22bf644c4b8bc00140e872c75d06aa311e88',
          outputRoot: '0x2565651ec62acf1de9b14730474f1ec902eaa133e27577db946f65e131f5fe90',
          stateRoot: '0x23386c82f6e2d73d9a9f38e6a0c8447913d5d91508ba282add8b19a15bf78016',
          version: '0',
          withdrawalRoot: '0x1d9a622503154e82235f13df67592b7b09984aa586d293ce0091a0cff6d0e55b'
        },
        id: 1
      };

  let rootCal = ethers.utils.solidityPack(["bytes32","bytes32","bytes32","bytes32"],[
    "0x0000000000000000000000000000000000000000000000000000000000000000",
    "0x23386c82f6e2d73d9a9f38e6a0c8447913d5d91508ba282add8b19a15bf78016",
    "0x1d9a622503154e82235f13df67592b7b09984aa586d293ce0091a0cff6d0e55b",
    "0xf081aa64a6bff952f58cbc28df4e22bf644c4b8bc00140e872c75d06aa311e88",
  ]);

  let cal2 = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["bytes32","bytes32","bytes32","bytes32"],[
    "0x0000000000000000000000000000000000000000000000000000000000000000",
    "0x23386c82f6e2d73d9a9f38e6a0c8447913d5d91508ba282add8b19a15bf78016",
    "0x1d9a622503154e82235f13df67592b7b09984aa586d293ce0091a0cff6d0e55b",
    "0xf081aa64a6bff952f58cbc28df4e22bf644c4b8bc00140e872c75d06aa311e88",
  ]));

  let root256 = ethers.utils.keccak256(rootCal);
  console.log(`resp root: ${response0.result.outputRoot}`);
  console.log(`root--cal: ${rootCal}`);
  console.log(`root--256: ${root256}`);
  console.log(`root256/2: ${cal2}`);
}

main().catch((error) => {
  console.error(error);
});
