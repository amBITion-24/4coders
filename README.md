# 4coders


## Decentralised Voting system(NetElect)

This project is designed to create a secure, transparent, and tamper-proof voting system leveraging blockchain technology, specifically the Stellar network. It aims to provide a decentralized platform where votes can be cast, recorded, and verified in a secure manner, ensuring that the integrity of the voting process is maintained.



## Authors

- Abhishek Agarwal
- Aditya Mishra(Team Lead)
- Aditya Umesh
- Adwiteya Juniwal

## Components
1)Proposal Struct
- title : A short description of the proposal.
- description : A more detailed description of the proposal.
- votes_for : The number of votes in favor of the proposal.
- votes_against : The number of votes against the proposal.
- voters: A list of addresses that have voted.
- ended: A boolean indicating whether the voting has ended.
- owner: The address of the proposal creator.

2)VotingSystem Contract
- Contains methods for creating proposals, casting votes, ending voting, and retrieving results.

## Methods
- create_proposal : Creates a new proposal and stores it in the contract's storage. Returns the ID of the newly created proposal.
  - ### Parameters
    - env: The environment instance.
    - title: The title of the proposal.
    - description: The description of the proposal.
    - owner: The address of the proposal creator.

  - ### Returns : The ID of the created proposal.
  
- cast_vote : Records a vote on a proposal. Ensures the voter has not already voted and the voting has not ended. Updates the proposal's vote counts and voters list.
  - ### Parameters
    - env: The environment instance.
    - proposal_id: The ID of the proposal to vote on.
    - voter: The address of the voter.
    - vote_for: A boolean indicating whether the vote is in favor of the proposal.

  - ### Returns : A symbol indicating the result of the vote recording.
     
- end_voting : Ends the voting for a specified proposal.
  - ### Parameters:
    - env: The environment instance.
    - proposal_id: The ID of the proposal to end voting on.
  
- get_proposal_results : Retrieves the results of a specified proposal.
  - ### Parameters:
    - env: The environment instance.
    - proposal_id: The ID of the proposal to get results for.

  - ### Returns:
    - A tuple containing the proposal's title, description, votes for, votes against, and voting status.
  
- get_all_proposals : Retrieves all proposals stored in the contract.
  - ### Parameters:
    - env: The environment instance.

  - ### Returns:
    - A vector of tuples, each containing the proposal ID, title, description, and voting status.
      
- get_total_votes : Retrieves the total number of votes for a specified proposal.
  - ### Parameters:
    - env: The environment instance.
    - proposal_id: The ID of the proposal to get total votes for.

  - ### Returns:
    - The total number of votes (for and against) for the specified proposal.
      
- quorum : Checks if the specified proposal has met the quorum.
  - ### Parameters:
    - env: The environment instance.
    - proposal_id: The ID of the proposal to check quorum for.

  - ### Returns:
    - A boolean indicating whether the quorum is met (total votes > 1).

- fetch_poll : Fetches the overall polling data across all proposals.
  - ### Parameters:
    - env: The environment instance.

  - ### Returns:
    - A tuple containing the total number of votes against, total votes, and votes for.

- fetch_voter : Fetches the voting data for a specified voter.
  - ### Parameters:
    - env: The environment instance.
    - voter: The address of the voter to fetch data for.

  - ### Returns:
    - A tuple containing the number of proposals the voter has voted on, the total "time" spent voting, and the total votes cast.

- vote : Allows a voter to vote on a proposal by its title. Ensures the voter has not already voted and the voting has not ended
  - ### Parameters:
    - env: The environment instance.
    - voter: The address of the voter.
    - selected: The title of the proposal to vote for.
  - ### Returns:
    - A symbol indicating the result of the vote.
  

SmartContract Deployment 
![image](https://github.com/amBITion-24/4coders/assets/147623950/9acf63a6-2fa7-4099-9c5a-ad15d1665cce)
