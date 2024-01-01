import Web3 from "web3";

/* eslint-disable no-use-before-define */
export const bookroom = async (priceString) => {
    const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

// Địa chỉ smart contract đã triển khai
// 0xD74497B3a5b6e24B978c861C821B2caBF780Aa15
	const contractAddress = '0x227307019a284e68a1C69C453DA6c006EdA7589e';

// ABI của smart contract (thêm phần này)
	const contractAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowance",
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
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
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
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
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
		"inputs": [],
		"name": "decimals",
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
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
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
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// Tạo một đối tượng smart contract
const myContract = new web3.eth.Contract(contractAbi, contractAddress);
// Địa chỉ Ethereum của người chủ quản lý
const recipientAddress = '0x45e16445b23680E3885a3AD7aa5798Bdc03ab997';

//----------------------------------------------------------------------------------------------------------
	const amountToTransfer = parseFloat(priceString.replace(/[^\d.-]/g, ''))*1000000; // 2000 wei (BSC uses 18 decimals)
  
	try {
	  if (window.ethereum) {
		console.log('Detected');
		try {
		  // Request user accounts from MetaMask
		  const accounts = await window.ethereum.request({
			method: 'eth_requestAccounts',
		  });
  
		  // Ensure that at least one account is available
		  if (accounts.length === 0) {
			console.error('No account found');
			return;
		  }
  
		  // Get the user's Ethereum address
		  const userAddress = accounts[0];
		  const tokenBalance = await myContract.methods.balanceOf(userAddress).call();
		  console.log("Token balance:", tokenBalance);
		  console.log(recipientAddress);
  
		  // Get the BSC network ID
		  const networkId = await window.ethereum.request({
			method: 'net_version',
		  });
  
		  // Binance Smart Chain mainnet and testnet IDs
		  const bscMainnetId = '56';
		  const bscTestnetId = '97';
  
		  // Check if the network is Binance Smart Chain
		  if (networkId !== bscMainnetId && networkId !== bscTestnetId) {
			console.error('Please switch to Binance Smart Chain network TestNet in MetaMask');
			return;
		  }
		  //==================
		  // Automatically add the token to MetaMask
		  const tokenInfo = {
			type: 'ERC20',
			options: {
			  address: contractAddress,
			  symbol: 'RST', // Replace with your token symbol
			  decimals: 18, // Replace with your token decimals
			  image: 'https://dejpknyizje2n.cloudfront.net/marketplace/products/pink-human-brain-8-bit-pixel-art-sticker-35699-99cf1d.png', // Replace with your token image URL
			},
		  };
  
		  // Use the wallet_watchAsset RPC method to prompt the user to add the token
		  await window.ethereum.request({
			method: 'wallet_watchAsset',
			params: {
			  type: 'ERC20',
			  options: tokenInfo.options,
			},
		  });
		  //==================
		  // Starting transfer
		  if(tokenBalance>=amountToTransfer){
			// Encode the transfer function for your custom token
			const data = myContract.methods.transfer(recipientAddress, amountToTransfer).encodeABI();
  
			// Perform the token transfer using MetaMask
			const transaction = await window.ethereum.request({
			  method: 'eth_sendTransaction',
			  params: [
				{
				  from: userAddress,
				  to: contractAddress, // Use your token contract address
				  value: '0', // Set to 0 for token transfer
				  data: data,
				},
			  ],
			});
			console.log('Transaction hash:', transaction);

		  } else{
			console.log("Your waller don't have enough RST token")
		  }
		  
  
		} catch (error) {
		  console.error(error);
		}
	  }
	} catch (error) {
	  console.error(error);
	}
}