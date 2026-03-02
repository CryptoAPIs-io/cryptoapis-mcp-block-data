import * as z from "zod";
import { RequestMetadataSchema } from "@cryptoapis-io/mcp-shared";
import { XrpNetwork } from "../base-schema.js";

/**
 * Get Block By Height - attributes for this action
 */
export const GetBlockByHeightAttributesSchema = z
    .object({
        network: XrpNetwork.describe("Network name: mainnet or testnet"),
        blockHeight: z.number().int().min(0).describe("Block height"),
    })
    .merge(RequestMetadataSchema);

export type GetBlockByHeightAttributes = z.infer<typeof GetBlockByHeightAttributesSchema>;

/**
 * Get Block By Height response (Block Data XRP)
 */
export const GetBlockByHeightOutputSchema = z.object({}).passthrough();

export type GetBlockByHeightOutput = z.infer<typeof GetBlockByHeightOutputSchema>;
