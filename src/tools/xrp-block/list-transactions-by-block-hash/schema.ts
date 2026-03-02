import * as z from "zod";
import { RequestMetadataSchema, OffsetPaginationSchema } from "@cryptoapis-io/mcp-shared";
import { XrpNetwork } from "../base-schema.js";

/**
 * List Transactions By Block Hash - attributes for this action
 */
export const ListTransactionsByBlockHashAttributesSchema = z
    .object({
        network: XrpNetwork.describe("Network name: mainnet or testnet"),
        blockHash: z.string().min(1).describe("Block hash"),
    })
    .merge(RequestMetadataSchema)
    .merge(OffsetPaginationSchema);

export type ListTransactionsByBlockHashAttributes = z.infer<
    typeof ListTransactionsByBlockHashAttributesSchema
>;

/**
 * List Transactions By Block Hash response (Block Data XRP)
 */
export const ListTransactionsByBlockHashOutputSchema = z.object({}).passthrough();

export type ListTransactionsByBlockHashOutput = z.infer<
    typeof ListTransactionsByBlockHashOutputSchema
>;
