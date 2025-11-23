export const coreAddress = "0x0000000000000000000000000000000000000000";
export const coreAbi = 
[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_entropy",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "BettingPeriodClosed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InsufficientBetAmount",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "RewardTokenNotWhitelisted",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "poolId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "BetPlaced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "RewardTokenWhitelisted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "poolId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "attacker",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "victim",
          "type": "address"
        }
      ],
      "name": "VAPoolCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "sequence",
          "type": "uint64"
        },
        {
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "randomNumber",
          "type": "bytes32"
        }
      ],
      "name": "_entropyCallback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IBaseAdapter",
          "name": "attacker",
          "type": "address"
        },
        {
          "internalType": "contract IBaseAdapter",
          "name": "victim",
          "type": "address"
        },
        {
          "internalType": "contract IERC20[]",
          "name": "rewardTokens",
          "type": "address[]"
        },
        {
          "internalType": "uint256",
          "name": "penalizationCoefficient",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "auctionDuration",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidityMigrationDelay",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lockDuration",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "snapshotLookupTimestamp",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "enum IBleethMeCore.BetSide",
              "name": "side",
              "type": "uint8"
            },
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct IBleethMeCore.Bet",
          "name": "initialBet",
          "type": "tuple"
        }
      ],
      "name": "createVaPool",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "poolId",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "entropy",
      "outputs": [
        {
          "internalType": "contract IEntropyV2",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "vaPoolId",
          "type": "uint256"
        }
      ],
      "name": "finalizeBetting",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "vaPoolId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "better",
          "type": "address"
        }
      ],
      "name": "getBet",
      "outputs": [
        {
          "components": [
            {
              "internalType": "enum IBleethMeCore.BetSide",
              "name": "side",
              "type": "uint8"
            },
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct IBleethMeCore.Bet",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "vaPoolId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "enum IBleethMeCore.BetSide",
              "name": "side",
              "type": "uint8"
            },
            {
              "internalType": "contract IERC20",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct IBleethMeCore.Bet",
          "name": "bet",
          "type": "tuple"
        }
      ],
      "name": "placeBet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "sequenceNumber",
          "type": "uint64"
        }
      ],
      "name": "randomnessMapping",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "vaPoolId",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "setWhitelistRewardToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vaPoolCount",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "vaPools",
      "outputs": [
        {
          "internalType": "contract IBaseAdapter",
          "name": "attacker",
          "type": "address"
        },
        {
          "internalType": "contract IBaseAdapter",
          "name": "victim",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "penalizationCoefficient",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "auctionEndTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "liquidityMigrationTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lockTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "snapshotLookupTimestamp",
          "type": "uint256"
        },
        {
          "internalType": "enum IBleethMeCore.VAPoolState",
          "name": "state",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IERC20",
          "name": "",
          "type": "address"
        }
      ],
      "name": "whitelistedRewardTokens",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];