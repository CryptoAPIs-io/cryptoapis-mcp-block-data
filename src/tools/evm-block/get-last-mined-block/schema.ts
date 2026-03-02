import * as z from "zod";
import { RequestMetadataSchema } from "@cryptoapis-io/mcp-shared";
import { EvmBlockchain, EvmNetwork } from "../base-schema.js";

/**
 * Get Last Mined Block - attributes for this action
 */
export const GetLastMinedBlockAttributesSchema = z
    .object({
        blockchain: EvmBlockchain.describe("Blockchain protocol"),
        network: EvmNetwork.describe("Network name"),
    })
    .merge(RequestMetadataSchema);

export type GetLastMinedBlockAttributes = z.infer<typeof GetLastMinedBlockAttributesSchema>;

/**
 * Get Last Mined Block response (Block Data EVM)
 */
export const GetLastMinedBlockOutputSchema = z.object({}).passthrough();

export type GetLastMinedBlockOutput = z.infer<typeof GetLastMinedBlockOutputSchema>;
