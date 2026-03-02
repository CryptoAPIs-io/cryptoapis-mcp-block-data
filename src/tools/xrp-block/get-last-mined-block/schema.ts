import * as z from "zod";
import { RequestMetadataSchema } from "@cryptoapis-io/mcp-shared";
import { XrpNetwork } from "../base-schema.js";

/**
 * Get Last Mined Block - attributes for this action
 */
export const GetLastMinedBlockAttributesSchema = z
    .object({
        network: XrpNetwork.describe("Network name: mainnet or testnet"),
    })
    .merge(RequestMetadataSchema);

export type GetLastMinedBlockAttributes = z.infer<typeof GetLastMinedBlockAttributesSchema>;

/**
 * Get Last Mined Block response (Block Data XRP)
 */
export const GetLastMinedBlockOutputSchema = z.object({}).passthrough();

export type GetLastMinedBlockOutput = z.infer<typeof GetLastMinedBlockOutputSchema>;
