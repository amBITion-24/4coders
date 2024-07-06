use soroban_sdk::{Env, Address, Symbol, testutils::MockEnv};

pub fn setup_env() -> Env {
    let env = Env::default();
    env.mock_all_auths();
    env
}

pub fn create_address(env: &Env) -> Address {
    Address::random(env)
}

pub fn create_symbol(env: &Env, value: &str) -> Symbol {
    Symbol::from_str(env, value)
}