import * as z from "zod";
import { RequestMetadataSchema } from "@cryptoapis-io/mcp-shared";
import { EvmBlockchain, EvmNetwork } from "../base-schema.js";

/**
 * Get Block By Height - attributes for this action
 */
export const GetBlockByHeightAttributesSchema = z
    .object({
        blockchain: EvmBlockchain.describe("Blockchain protocol"),
        network: EvmNetwork.describe("Network name"),
        blockHeight: z.number().int().min(0).describe("Block height"),
    })
    .merge(RequestMetadataSchema);

export type GetBlockByHeightAttributes = z.infer<typeof GetBlockByHeightAttributesSchema>;

/**
 * Get Block By Height response (Block Data EVM)
 */
export const GetBlockByHeightOutputSchema = z.object({}).passthrough();

export type GetBlockByHeightOutput = z.infer<typeof GetBlockByHeightOutputSchema>;
