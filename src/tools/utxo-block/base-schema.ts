import * as z from "zod";

/**
 * Actions available for UTXO Block Data endpoints
 */
export const UtxoBlockAction = z.enum([
    "get-block-by-height",
    "get-block-by-hash",
    "list-transactions-by-block-height",
    "list-transactions-by-block-hash",
    "get-last-mined-block",
    "list-latest-mined-blocks",
]);

/**
 * Supported UTXO blockchains (Block Data product)
 */
export const UtxoBlockchain = z.enum([
    "bitcoin",
    "bitcoin-cash",
    "litecoin",
    "dogecoin",
    "dash",
    "zcash",
]);

/**
 * Supported UTXO networks (Block Data product)
 */
export const UtxoNetwork = z.enum(["mainnet", "testnet"]);
