/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-08-05 21:04:19
 * @LastEditors: cejay
 * @LastEditTime: 2022-11-04 22:56:35
 */
import { IContract } from './icontract';

const ABI: any =
	[
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_paymasterStake",
					"type": "uint256"
				},
				{
					"internalType": "uint32",
					"name": "_unstakeDelaySec",
					"type": "uint32"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "opIndex",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "paymaster",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "reason",
					"type": "string"
				}
			],
			"name": "FailedOp",
			"type": "error"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "aggregator",
					"type": "address"
				}
			],
			"name": "SignatureValidationFailed",
			"type": "error"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "account",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "totalDeposit",
					"type": "uint256"
				}
			],
			"name": "Deposited",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "account",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "totalStaked",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "withdrawTime",
					"type": "uint256"
				}
			],
			"name": "StakeLocked",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "account",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "withdrawTime",
					"type": "uint256"
				}
			],
			"name": "StakeUnlocked",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "account",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "withdrawAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "StakeWithdrawn",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "bytes32",
					"name": "requestId",
					"type": "bytes32"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "paymaster",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "nonce",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "actualGasCost",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "actualGasPrice",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "bool",
					"name": "success",
					"type": "bool"
				}
			],
			"name": "UserOperationEvent",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "bytes32",
					"name": "requestId",
					"type": "bytes32"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "nonce",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "bytes",
					"name": "revertReason",
					"type": "bytes"
				}
			],
			"name": "UserOperationRevertReason",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "account",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "withdrawAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "Withdrawn",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "uint32",
					"name": "_unstakeDelaySec",
					"type": "uint32"
				}
			],
			"name": "addStake",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "depositTo",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "deposits",
			"outputs": [
				{
					"internalType": "uint112",
					"name": "deposit",
					"type": "uint112"
				},
				{
					"internalType": "bool",
					"name": "staked",
					"type": "bool"
				},
				{
					"internalType": "uint112",
					"name": "stake",
					"type": "uint112"
				},
				{
					"internalType": "uint32",
					"name": "unstakeDelaySec",
					"type": "uint32"
				},
				{
					"internalType": "uint64",
					"name": "withdrawTime",
					"type": "uint64"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "getDepositInfo",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint112",
							"name": "deposit",
							"type": "uint112"
						},
						{
							"internalType": "bool",
							"name": "staked",
							"type": "bool"
						},
						{
							"internalType": "uint112",
							"name": "stake",
							"type": "uint112"
						},
						{
							"internalType": "uint32",
							"name": "unstakeDelaySec",
							"type": "uint32"
						},
						{
							"internalType": "uint64",
							"name": "withdrawTime",
							"type": "uint64"
						}
					],
					"internalType": "struct IStakeManager.DepositInfo",
					"name": "info",
					"type": "tuple"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "sender",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "bytes",
							"name": "initCode",
							"type": "bytes"
						},
						{
							"internalType": "bytes",
							"name": "callData",
							"type": "bytes"
						},
						{
							"internalType": "uint256",
							"name": "callGasLimit",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "verificationGasLimit",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "preVerificationGas",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "maxFeePerGas",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "maxPriorityFeePerGas",
							"type": "uint256"
						},
						{
							"internalType": "bytes",
							"name": "paymasterAndData",
							"type": "bytes"
						},
						{
							"internalType": "bytes",
							"name": "signature",
							"type": "bytes"
						}
					],
					"internalType": "struct UserOperation",
					"name": "userOp",
					"type": "tuple"
				}
			],
			"name": "getRequestId",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes",
					"name": "initCode",
					"type": "bytes"
				}
			],
			"name": "getSenderAddress",
			"outputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "sender",
					"type": "address"
				}
			],
			"name": "getSenderStorage",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "senderStorageCells",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"components": [
								{
									"internalType": "address",
									"name": "sender",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "nonce",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "initCode",
									"type": "bytes"
								},
								{
									"internalType": "bytes",
									"name": "callData",
									"type": "bytes"
								},
								{
									"internalType": "uint256",
									"name": "callGasLimit",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "verificationGasLimit",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "preVerificationGas",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "maxFeePerGas",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "maxPriorityFeePerGas",
									"type": "uint256"
								},
								{
									"internalType": "bytes",
									"name": "paymasterAndData",
									"type": "bytes"
								},
								{
									"internalType": "bytes",
									"name": "signature",
									"type": "bytes"
								}
							],
							"internalType": "struct UserOperation[]",
							"name": "userOps",
							"type": "tuple[]"
						},
						{
							"internalType": "contract IAggregator",
							"name": "aggregator",
							"type": "address"
						},
						{
							"internalType": "bytes",
							"name": "signature",
							"type": "bytes"
						}
					],
					"internalType": "struct IEntryPoint.UserOpsPerAggregator[]",
					"name": "opsPerAggregator",
					"type": "tuple[]"
				},
				{
					"internalType": "address payable",
					"name": "beneficiary",
					"type": "address"
				}
			],
			"name": "handleAggregatedOps",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "sender",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "bytes",
							"name": "initCode",
							"type": "bytes"
						},
						{
							"internalType": "bytes",
							"name": "callData",
							"type": "bytes"
						},
						{
							"internalType": "uint256",
							"name": "callGasLimit",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "verificationGasLimit",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "preVerificationGas",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "maxFeePerGas",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "maxPriorityFeePerGas",
							"type": "uint256"
						},
						{
							"internalType": "bytes",
							"name": "paymasterAndData",
							"type": "bytes"
						},
						{
							"internalType": "bytes",
							"name": "signature",
							"type": "bytes"
						}
					],
					"internalType": "struct UserOperation[]",
					"name": "ops",
					"type": "tuple[]"
				},
				{
					"internalType": "address payable",
					"name": "beneficiary",
					"type": "address"
				}
			],
			"name": "handleOps",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes",
					"name": "callData",
					"type": "bytes"
				},
				{
					"components": [
						{
							"components": [
								{
									"internalType": "address",
									"name": "sender",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "nonce",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "callGasLimit",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "verificationGasLimit",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "preVerificationGas",
									"type": "uint256"
								},
								{
									"internalType": "address",
									"name": "paymaster",
									"type": "address"
								},
								{
									"internalType": "uint256",
									"name": "maxFeePerGas",
									"type": "uint256"
								},
								{
									"internalType": "uint256",
									"name": "maxPriorityFeePerGas",
									"type": "uint256"
								}
							],
							"internalType": "struct EntryPoint.MemoryUserOp",
							"name": "mUserOp",
							"type": "tuple"
						},
						{
							"internalType": "bytes32",
							"name": "requestId",
							"type": "bytes32"
						},
						{
							"internalType": "uint256",
							"name": "prefund",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "contextOffset",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "preOpGas",
							"type": "uint256"
						}
					],
					"internalType": "struct EntryPoint.UserOpInfo",
					"name": "opInfo",
					"type": "tuple"
				},
				{
					"internalType": "bytes",
					"name": "context",
					"type": "bytes"
				}
			],
			"name": "innerHandleOp",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "actualGasCost",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "paymasterStake",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"components": [
						{
							"internalType": "address",
							"name": "sender",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "nonce",
							"type": "uint256"
						},
						{
							"internalType": "bytes",
							"name": "initCode",
							"type": "bytes"
						},
						{
							"internalType": "bytes",
							"name": "callData",
							"type": "bytes"
						},
						{
							"internalType": "uint256",
							"name": "callGasLimit",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "verificationGasLimit",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "preVerificationGas",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "maxFeePerGas",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "maxPriorityFeePerGas",
							"type": "uint256"
						},
						{
							"internalType": "bytes",
							"name": "paymasterAndData",
							"type": "bytes"
						},
						{
							"internalType": "bytes",
							"name": "signature",
							"type": "bytes"
						}
					],
					"internalType": "struct UserOperation",
					"name": "userOp",
					"type": "tuple"
				},
				{
					"internalType": "bool",
					"name": "offChainSigCheck",
					"type": "bool"
				}
			],
			"name": "simulateValidation",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "preOpGas",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "prefund",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "actualAggregator",
					"type": "address"
				},
				{
					"internalType": "bytes",
					"name": "sigForUserOp",
					"type": "bytes"
				},
				{
					"internalType": "bytes",
					"name": "sigForAggregation",
					"type": "bytes"
				},
				{
					"internalType": "bytes",
					"name": "offChainSigInfo",
					"type": "bytes"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "unlockStake",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "unstakeDelaySec",
			"outputs": [
				{
					"internalType": "uint32",
					"name": "",
					"type": "uint32"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address payable",
					"name": "withdrawAddress",
					"type": "address"
				}
			],
			"name": "withdrawStake",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address payable",
					"name": "withdrawAddress",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "withdrawAmount",
					"type": "uint256"
				}
			],
			"name": "withdrawTo",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		}
	]
	;

const bytecode = '';
const contract: IContract = {
	ABI,
	bytecode
}

export { contract as EntryPointContract };