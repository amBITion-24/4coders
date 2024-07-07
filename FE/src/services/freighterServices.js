import pkg from "@stellar/freighter-api";

async function checkConnection() {
  const isAllowed = await pkg.setAllowed();
  if (isAllowed) {
      return true;
  }
}

const retrievePublicKey = async () => {
  let publicKey = "";
  let error = "";
  try {
      publicKey = await pkg.requestAccess();
  } catch (e) {
      error = e;
  }
  if (error) {
      return error;
  }
  return publicKey;
};

const userSignTransaction = async (xdr, network, signWith) => {
  let signedTransaction = "";
  let error = "";
  try {
    signedTransaction = await pkg.signTransaction(xdr, {
      network,
      accountToSign: signWith,
    });
  } catch (e) {
    error = e;
  }
  if (error) {
    return error;
  }
  return signedTransaction;
};


export { retrievePublicKey, checkConnection, userSignTransaction };