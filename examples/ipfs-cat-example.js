const ipfs = require('ipfs-js');
const bugBountyJSON = {
  "@context": "http://weifund.io",
  "@type": "CampaignContract",
  "version": "0.1.0",
  "address": "0xffb9adf430ed7a2d535eb3bd40981f1d8367bb8c",
  "compiler": "solc",
  "compilerFlags": "{'optimize': 1}",
  "compilerVersion": "0.3.1-1",
  "bytecode": "6060604052606060405190810160405280602d81526020017f636f6e747269627574654d736756616c756528293a2875696e7432353620636f81526020017f6e747269627574696f6e4944290000000000000000000000000000000000000081526020015060096000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100b257805160ff19168380011785556100e3565b828001600101855582156100e3579182015b828111156100e25782518260005055916020019190600101906100c4565b5b50905061010e91906100f0565b8082111561010a57600081815060009055506001016100f0565b5090565b5050606060405190810160405280602d81526020017f7061796f7574546f42656e656669636961727928293a2875696e74323536206181526020017f6d6f756e74436c61696d65642900000000000000000000000000000000000000815260200150600a6000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101be57805160ff19168380011785556101ef565b828001600101855582156101ef579182015b828111156101ee5782518260005055916020019190600101906101d0565b5b50905061021a91906101fc565b8082111561021657600081815060009055506001016101fc565b5090565b5050604051611094380380611094833981016040528080518201919060200180519060200190919080519060200190919080519060200190919050505b5b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b8360086000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102d357805160ff1916838001178555610304565b82800160010185558215610304579182015b828111156103035782518260005055916020019190600101906102e5565b5b50905061032f9190610311565b8082111561032b5760008181506000905550600101610311565b5090565b5050826004600050819055508160026000508190555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555033600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50505050610ce6806103ae6000396000f3606060405236156100ed576000357c01000000000000000000000000000000000000000000000000000000009004806306fdde03146100fa5780631cee07001461017557806337c08923146101c557806338af3eed146101e857806354fd4d50146102215780637a3a0e841461029c5780637b3e5e7b146102bf5780638da5cb5b146102e25780638e3390b41461031b578063a4d69fd314610396578063a63c7ba214610411578063ac5db33214610434578063c040e6b814610469578063d52230c41461048c578063db0251e9146104b8578063e184c9be146104db578063fb687c24146104fe576100ed565b6100f85b610002565b565b005b6101076004805050610579565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101675780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018b600480803590602001909190505061061a565b604051808473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390f35b6101d2600480505061067a565b6040518082815260200191505060405180910390f35b6101f5600480505061068f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61022e60048050506106b5565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561028e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102a960048050506106cd565b6040518082815260200191505060405180910390f35b6102cc60048050506106d6565b6040518082815260200191505060405180910390f35b6102ef60048050506106df565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103286004805050610705565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103885780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103a360048050506107a6565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156104035780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61041e6004805050610847565b6040518082815260200191505060405180910390f35b61045360048080359060200190919080359060200190919050506109b2565b6040518082815260200191505060405180910390f35b61047660048050506109e7565b6040518082815260200191505060405180910390f35b6104a260048080359060200190919050506109f0565b6040518082815260200191505060405180910390f35b6104c56004805050610a31565b6040518082815260200191505060405180910390f35b6104e86004805050610cc5565b6040518082815260200191505060405180910390f35b61050b6004805050610cce565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561056b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60086000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106125780601f106105e757610100808354040283529160200191610612565b820191906000526020600020905b8154815290600101906020018083116105f557829003601f168201915b505050505081565b600660005081815481101561000257906000526020600020906003020160005b915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160005054908060020160005054905083565b6000600660005080549050905061068c565b90565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60206040519081016040528060008152602001505b90565b60026000505481565b60036000505481565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561079e5780601f106107735761010080835404028352916020019161079e565b820191906000526020600020905b81548152906001019060200180831161078157829003601f168201915b505050505081565b600a6000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b505050505081565b600060026004600050544210156108685760006001600050819055506108a8565b42600460005054118015610886575060026000505460036000505410155b1561089b5760026001600050819055506108a7565b60016001600050819055505b5b806001600050541415156108bb57610002565b3073ffffffffffffffffffffffffffffffffffffffff163191508150600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600083604051809050600060405180830381858888f19350505050151561093657610002565b7f22c1e24047f1e0c1af6f78290547f44645cdd2ad4d06b09115a162e41460c4d5600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1505b90565b600760005060205281600052604060002060005081815481101561000257906000526020600020900160005b91509150505481565b60016000505481565b6000600760005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050805490509050610a2c565b919050565b60006000600460005054421015610a52576000600160005081905550610a92565b42600460005054118015610a70575060026000505460036000505410155b15610a85576002600160005081905550610a91565b60016001600050819055505b5b80600160005054141515610aa557610002565b600660005080548091906001019090815481835581811511610b3557600302816003028360005260206000209182019101610b349190610ae0565b80821115610b305760006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160005060009055600282016000506000905550600301610ae0565b5090565b5b5050509150815060606040519081016040528033815260200134815260200142815260200150600660005083815481101561000257906000526020600020906003020160005b5060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506020820151816001016000505560408201518160020160005055905050600760005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508054806001018281815481835581811511610c4657818360005260206000209182019101610c459190610c27565b80821115610c415760008181506000905550600101610c27565b5090565b5b5050509190906000526020600020900160005b84909190915055503460036000828282505401925050819055507f97a3367c201ad38e0d37322fd0ffa1b93457541ae8baf20eb9aa50bb83fcabef33604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505b90565b60046000505481565b60206040519081016040528060008152602001505b9056",
  "source": "https://github.com/weifund/weifund-contracts/blob/master/contracts/examples/StandardCampaign.sol",
  "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "contributions",
        "outputs": [
          {
            "name": "sender",
            "type": "address"
          },
          {
            "name": "value",
            "type": "uint256"
          },
          {
            "name": "created",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalContributions",
        "outputs": [
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "beneficiary",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "version",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "fundingGoal",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "amountRaised",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "contributeMethodABI",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "payoutMethodABI",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "payoutToBeneficiary",
        "outputs": [
          {
            "name": "amountClaimed",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "contributionsBySender",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "stage",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_sender",
            "type": "address"
          }
        ],
        "name": "totalContributionsBySender",
        "outputs": [
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "contributeMsgValue",
        "outputs": [
          {
            "name": "contributionID",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "expiry",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "refundMethodABI",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_expiry",
            "type": "uint256"
          },
          {
            "name": "_fundingGoal",
            "type": "uint256"
          },
          {
            "name": "_beneficiary",
            "type": "address"
          }
        ],
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "_contributor",
            "type": "address"
          }
        ],
        "name": "ContributionMade",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "_payoutDestination",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_payoutAmount",
            "type": "uint256"
          }
        ],
        "name": "RefundPayoutClaimed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "_payoutDestination",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_payoutAmount",
            "type": "uint256"
          }
        ],
        "name": "BeneficiaryPayoutClaimed",
        "type": "event"
      }
    ],
  "transactionHash": "",
  "url": "http://weifund.io/",
  "category": "Technology",
  "image": "https://github.com/weifund/weifund-contracts/blob/master/weifund-bug-bounty.png?raw=true",
  "mainEntity": "https://github.com/weifund/weifund-contracts/blob/master/weifund-bug-bounty.png?raw=true",
  "i18n": {
    "en": {
      "name": "WeiFund Contract Bug Bounty",
      "alternateName": "Contract Bug Bounty",
      "description": "We encourage the community to help us identity vulnerabilities in our system.",
      "disambiguatedDescription": "An initial bug bounty for WeiFund's Standard Campaign contracts.",
      "about": `A key ingredient of smart contract security is bug bounties. This campaign defines an initial bug bounty for WeiFund's Standard Campaign contracts. Please read more below.
<br />
<br />We encourage the community to help us identity vulnerabilities in our system, and we look forward to paying out rewards as we continue to solidify our platform and our campaign templates.
<br />
<br />To read more about WeiFund's approach to contract readiness, please visit:
<br />https://media.consensys.net/2016/09/15/shaping-crowdfund-rollout-readiness-at-weifund/
<br />
<br />------------------------------------
<br />
<br />## Reward
<br />
<br />$200 up to $1500 USD worth of ether for bugs in our Standard Campaign template and WeiFund registry contracts. This is not a bug bounty for bugs found in the solidity or javascript unit tests or architecture. This is just a bug bounty for our WeiFund solidity contracts.
<br />
<br />## Our Code
<br />
<br />Contracts are available at:
<br />
<br />https://github.com/weifund/weifund-contracts/tree/master/contracts
<br />
<br />To read more about our system, please visit our documentation at:
<br />
<br />http://weifund.readthedocs.io
<br />
<br />Contract Address:
<br />0xffb9adf430ed7a2d535eb3bd40981f1d8367bb8c
<br />
<br />Campaign Registry:
<br />0x486889a9a1940bb22fc387cce57c5e62981d7da3
<br />
<br />Campaign Data Registry
<br />0x9eb0527681acc6674ee660d7cb1fa1f5e66e334a
<br />
<br />## Payout Policy
<br />
<br />- Payout will be in Ether
<br />
<br />- If you find a bug, report it to mail@weifund.io with the email title formatted as follows 'WEIFUND BUG REPORT SUBMISSION [Bug Details]'
<br />
<br />- Severe Bugs will Receive $1,500 USD worth of ether (at spot price of payout)
<br />
<br />- The WeiFund team will determine if the bug reported is a bug and the amount to be paid out
<br />
<br />- In the email to WeiFund, please specify your Ethereum address, name, email, company and any other details
<br />
<br />- The WeiFund team will determine the final payout of the bounty rewards based on bug severity`
    }
  },
  "mailChimp": {
    "forms": [{
      "@context": "http://weifund.io",
      "@type": "subscribe",
      "action": "//weifund.us10.list-manage.com/subscribe/post?u=5fd10dccde0a9e8f200ae4e44&amp;id=6c94b8c26f",
      "fields": {
        "email": 1
      }
    }]
  },
  "relatedContracts": []
};

