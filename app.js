const contractAddress = "0xccEf4dB2553b1F2A2b82E48225c7d1f14B80Bc52";
const contractABI = [
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "minimumBet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "_subscriptionId",
				"type": "uint64"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "have",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "want",
				"type": "address"
			}
		],
		"name": "OnlyCoordinatorCanFulfill",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "play",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "randomWords",
				"type": "uint256[]"
			}
		],
		"name": "rawFulfillRandomWords",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_number1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_number2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_number3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_number4",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_number5",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_number6",
				"type": "uint256"
			}
		],
		"name": "ticket",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "_minimumBet",
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
				"name": "_address",
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
		"inputs": [],
		"name": "draw1",
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
		"name": "draw2",
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
		"name": "draw3",
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
		"name": "draw4",
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
		"name": "draw5",
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
		"name": "draw6",
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
				"name": "_requestId",
				"type": "uint256"
			}
		],
		"name": "getRequestStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "fulfilled",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
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
		"name": "lastRequestId",
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
		"name": "playerLottoNumbers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "number1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "number2",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "number3",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "number4",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "number5",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "number6",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s_owner",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "s_requests",
		"outputs": [
			{
				"internalType": "bool",
				"name": "fulfilled",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winner",
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

let contract;
let signer;
const provider = new ethers.providers.Web3Provider(window.ethereum, 80001);
provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0]);
        contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
        );
    });
});


// function to submit the player's chosen numbers to the contract and generate VRF random numbers
async function submitNumbers() {
    console.log("play");
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const number3 = document.getElementById("number3").value;
    const number4 = document.getElementById("number4").value;
    const number5 = document.getElementById("number5").value;
    const number6 = document.getElementById("number6").value;
  
    const playerAddress = await signer.getAddress();
  
   const ticket = await contract.ticket(number1, number2, number3, number4, number5, number6);
  await ticket;
  // const balance = await provider.getBalance(playerAddress);
    // if (balance.lt(minimumBet)) {
    //   alert("Insufficient balance to play");
    //   return;
    // }
  
    // generate VRF random numbers
    try {
      const tx = await contract.play();
      await tx.wait();
      const result = await contract.getResult(playerAddress);
      const generatedNumbers = result[0];
      const isWinner = result[1];
  
      // compare the player's chosen numbers and VRF random numbers
      const chosenNumbers = [number1, number2, number3, number4, number5, number6];
      let count = 0;
      for (let i = 0; i < chosenNumbers.length; i++) {
        if (chosenNumbers[i] == generatedNumbers[i]) {
          count++;
        }
      }

      displayResults(generatedNumbers, isWinner, count); // call the displayResults function here
  
    } catch (error) {
      console.log(error);
    }
}
  
async function displayResults(generatedNumbers, isWinner, count) { // define the displayResults function outside of submitNumbers
    console.log('Generated numbers:', generatedNumbers);
  console.log('Is winner:', isWinner);
  console.log('Count:', count);

    const resultLog = await getResults(); // add await here to get the result from getResults() function
    console.log(resultLog);

    const generatedNumbersList = document.getElementById("generatedNumbers");
    generatedNumbersList.innerHTML = "";
    for (let i = 0; i < generatedNumbers.length; i++) {
      const li = document.createElement("li");
      li.innerText = generatedNumbers[i];
      generatedNumbersList.appendChild(li);
    }

    const result = document.getElementById("result");
    if (isWinner && count == 6) {
      result.innerText = "Congratulations! You have won the lottery!";
      result.style.cssText = `background-color: green; color: white; font-family: 'Chakra Petch', sans-serif;`;
    } else {
      result.innerText = "Sorry, you lose. Better luck next time!";
      result.style.cssText = `background-color: darkred; color: white; font-family: 'Chakra Petch', sans-serif;`;
    }
}

async function getResults() {
  const number1 = await contract.number1();
    const number2 = await contract.number2();
    const number3 = await contract.number3();
    const number4 = await contract.number4();
    const number5 = await contract.number5();
    const number6 = await contract.number6();
    const result1 = Math.trunc(number1);
    const result2 = Math.trunc(number2);
    const result3 = Math.trunc(number3);
    const result4 = Math.trunc(number4);
    const result5 = Math.trunc(number5);
    const result6 = Math.trunc(number6);
    dataIsReceived = true;
    return [result1, result2, result3, result4, result5, result6];
}

async function playNow() {
  const play = contract.play();
  await play;
}

async function seeNumbers() {
    const draw1 = await contract.draw1();
    const draw2 = await contract.draw2();
    const draw3 = await contract.draw3();
    const draw4 = await contract.draw4();
    const draw5 = await contract.draw5();
    const draw6 = await contract.draw6();
  
  // console.log( draw1.toString() , draw2.toString(), draw3.toString(), draw4.toString(), draw5.toString(), draw6.toString() );
  
  const seeNums = document.getElementById("generatedNumbers");
  seeNums.innerHTML = `<li>${draw1.toString()}</li>
        <li> ${draw2.toString()} </li>
        <li> ${draw3.toString()} </li>
        <li>${draw4.toString()} </li>
        <li> ${draw5.toString()} </li>
        <li> ${draw6.toString()} </li> `;
}