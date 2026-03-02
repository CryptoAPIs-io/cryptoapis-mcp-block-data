import * as z from "zod";
import { RequestMetadataSchema } from "@cryptoapis-io/mcp-shared";
import { XrpNetwork } from "../base-schema.js";

/**
 * List Latest Mined Blocks - attributes for this action
 */
export const ListLatestMinedBlocksAttributesSchema = z
    .object({
        network: XrpNetwork.describe("Network name: mainnet or testnet"),
        count: z.number().int().positive().max(100).optional().describe("Number of blocks to return"),
    })
    .merge(RequestMetadataSchema);

export type ListLatestMinedBlocksAttributes = z.infer<
    typeof ListLatestMinedBlocksAttributesSchema
>;

/**
 * List Latest Mined Blocks response (Block Data XRP)
 */
export const ListLatestMinedBlocksOutputSchema = z.object({}).passthrough();

export type ListLatestMinedBlocksOutput = z.infer<typeof ListLatestMinedBlocksOutputSchema>;
