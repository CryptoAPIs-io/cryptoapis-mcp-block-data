import * as z from "zod";

/**
 * Actions available for XRP Block Data endpoints
 */
export const XrpBlockAction = z.enum([
    "get-block-by-height",
    "get-block-by-hash",
    "list-transactions-by-block-height",
    "list-transactions-by-block-hash",
    "get-last-mined-block",
    "list-latest-mined-blocks",
]);

/**
 * Supported XRP networks (Block Data product)
 */
export const XrpNetwork = z.enum(["mainnet", "testnet"]);
