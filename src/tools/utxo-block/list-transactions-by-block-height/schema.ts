import * as z from "zod";
import { RequestMetadataSchema, OffsetPaginationSchema } from "@cryptoapis-io/mcp-shared";
import { UtxoBlockchain, UtxoNetwork } from "../base-schema.js";

/**
 * List Transactions By Block Height - attributes for this action
 */
export const ListTransactionsByBlockHeightAttributesSchema = z
    .object({
        blockchain: UtxoBlockchain.describe("Blockchain protocol"),
        network: UtxoNetwork.describe("Network name"),
        blockHeight: z.number().int().min(0).describe("Block height"),
    })
    .merge(RequestMetadataSchema)
    .merge(OffsetPaginationSchema);

export type ListTransactionsByBlockHeightAttributes = z.infer<
    typeof ListTransactionsByBlockHeightAttributesSchema
>;

/**
 * List Transactions By Block Height response (Block Data UTXO)
 */
export const ListTransactionsByBlockHeightOutputSchema = z.object({}).passthrough();

export type ListTransactionsByBlockHeightOutput = z.infer<
    typeof ListTransactionsByBlockHeightOutputSchema
>;
