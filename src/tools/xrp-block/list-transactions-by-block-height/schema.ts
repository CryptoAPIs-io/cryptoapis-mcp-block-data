import * as z from "zod";
import { RequestMetadataSchema, OffsetPaginationSchema } from "@cryptoapis-io/mcp-shared";
import { XrpNetwork } from "../base-schema.js";

/**
 * List Transactions By Block Height - attributes for this action
 */
export const ListTransactionsByBlockHeightAttributesSchema = z
    .object({
        network: XrpNetwork.describe("Network name: mainnet or testnet"),
        blockHeight: z.number().int().min(0).describe("Block height"),
    })
    .merge(RequestMetadataSchema)
    .merge(OffsetPaginationSchema);

export type ListTransactionsByBlockHeightAttributes = z.infer<
    typeof ListTransactionsByBlockHeightAttributesSchema
>;

/**
 * List Transactions By Block Height response (Block Data XRP)
 */
export const ListTransactionsByBlockHeightOutputSchema = z.object({}).passthrough();

export type ListTransactionsByBlockHeightOutput = z.infer<
    typeof ListTransactionsByBlockHeightOutputSchema
>;
