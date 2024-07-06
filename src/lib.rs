#![no_std]

use soroban_sdk::{contract, contractimpl, contracttype, symbol_short, Env, Symbol, Vec, Address, Map, IntoVal, Val};


#[contracttype]
#[derive(Clone)]
pub struct Proposal {
    title: Symbol,
    description: Symbol,
    votes_for: u64,
    votes_against: u64,
    voters: Vec<Address>,
    ended: bool,
    owner: Address
}

#[contract]
pub struct VotingSystem;

#[contractimpl]
impl VotingSystem {
    pub fn create_proposal(
        env: Env,
        title: Symbol,
        description: Symbol,
        owner:Address
    ) -> u64 {
        let mut proposals: Map<u64, Proposal> = env.storage().instance().get(&symbol_short!("proposals")).unwrap_or(Map::new(&env));

        let proposal_id = proposals.len() as u64;

        let proposal = Proposal {
            title,
            description,
            votes_for: 0,
            votes_against: 0,
            voters: Vec::new(&env),
            ended: false,
            owner
        };

        proposals.set(proposal_id, proposal.clone());
        env.storage().instance().set::<Symbol, Val>(&symbol_short!("proposals"), &proposals.into_val(&env));

        proposal_id
    }

    pub fn cast_vote(env: Env, proposal_id: u64, voter: Address, vote_for: bool) {
        let mut proposals: Map<u64, Proposal> = env.storage().instance().get(&symbol_short!("proposals")).unwrap_or(Map::new(&env));

        let mut proposal = proposals.get(proposal_id).expect("Proposal not found");

        assert!(!proposal.ended, "Voting has ended for this proposal.");
        assert!(!proposal.voters.contains(&voter), "You have already voted on this proposal.");

        if vote_for {
            proposal.votes_for += 1;
        } else {
            proposal.votes_against += 1;
        }

        proposal.voters.push_back(voter.clone());

        proposals.set(proposal_id, proposal.clone());
        env.storage().instance().set::<Symbol, Val>(&symbol_short!("proposals"), &proposals.into_val(&env));
    }

    pub fn end_voting(env: Env, proposal_id: u64) {
        let mut proposals: Map<u64, Proposal> = env.storage().instance().get(&symbol_short!("proposals")).unwrap_or(Map::new(&env));

        let mut proposal = proposals.get(proposal_id).expect("Proposal not found");

        proposal.ended = true;

        proposals.set(proposal_id, proposal.clone());
        env.storage().instance().set::<Symbol, Val>(&symbol_short!("proposals"), &proposals.into_val(&env));
    }

    pub fn get_proposal_results(env: Env, proposal_id: u64) -> (Symbol, Symbol, u64, u64, bool) {
        let proposals: Map<u64, Proposal> = env.storage().instance().get(&symbol_short!("proposals")).unwrap_or(Map::new(&env));

        let proposal = proposals.get(proposal_id).expect("Proposal not found");

        (
            proposal.title.clone(),
            proposal.description.clone(),
            proposal.votes_for,
            proposal.votes_against,
            proposal.ended,
        )
    }

    pub fn get_all_proposals(env: Env) -> Vec<(u64, Symbol, Symbol, bool)> {
        let proposals: Map<u64, Proposal> = env.storage().instance().get(&symbol_short!("proposals")).unwrap_or(Map::new(&env));
        
        let mut result = Vec::new(&env);

        for (proposal_id, proposal) in proposals.iter() {
            result.push_back((proposal_id, proposal.title.clone(), proposal.description.clone(), proposal.ended));
        }

        result
    }
    pub fn get_total_votes(env: Env, proposal_id: u64) -> u64 {
        let proposals: Map<u64, Proposal> = env.storage().instance().get(&symbol_short!("proposals")).unwrap_or(Map::new(&env));
        let proposal = proposals.get(proposal_id).expect("Proposal not found");
        proposal.votes_for + proposal.votes_against
    }
    pub fn quorum(env:Env,proposal_id:u64)->bool{
        let total_votes:u64=Self::get_total_votes(env,proposal_id);
        total_votes > 1

    }
}