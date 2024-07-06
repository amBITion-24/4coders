#![cfg(test)]

use soroban_sdk::{Env, Address, Symbol, Vec, Map};
use crate::{VotingSystem, Proposal};
use crate::tests::utils::{setup_env, create_address, create_symbol};

#[test]
fn test_create_proposal() {
    let env = setup_env();
    let voting_system = VotingSystem {};

    let title = create_symbol(&env, "Test Proposal");
    let description = create_symbol(&env, "This is a test proposal.");

    let proposal_id = voting_system.create_proposal(env.clone(), title.clone(), description.clone());

    let proposals: Map<u64, Proposal> = env.storage().instance().get(&symbol_short!("proposals")).unwrap();
    let proposal = proposals.get(proposal_id).unwrap();

    assert_eq!(proposal.title, title);
    assert_eq!(proposal.description, description);
    assert_eq!(proposal.votes_for, 0);
    assert_eq!(proposal.votes_against, 0);
    assert_eq!(proposal.ended, false);
}

#[test]
fn test_cast_vote() {
    let env = setup_env();
    let voting_system = VotingSystem {};

    let title = create_symbol(&env, "Test Proposal");
    let description = create_symbol(&env, "This is a test proposal.");

    let proposal_id = voting_system.create_proposal(env.clone(), title.clone(), description.clone());

    let voter = create_address(&env);
    voting_system.cast_vote(env.clone(), proposal_id, voter.clone(), true);

    let proposals: Map<u64, Proposal> = env.storage().instance().get(&symbol_short!("proposals")).unwrap();
    let proposal = proposals.get(proposal_id).unwrap();

    assert_eq!(proposal.votes_for, 1);
    assert_eq!(proposal.votes_against, 0);
    assert!(proposal.voters.contains(&voter));
}

#[test]
fn test_end_voting() {
    let env = setup_env();
    let voting_system = VotingSystem {};

    let title = create_symbol(&env, "Test Proposal");
    let description = create_symbol(&env, "This is a test proposal.");

    let proposal_id = voting_system.create_proposal(env.clone(), title.clone(), description.clone());

    voting_system.end_voting(env.clone(), proposal_id);

    let proposals: Map<u64, Proposal> = env.storage().instance().get(&symbol_short!("proposals")).unwrap();
    let proposal = proposals.get(proposal_id).unwrap();

    assert!(proposal.ended);
}