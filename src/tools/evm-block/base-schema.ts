import * as z from "zod";

/**
 * Actions available for EVM Block Data endpoints
 */
export const EvmBlockAction = z.enum([
    "get-block-by-height",
    "get-block-by-hash",
    "list-transactions-by-block-hash",
    "list-transactions-by-block-height",
    "get-last-mined-block",
    "list-latest-mined-blocks",
]);

/**
 * Supported EVM blockchains (Block Data product)
 */
export const EvmBlockchain = z.enum([
    "ethereum",
    "ethereum-classic",
    "binance-smart-chain",
    "tron",
    "polygon",
    "avalanche",
    "arbitrum",
    "base",
    "optimism",
]);

/**
 * Supported EVM networks (Block Data product)
 */
export const EvmNetwork = z.enum([
    "mainnet",
    "mordor",
    "testnet",
    "nile",
    "sepolia",
    "amoy",
    "fuji",
]);
