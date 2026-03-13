import * as z from "zod";
import { RequestMetadataSchema, OffsetPaginationSchema } from "@cryptoapis-io/mcp-shared";
import { XrpBlockAction, XrpNetwork } from "./base-schema.js";
import { GetBlockByHeightOutputSchema } from "./get-block-by-height/schema.js";
import { GetBlockByHashOutputSchema } from "./get-block-by-hash/schema.js";
import { ListTransactionsByBlockHeightOutputSchema } from "./list-transactions-by-block-height/schema.js";
import { ListTransactionsByBlockHashOutputSchema } from "./list-transactions-by-block-hash/schema.js";
import { GetLastMinedBlockOutputSchema } from "./get-last-mined-block/schema.js";
import { ListLatestMinedBlocksOutputSchema } from "./list-latest-mined-blocks/schema.js";

/**
 * Flat schema for all XRP block data actions
 * Path uses network only (no blockchain in path)
 */
export const XrpBlockToolSchema = z
    .object({
        action: XrpBlockAction.describe("Action to perform"),
        network: XrpNetwork.describe("Network name: mainnet or testnet"),
        blockHeight: z
            .number()
            .int()
            .min(0)
            .optional()
            .describe(
                "Block height (required for get-block-by-height, list-transactions-by-block-height)"
            ),
        blockHash: z
            .string()
            .optional()
            .describe(
                "Block hash (required for get-block-by-hash, list-transactions-by-block-hash)"
            ),
        count: z
            .number()
            .int()
            .positive()
            .max(100)
            .optional()
            .describe("Number of blocks to return (for list-latest-mined-blocks)"),
    })
    .merge(RequestMetadataSchema)
    .merge(OffsetPaginationSchema);

export type XrpBlockInput = z.infer<typeof XrpBlockToolSchema>;

// Re-export base schema
export { XrpBlockAction, XrpNetwork } from "./base-schema.js";

// Re-export output schemas
export { GetBlockByHeightOutputSchema } from "./get-block-by-height/schema.js";
export { GetBlockByHashOutputSchema } from "./get-block-by-hash/schema.js";
export { ListTransactionsByBlockHeightOutputSchema } from "./list-transactions-by-block-height/schema.js";
export { ListTransactionsByBlockHashOutputSchema } from "./list-transactions-by-block-hash/schema.js";
export { GetLastMinedBlockOutputSchema } from "./get-last-mined-block/schema.js";
export { ListLatestMinedBlocksOutputSchema } from "./list-latest-mined-blocks/schema.js";
