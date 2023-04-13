// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

contract Lottery4 is VRFConsumerBaseV2 {
  VRFCoordinatorV2Interface COORDINATOR;

  uint64 s_subscriptionId; //hold the subscription ID

  address vrfCoordinator = 0x8103b0a8a00be2ddc778e6e7eaa21791cd364625; //hold the address of the VRF coordinator contract
  bytes32 keyHash = 0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c; //hold the key hash for generating the random number
  uint32 callbackGasLimit = 2500000; //hold the gas limit for the callback function
  uint16 requestConfirmations = 3; //hold the number of confirmations required for the request
  uint32 numWords = 6; //hold the number of random words to retrieve

  uint256[] public s_randomNumbers; //public array to hold the random numbers returned by the VRF
  uint256 public s_requestId; //hold the request ID returned by the VRF
  address s_owner; //hold the owner of the contract

  uint8 public constant player_numChoices = 6; //The number of choices a player can make
  uint8[player_numChoices] public playerChoices;

  constructor(uint64 subscriptionId) VRFConsumerBaseV2(vrfCoordinator) {
    COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
    s_owner = msg.sender;
    s_subscriptionId = subscriptionId;
  }

//request random numbers from Chainlink's VRF.
  function requestRandomNumbers() external onlyOwner {
    s_requestId = COORDINATOR.requestRandomWords(
      keyHash,
      s_subscriptionId,
      requestConfirmations,
      callbackGasLimit,
      numWords
    );
  }
  
//called by the Chainlink VRF oracle contract when it generates a random number
  function fulfillRandomWords(
    uint256, /* requestId */
    uint256[] memory randomNumbers,
    uint256 randomness
  ) internal override {
    s_randomNumbers = randomNumbers;

     // Extract the random numbers and store them in an array
        for (uint256 i = 0; i < player_numChoices; i++) {
            uint256 randomNumber = (randomness >> i) % 50 + 1;
            randomNumbers.push(randomNumber);
        }
    checkWin();
  }


//allows players to choose their numbers 
  function chooseNumbers(uint8[player_numChoices] memory choices) external {
    require(choices.length == player_numChoices, "Invalid number of choices");
    for (uint8 i = 0; i < player_numChoices; i++) {
      require(choices[i] > 0 && choices[i] <= 50, "Number must be between 1 and 50");
      playerChoices[i] = choices[i];
    }
  }

//checks whether the player's chosen numbers match the random numbers generated by the Chainlink VRF
  function checkWin() external view returns(bool) {
    require(s_randomNumbers.length == player_numChoices, "Random numbers not generated yet");
    for (uint8 i = 0; i < player_numChoices; i++) {
      if (playerChoices[i] != (s_randomNumbers[i] % 50) + 1) {
        return false;
      }
    }
    return true;
  }

  modifier onlyOwner() {
    require(msg.sender == s_owner);
    _;
  }
}