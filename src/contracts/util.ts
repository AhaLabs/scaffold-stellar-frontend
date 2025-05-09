const envRPC = import.meta.env.PUBLIC_STELLAR_RPC_URL;
export const rpcUrl =
  envRPC && typeof envRPC === "string"
    ? envRPC : "http://localhost:8000/rpc";

const envNetworkPassphrase = import.meta.env.PUBLIC_STELLAR_NETWORK_PASSPHRASE;
export const networkPassphrase =
  envNetworkPassphrase && typeof envNetworkPassphrase === "string"
    ? envRPC : "Standalone Network ; February 2017";
