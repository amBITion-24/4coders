import {
    Contract,
    SorobanRpc,
    TransactionBuilder,
    Networks,
    BASE_FEE,
    nativeToScVal,
    Address,
    Keypair
} from "@stellar/stellar-sdk";
import { userSignTransaction } from './freighterServices.js';
import { getPublicKey } from '@stellar/freighter-api';

// Use Vite's environment variables
const rpcUrl = 'https://soroban-testnet.stellar.org';
const contractAddress = 'CDF2IEMOKVYTSUXQGJYRMEDTW6GXH7CSBJMXJ2YNXDOTK4E3C5YY3XJU';

const stringToSymbol = (value) => {
    return nativeToScVal(value, { type: "symbol" });
};

const accountToScVal = (account) => {
    if (!account) {
        throw new Error('Invalid account: undefined or null');
    }
    console.log('Converting account to ScVal:', account);
    return new Address(account).toScVal();
};

const params = {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET
};

async function contractInt(caller, functName, values) {
    const provider = new SorobanRpc.Server(rpcUrl, { allowHttp: true });
    const contract = new Contract(contractAddress);
    const sourceAccount=await provider.getAccount(caller);
    console.log('Source account:', sourceAccount);
    let buildTx;
    if (values == null) {
        buildTx = new TransactionBuilder(sourceAccount, params)
            .addOperation(contract.call(functName))
            .setTimeout(30).build();
    } else {
        buildTx = new TransactionBuilder(sourceAccount, params)
            .addOperation(contract.call(functName, ...values))
            .setTimeout(30).build();
    }
    let _buildTx = await provider.prepareTransaction(buildTx);
    let prepareTx = _buildTx.toXDR();
    let signedTx = await userSignTransaction(prepareTx, "TESTNET", caller);
    let tx = TransactionBuilder.fromXDR(signedTx, Networks.TESTNET);
    try {
        let sendTx = await provider.sendTransaction(tx).catch(function (err) {
            console.error('Error sending transaction:', err);
            return err;
        });
        if (sendTx.errorResult) {
            throw new Error("Unable to submit transaction");
        }
        if (sendTx.status === "PENDING") {
            let txResponse = await provider.getTransaction(sendTx.hash);
            while (txResponse.status === "NOT_FOUND") {
                txResponse = await provider.getTransaction(sendTx.hash);
                await new Promise((resolve) => setTimeout(resolve, 100));
            }
            if (txResponse.status === "SUCCESS") {
                let result = txResponse.returnValue;
                console.log('Transaction success:', result);
                return result;
            }
        }
    } catch (err) {
        console.error('Error in transaction processing:', err);
        return err;
    }
}

// Functions to interact with the contract

export const createProposal = async (title, description, ownerSecret) => {
    try {
        const caller = await getPublicKey();
        console.log('Caller public key for createProposal:', caller);
        const ownerKeypair = Keypair.fromSecret(ownerSecret);
        const values = [stringToSymbol(title), stringToSymbol(description), accountToScVal(ownerKeypair.publicKey())];
        const result = await contractInt(caller, 'create_proposal', values);
        return result;
    } catch (err) {
        console.error('Error in createProposal:', err);
        throw err;
    }
};

export const castVote = async (proposalId, voterSecret, voteFor) => {
    try {
        const caller = await getPublicKey();
        console.log('Caller public key for castVote:', caller);
        const voterKeypair = Keypair.fromSecret(voterSecret);
        const values = [nativeToScVal(proposalId, { type: 'u64' }), accountToScVal(voterKeypair.publicKey()), nativeToScVal(voteFor, { type: 'bool' })];
        const result = await contractInt(caller, 'cast_vote', values);
        return result;
    } catch (err) {
        console.error('Error in castVote:', err);
        throw err;
    }
};

export const endVoting = async (proposalId) => {
    try {
        const caller = await getPublicKey();
        console.log('Caller public key for endVoting:', caller);
        const values = [nativeToScVal(proposalId, { type: 'u64' })];
        const result = await contractInt(caller, 'end_voting', values);
        return result;
    } catch (err) {
        console.error('Error in endVoting:', err);
        throw err;
    }
};

export const getProposalResults = async (proposalId) => {
    try {
        const caller = await getPublicKey();
        console.log('Caller public key for getProposalResults:', caller);
        const values = [nativeToScVal(proposalId, { type: 'u64' })];
        const result = await contractInt(caller, 'get_proposal_results', values);
        return result;
    } catch (err) {
        console.error('Error in getProposalResults:', err);
        throw err;
    }
};

export const getAllProposals = async () => {
    try {
        const caller = await getPublicKey();
        console.log('Caller public key for getAllProposals:', caller);
        const result = await contractInt(caller, 'get_all_proposals', null);
        return result;
    } catch (err) {
        console.error('Error in getAllProposals:', err);
        throw err;
    }
};

export const fetchPoll = async () => {
    try {
        const caller = await getPublicKey();
        console.log('Caller public key for fetchPoll:', caller);
        const result = await contractInt(caller, 'view_poll', null);
        const no = (result._value[0]._attributes.val._value).toString();
        const total = (result._value[1]._attributes.val._value).toString();
        const yes = (result._value[2]._attributes.val._value).toString();
        return [no, total, yes];
    } catch (err) {
        console.error('Error in fetchPoll:', err);
        throw err;
    }
};

export const fetchVoter = async () => {
    try {
        const caller = await getPublicKey();
        console.log('Caller public key for fetchVoter:', caller);
        const voter = accountToScVal(caller);
        const result = await contractInt(caller, 'view_voter', [voter]);
        const selected = (result._value[0]._attributes.val._value).toString();
        const time = (result._value[1]._attributes.val._value).toString();
        const votes = (result._value[2]._attributes.val._value).toString();
        return [selected, time, votes];
    } catch (err) {
        console.error('Error in fetchVoter:', err);
        throw err;
    }
};

export const vote = async (value) => {
    try {
        const caller = await getPublicKey();
        console.log('Caller public key for vote:', caller);
        const selected = stringToSymbol(value);
        const voter = accountToScVal(caller);
        const values = [voter, selected];
        const result = await contractInt(caller, 'record_votes', values);
        return result;
    } catch (err) {
        console.error('Error in vote:', err);
        throw err;
    }
};