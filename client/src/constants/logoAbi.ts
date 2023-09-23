export const logoAbi = [
  {
    name: "Uint256",
    size: 2,
    type: "struct",
    members: [
      {
        name: "low",
        type: "felt",
        offset: 0,
      },
      {
        name: "high",
        type: "felt",
        offset: 1,
      },
    ],
  },
  {
    name: "AlmanacMarketDay",
    size: 2,
    type: "struct",
    members: [
      {
        name: "market",
        type: "felt",
        offset: 0,
      },
      {
        name: "day",
        type: "felt",
        offset: 1,
      },
    ],
  },
  {
    data: [
      {
        name: "from_",
        type: "felt",
      },
      {
        name: "to",
        type: "felt",
      },
      {
        name: "tokenId",
        type: "Uint256",
      },
    ],
    keys: [],
    name: "Transfer",
    type: "event",
  },
  {
    data: [
      {
        name: "owner",
        type: "felt",
      },
      {
        name: "approved",
        type: "felt",
      },
      {
        name: "tokenId",
        type: "Uint256",
      },
    ],
    keys: [],
    name: "Approval",
    type: "event",
  },
  {
    data: [
      {
        name: "owner",
        type: "felt",
      },
      {
        name: "operator",
        type: "felt",
      },
      {
        name: "approved",
        type: "felt",
      },
    ],
    keys: [],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    data: [
      {
        name: "previousOwner",
        type: "felt",
      },
      {
        name: "newOwner",
        type: "felt",
      },
    ],
    keys: [],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    data: [
      {
        name: "id",
        type: "Uint256",
      },
      {
        name: "almanac",
        type: "AlmanacMarketDay",
      },
    ],
    keys: [],
    name: "NewAlmanac",
    type: "event",
  },
  {
    name: "constructor",
    type: "constructor",
    inputs: [
      {
        name: "owner",
        type: "felt",
      },
      {
        name: "ether",
        type: "felt",
      },
      {
        name: "vrfProvider",
        type: "felt",
      },
    ],
    outputs: [],
  },
  {
    name: "supportsInterface",
    type: "function",
    inputs: [
      {
        name: "interfaceId",
        type: "felt",
      },
    ],
    outputs: [
      {
        name: "success",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "balanceOf",
    type: "function",
    inputs: [
      {
        name: "owner",
        type: "felt",
      },
    ],
    outputs: [
      {
        name: "balance",
        type: "Uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "ownerOf",
    type: "function",
    inputs: [
      {
        name: "tokenId",
        type: "Uint256",
      },
    ],
    outputs: [
      {
        name: "owner",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "safeTransferFrom",
    type: "function",
    inputs: [
      {
        name: "from_",
        type: "felt",
      },
      {
        name: "to",
        type: "felt",
      },
      {
        name: "tokenId",
        type: "Uint256",
      },
      {
        name: "data_len",
        type: "felt",
      },
      {
        name: "data",
        type: "felt*",
      },
    ],
    outputs: [],
  },
  {
    name: "transferFrom",
    type: "function",
    inputs: [
      {
        name: "from_",
        type: "felt",
      },
      {
        name: "to",
        type: "felt",
      },
      {
        name: "tokenId",
        type: "Uint256",
      },
    ],
    outputs: [],
  },
  {
    name: "approve",
    type: "function",
    inputs: [
      {
        name: "to",
        type: "felt",
      },
      {
        name: "tokenId",
        type: "Uint256",
      },
    ],
    outputs: [],
  },
  {
    name: "setApprovalForAll",
    type: "function",
    inputs: [
      {
        name: "operator",
        type: "felt",
      },
      {
        name: "approved",
        type: "felt",
      },
    ],
    outputs: [],
  },
  {
    name: "getApproved",
    type: "function",
    inputs: [
      {
        name: "tokenId",
        type: "Uint256",
      },
    ],
    outputs: [
      {
        name: "approved",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "isApprovedForAll",
    type: "function",
    inputs: [
      {
        name: "owner",
        type: "felt",
      },
      {
        name: "operator",
        type: "felt",
      },
    ],
    outputs: [
      {
        name: "isApproved",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "symbol",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "symbol",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "name",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "name",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "tokenURI",
    type: "function",
    inputs: [
      {
        name: "almanacId",
        type: "Uint256",
      },
    ],
    outputs: [
      {
        name: "result",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "setBaseURI",
    type: "function",
    inputs: [
      {
        name: "newBaseUri",
        type: "felt",
      },
    ],
    outputs: [],
  },
  {
    name: "totalSupply",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "totalSupply",
        type: "Uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "tokenOfOwnerByIndex",
    type: "function",
    inputs: [
      {
        name: "owner",
        type: "felt",
      },
      {
        name: "index",
        type: "Uint256",
      },
    ],
    outputs: [
      {
        name: "tokenId",
        type: "Uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "tokenByIndex",
    type: "function",
    inputs: [
      {
        name: "index",
        type: "Uint256",
      },
    ],
    outputs: [
      {
        name: "tokenId",
        type: "Uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "renounceOwnership",
    type: "function",
    inputs: [],
    outputs: [],
  },
  {
    name: "transferOwnership",
    type: "function",
    inputs: [
      {
        name: "newOwner",
        type: "felt",
      },
    ],
    outputs: [],
  },
  {
    name: "owner",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "owner",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "isOwner",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "isOwner",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "publicMint",
    type: "function",
    inputs: [
      {
        name: "almanac",
        type: "AlmanacMarketDay",
      },
      {
        name: "recipient",
        type: "felt",
      },
    ],
    outputs: [],
  },
  {
    name: "setupMilestone",
    type: "function",
    inputs: [
      {
        name: "milestone",
        type: "AlmanacMarketDay",
      },
    ],
    outputs: [],
  },
  {
    name: "startShuffle",
    type: "function",
    inputs: [],
    outputs: [],
  },
  {
    name: "finishShuffle",
    type: "function",
    inputs: [],
    outputs: [],
  },
  {
    name: "getShufflingId",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "milestoneId",
        type: "Uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "getShufflingMilestone",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "milestone",
        type: "AlmanacMarketDay",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "getVrfProvider",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "vrfProvider",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "setVrfProvider",
    type: "function",
    inputs: [
      {
        name: "vrfProvider",
        type: "felt",
      },
    ],
    outputs: [],
  },
  {
    name: "getAlmanacInfo",
    type: "function",
    inputs: [
      {
        name: "almanacId",
        type: "Uint256",
      },
    ],
    outputs: [
      {
        name: "almanac",
        type: "AlmanacMarketDay",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "getAlmanac",
    type: "function",
    inputs: [
      {
        name: "almanac",
        type: "AlmanacMarketDay",
      },
    ],
    outputs: [
      {
        name: "almanacId",
        type: "Uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "getPublicMinted",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "publicMinted",
        type: "Uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "getMilestonesMinted",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "milestonesMinted",
        type: "Uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "getMaxMarket",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "maxMarket",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "setMaxMarket",
    type: "function",
    inputs: [
      {
        name: "marketId",
        type: "felt",
      },
    ],
    outputs: [],
  },
  {
    name: "getMinMarketDate",
    type: "function",
    inputs: [
      {
        name: "marketId",
        type: "felt",
      },
    ],
    outputs: [
      {
        name: "minMarket",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "setMinMarketDate",
    type: "function",
    inputs: [
      {
        name: "marketId",
        type: "felt",
      },
      {
        name: "minDate",
        type: "felt",
      },
    ],
    outputs: [],
  },
  {
    name: "isEnabled",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "enabled",
        type: "felt",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "setEnabled",
    type: "function",
    inputs: [
      {
        name: "enabled",
        type: "felt",
      },
    ],
    outputs: [],
  },
  {
    name: "getPrice",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "price",
        type: "Uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "setPrice",
    type: "function",
    inputs: [
      {
        name: "newPrice",
        type: "Uint256",
      },
    ],
    outputs: [],
  },
  {
    name: "setEther",
    type: "function",
    inputs: [
      {
        name: "newEther",
        type: "felt",
      },
    ],
    outputs: [],
  },
  {
    name: "withdraw",
    type: "function",
    inputs: [],
    outputs: [],
  },
];