const parallelsJSON = {
  "@context": "http://weifund.io",
  "@type": "CampaignContract",
  "version": "0.1.0",
  "address": "",
  "compiler": "solc",
  "compilerFlags": "{'optimize': 1}",
  "compilerVersion": "0.3.1-1",
  "bytecode": "6060604052606060405190810160405280602d81526020017f636f6e747269627574654d736756616c756528293a2875696e7432353620636f81526020017f6e747269627574696f6e4944290000000000000000000000000000000000000081526020015060096000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100b257805160ff19168380011785556100e3565b828001600101855582156100e3579182015b828111156100e25782518260005055916020019190600101906100c4565b5b50905061010e91906100f0565b8082111561010a57600081815060009055506001016100f0565b5090565b5050606060405190810160405280602d81526020017f7061796f7574546f42656e656669636961727928293a2875696e74323536206181526020017f6d6f756e74436c61696d65642900000000000000000000000000000000000000815260200150600a6000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101be57805160ff19168380011785556101ef565b828001600101855582156101ef579182015b828111156101ee5782518260005055916020019190600101906101d0565b5b50905061021a91906101fc565b8082111561021657600081815060009055506001016101fc565b5090565b5050604051611094380380611094833981016040528080518201919060200180519060200190919080519060200190919080519060200190919050505b5b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b8360086000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106102d357805160ff1916838001178555610304565b82800160010185558215610304579182015b828111156103035782518260005055916020019190600101906102e5565b5b50905061032f9190610311565b8082111561032b5760008181506000905550600101610311565b5090565b5050826004600050819055508160026000508190555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555033600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50505050610ce6806103ae6000396000f3606060405236156100ed576000357c01000000000000000000000000000000000000000000000000000000009004806306fdde03146100fa5780631cee07001461017557806337c08923146101c557806338af3eed146101e857806354fd4d50146102215780637a3a0e841461029c5780637b3e5e7b146102bf5780638da5cb5b146102e25780638e3390b41461031b578063a4d69fd314610396578063a63c7ba214610411578063ac5db33214610434578063c040e6b814610469578063d52230c41461048c578063db0251e9146104b8578063e184c9be146104db578063fb687c24146104fe576100ed565b6100f85b610002565b565b005b6101076004805050610579565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101675780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61018b600480803590602001909190505061061a565b604051808473ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828152602001935050505060405180910390f35b6101d2600480505061067a565b6040518082815260200191505060405180910390f35b6101f5600480505061068f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61022e60048050506106b5565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561028e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102a960048050506106cd565b6040518082815260200191505060405180910390f35b6102cc60048050506106d6565b6040518082815260200191505060405180910390f35b6102ef60048050506106df565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103286004805050610705565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103885780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103a360048050506107a6565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156104035780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61041e6004805050610847565b6040518082815260200191505060405180910390f35b61045360048080359060200190919080359060200190919050506109b2565b6040518082815260200191505060405180910390f35b61047660048050506109e7565b6040518082815260200191505060405180910390f35b6104a260048080359060200190919050506109f0565b6040518082815260200191505060405180910390f35b6104c56004805050610a31565b6040518082815260200191505060405180910390f35b6104e86004805050610cc5565b6040518082815260200191505060405180910390f35b61050b6004805050610cce565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561056b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60086000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106125780601f106105e757610100808354040283529160200191610612565b820191906000526020600020905b8154815290600101906020018083116105f557829003601f168201915b505050505081565b600660005081815481101561000257906000526020600020906003020160005b915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010160005054908060020160005054905083565b6000600660005080549050905061068c565b90565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60206040519081016040528060008152602001505b90565b60026000505481565b60036000505481565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60096000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561079e5780601f106107735761010080835404028352916020019161079e565b820191906000526020600020905b81548152906001019060200180831161078157829003601f168201915b505050505081565b600a6000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561083f5780601f106108145761010080835404028352916020019161083f565b820191906000526020600020905b81548152906001019060200180831161082257829003601f168201915b505050505081565b600060026004600050544210156108685760006001600050819055506108a8565b42600460005054118015610886575060026000505460036000505410155b1561089b5760026001600050819055506108a7565b60016001600050819055505b5b806001600050541415156108bb57610002565b3073ffffffffffffffffffffffffffffffffffffffff163191508150600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600083604051809050600060405180830381858888f19350505050151561093657610002565b7f22c1e24047f1e0c1af6f78290547f44645cdd2ad4d06b09115a162e41460c4d5600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1505b90565b600760005060205281600052604060002060005081815481101561000257906000526020600020900160005b91509150505481565b60016000505481565b6000600760005060008373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050805490509050610a2c565b919050565b60006000600460005054421015610a52576000600160005081905550610a92565b42600460005054118015610a70575060026000505460036000505410155b15610a85576002600160005081905550610a91565b60016001600050819055505b5b80600160005054141515610aa557610002565b600660005080548091906001019090815481835581811511610b3557600302816003028360005260206000209182019101610b349190610ae0565b80821115610b305760006000820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160005060009055600282016000506000905550600301610ae0565b5090565b5b5050509150815060606040519081016040528033815260200134815260200142815260200150600660005083815481101561000257906000526020600020906003020160005b5060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506020820151816001016000505560408201518160020160005055905050600760005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000508054806001018281815481835581811511610c4657818360005260206000209182019101610c459190610c27565b80821115610c415760008181506000905550600101610c27565b5090565b5b5050509190906000526020600020900160005b84909190915055503460036000828282505401925050819055507f97a3367c201ad38e0d37322fd0ffa1b93457541ae8baf20eb9aa50bb83fcabef33604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505b90565b60046000505481565b60206040519081016040528060008152602001505b9056",
  "source": "https://github.com/weifund/weifund-contracts/blob/master/contracts/examples/StandardCampaign.sol",
  "abi": [
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "contributions",
        "outputs": [
          {
            "name": "sender",
            "type": "address"
          },
          {
            "name": "value",
            "type": "uint256"
          },
          {
            "name": "created",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalContributions",
        "outputs": [
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "beneficiary",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "version",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "fundingGoal",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "amountRaised",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "contributeMethodABI",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "payoutMethodABI",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "payoutToBeneficiary",
        "outputs": [
          {
            "name": "amountClaimed",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "contributionsBySender",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "stage",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_sender",
            "type": "address"
          }
        ],
        "name": "totalContributionsBySender",
        "outputs": [
          {
            "name": "amount",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "contributeMsgValue",
        "outputs": [
          {
            "name": "contributionID",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "expiry",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "refundMethodABI",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "_name",
            "type": "string"
          },
          {
            "name": "_expiry",
            "type": "uint256"
          },
          {
            "name": "_fundingGoal",
            "type": "uint256"
          },
          {
            "name": "_beneficiary",
            "type": "address"
          }
        ],
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "_contributor",
            "type": "address"
          }
        ],
        "name": "ContributionMade",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "_payoutDestination",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_payoutAmount",
            "type": "uint256"
          }
        ],
        "name": "RefundPayoutClaimed",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "_payoutDestination",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "_payoutAmount",
            "type": "uint256"
          }
        ],
        "name": "BeneficiaryPayoutClaimed",
        "type": "event"
      }
    ],
  "transactionHash": "",
  "url": "http://iloveparallels.com",
  "category": "Music",
  "image": "http://silentshout.ca/wp-content/uploads/2014/04/Parallels_5_small.jpg",
  "mainEntity": "https://www.youtube.com/watch?v=VRD_F3uwyNM",
  "i18n": {
    "en": {
      "name": "",
      "alternateName": "Parallels 'Metropolis' Album Fundraise",
      "description": "Founder Nick Dodson band Parallels is hypothetically raising money for their next album on WeiFund",
      "disambiguatedDescription": "Parallels is hypothetically raising money for their next album",
      "about": `Parallels is hypothetically raising money for their next album on WeiFund in this test net campaign.
<br />
<br />Parallels is a unique space for you and us, one that isn't dictate by record labels. With your support and the help of PledgeMusic, we're working to keep it that way. We're gearing up to release our third album “Metropolis” and so excited to offer you your key to the city :slightly_smiling_face:
<br />
<br />WeiFund's roadmap includes the integration of other services on Ethereum. Integration with UJO (www.ujomusic.com) will enable artists to bring their next creation to market with their fans and patrons.
<br />
<br />This Campaign is run on the Standard Campaign, one of WeiFund's Campaign Templates. You can read more about WeiFund's Campaign Templates at http://weifund.readthedocs.io/en/latest/
<br />
<br />The readiness of the Standard Campaign smart contract system can be assessed by reviewing its Vetting Specification here: https://github.com/shahankhatch/weifund-schema/blob/master/tests/weifund-vetting/weifund_attestation_01.json
<br />
<br />As it turns out, Parallels is currently fundraising on PledgeMusic, please visit:
<br />http://www.pledgemusic.com/projects/parallels
<br />
<br />To read more about WeiFund's approach to contract readiness, please visit:
<br />https://media.consensys.net/2016/09/15/shaping-crowdfund-rollout-readiness-at-weifund/`,
    }
  },
  "mailChimp": {
    "forms": [{
      "@context": "http://weifund.io",
      "@type": "subscribe",
      "action": "//weifund.us10.list-manage.com/subscribe/post?u=5fd10dccde0a9e8f200ae4e44&amp;id=6c94b8c26f",
      "fields": {
        "email": 1
      }
    }]
  },
  "relatedContracts": []
};

// set ipfs provider
ipfs.setProvider({host: 'ipfs.infura.io', port: '5001', protocol: 'https'});

// upload bugbounty json example
ipfs.addJson(bugBountyJSON, function(err, result){
  console.log('Bug Bounty', err, result);
});

// ipfs parallels cat json
ipfs.addJson(parallelsJSON, function(err, result){
  console.log('Parallels', err, result);
});
