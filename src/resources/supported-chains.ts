import type { SupportedChainsResource } from "@cryptoapis-io/mcp-shared";

const ALL_ACTIONS = [
    "get-block-by-height",
    "get-block-by-hash",
    "list-transactions-by-block-height",
    "list-transactions-by-block-hash",
    "get-last-mined-block",
    "list-latest-mined-blocks",
] as const;

const EVM_BLOCKCHAINS = [
    "ethereum",
    "ethereum-classic",
    "binance-smart-chain",
    "tron",
    "polygon",
    "avalanche",
    "arbitrum",
    "base",
    "optimism",
] as const;

const UTXO_BLOCKCHAINS = [
    "bitcoin",
    "bitcoin-cash",
    "litecoin",
    "dogecoin",
    "dash",
    "zcash",
] as const;

/**
 * Supported chains resource data for the block-data package.
 *
 * All three families (EVM, UTXO, XRP) support the same six block-data actions.
 */
export const supportedChains: SupportedChainsResource = {
    evm: {
        blockchains: EVM_BLOCKCHAINS,
        networks: {
            ethereum: ["mainnet", "sepolia"],
            "ethereum-classic": ["mainnet", "mordor"],
            "binance-smart-chain": ["mainnet", "testnet"],
            tron: ["mainnet", "nile"],
            polygon: ["mainnet", "amoy"],
            avalanche: ["mainnet", "fuji"],
            arbitrum: ["mainnet", "sepolia"],
            base: ["mainnet", "sepolia"],
            optimism: ["mainnet", "sepolia"],
        },
        actions: Object.fromEntries(ALL_ACTIONS.map((a) => [a, EVM_BLOCKCHAINS])),
    },
    utxo: {
        blockchains: UTXO_BLOCKCHAINS,
        networks: {
            bitcoin: ["mainnet", "testnet"],
            "bitcoin-cash": ["mainnet", "testnet"],
            litecoin: ["mainnet", "testnet"],
            dogecoin: ["mainnet", "testnet"],
            dash: ["mainnet", "testnet"],
            zcash: ["mainnet", "testnet"],
        },
        actions: Object.fromEntries(ALL_ACTIONS.map((a) => [a, UTXO_BLOCKCHAINS])),
    },
    xrp: {
        blockchains: ["xrp"],
        networks: {
            xrp: ["mainnet", "testnet"],
        },
        actions: Object.fromEntries(ALL_ACTIONS.map((a) => [a, ["xrp"]])),
    },
};
