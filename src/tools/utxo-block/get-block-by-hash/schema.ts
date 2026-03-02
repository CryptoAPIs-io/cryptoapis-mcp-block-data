import * as z from "zod";
import { RequestMetadataSchema } from "@cryptoapis-io/mcp-shared";
import { UtxoBlockchain, UtxoNetwork } from "../base-schema.js";

/**
 * Get Block By Hash - attributes for this action
 */
export const GetBlockByHashAttributesSchema = z
    .object({
        blockchain: UtxoBlockchain.describe("Blockchain protocol"),
        network: UtxoNetwork.describe("Network name"),
        blockHash: z.string().min(1).describe("Block hash"),
    })
    .merge(RequestMetadataSchema);

export type GetBlockByHashAttributes = z.infer<typeof GetBlockByHashAttributesSchema>;

/**
 * Get Block By Hash response (Block Data UTXO)
 */
export const GetBlockByHashOutputSchema = z.object({}).passthrough();

export type GetBlockByHashOutput = z.infer<typeof GetBlockByHashOutputSchema>;
