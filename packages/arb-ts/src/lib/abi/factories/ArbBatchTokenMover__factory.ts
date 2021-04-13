/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { ArbBatchTokenMover } from '../ArbBatchTokenMover'

export class ArbBatchTokenMover__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: ArbBatchTokenMoverLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      ArbBatchTokenMover__factory.linkBytecode(linkLibraryAddresses),
      signer
    )
  }

  static linkBytecode(
    linkLibraryAddresses: ArbBatchTokenMoverLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode

    linkedBytecode = linkedBytecode.replace(
      new RegExp('__\\$6bf011c07207fd4b4f621f21ef466e3cdb\\$__', 'g'),
      linkLibraryAddresses['__$6bf011c07207fd4b4f621f21ef466e3cdb$__']
        .replace(/^0x/, '')
        .toLowerCase()
    )

    return linkedBytecode
  }

  deploy(overrides?: Overrides): Promise<ArbBatchTokenMover> {
    return super.deploy(overrides || {}) as Promise<ArbBatchTokenMover>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): ArbBatchTokenMover {
    return super.attach(address) as ArbBatchTokenMover
  }
  connect(signer: Signer): ArbBatchTokenMover__factory {
    return super.connect(signer) as ArbBatchTokenMover__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbBatchTokenMover {
    return new Contract(address, _abi, signerOrProvider) as ArbBatchTokenMover
  }
}

const _abi = [
  {
    inputs: [],
    name: 'exitToL1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawInBatch',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5061059c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063733490d01461003b578063d5d683a414610045575b600080fd5b610043610062565b005b6100436004803603602081101561005b57600080fd5b50356103a7565b6005544310156100a4576040805162461bcd60e51b81526020600482015260086024820152672a27a7afa9a7a7a760c11b604482015290519081900360640190fd5b60646001600160a01b031663928c169a30600073__$6bf011c07207fd4b4f621f21ef466e3cdb$__63c522e7bc90916040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561010757600080fd5b505af415801561011b573d6000803e3d6000fd5b505050506040513d602081101561013157600080fd5b50516006546040805163c2eeeebd60e01b815290516001600160a01b039092169163c2eeeebd91600480820192602092909190829003018186803b15801561017857600080fd5b505afa15801561018c573d6000803e3d6000fd5b505050506040513d60208110156101a257600080fd5b5051604080516024808201949094526001600160a01b03928316604480830191909152825180830382018152606492830184526020810180516001600160e01b0316630c9fb1e560e11b178152845160e08a901b6001600160e01b03191681529588166004870190815296860194855281519286019290925280519095949092019180838360005b8381101561024257818101518382015260200161022a565b50505050905090810190601f16801561026f5780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b15801561028f57600080fd5b505af11580156102a3573d6000803e3d6000fd5b505050506040513d60208110156102b957600080fd5b5050600654604080516370a0823160e01b8152306004820181905291516001600160a01b039093169263f3fef3a3929184916370a0823191602480820192602092909190829003018186803b15801561031157600080fd5b505afa158015610325573d6000803e3d6000fd5b505050506040513d602081101561033b57600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b039093166004840152602483019190915251604480830192600092919082900301818387803b15801561038b57600080fd5b505af115801561039f573d6000803e3d6000fd5b503392505050ff5b600654604080516323b872dd60e01b81523360048201523060248201526044810184905290516001600160a01b03909216916323b872dd916064808201926020929091908290030181600087803b15801561040157600080fd5b505af1158015610415573d6000803e3d6000fd5b505050506040513d602081101561042b57600080fd5b5051610470576040805162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b604482015290519081900360640190fd5b604080513360208083019190915281830184905282518083038401815260608301808552637319a76f60e11b905260006064840181815260848501958652825160a4860152825173__$6bf011c07207fd4b4f621f21ef466e3cdb$__9663e6334ede9693959293909260c49091019190850190808383895b838110156105005781810151838201526020016104e8565b50505050905090810190601f16801561052d5780820380516001836020036101000a031916815260200191505b50935050505060006040518083038186803b15801561054b57600080fd5b505af415801561055f573d6000803e3d6000fd5b505050505056fea264697066735822122010e5183121bc37fc8d599924ff1e48f561dd465ba0bb65b0b493a6c7b2e611f364736f6c634300060b0033'

export interface ArbBatchTokenMoverLibraryAddresses {
  ['__$6bf011c07207fd4b4f621f21ef466e3cdb$__']: string
}
