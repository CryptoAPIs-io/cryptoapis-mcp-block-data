import * as z from "zod";
import { RequestMetadataSchema } from "@cryptoapis-io/mcp-shared";
import { UtxoBlockchain, UtxoNetwork } from "../base-schema.js";

/**
 * Get Last Mined Block - attributes for this action
 */
export const GetLastMinedBlockAttributesSchema = z
    .object({
        blockchain: UtxoBlockchain.describe("Blockchain protocol"),
        network: UtxoNetwork.describe("Network name"),
    })
    .merge(RequestMetadataSchema);

export type GetLastMinedBlockAttributes = z.infer<typeof GetLastMinedBlockAttributesSchema>;

/**
 * Get Last Mined Block response (Block Data UTXO)
 */
export const GetLastMinedBlockOutputSchema = z.object({}).passthrough();

export type GetLastMinedBlockOutput = z.infer<typeof GetLastMinedBlockOutputSchema>;
