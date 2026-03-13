import * as z from "zod";
import { RequestMetadataSchema, OffsetPaginationSchema } from "@cryptoapis-io/mcp-shared";
import { UtxoBlockAction, UtxoBlockchain, UtxoNetwork } from "./base-schema.js";
import { GetBlockByHeightOutputSchema } from "./get-block-by-height/schema.js";
import { GetBlockByHashOutputSchema } from "./get-block-by-hash/schema.js";
import { ListTransactionsByBlockHeightOutputSchema } from "./list-transactions-by-block-height/schema.js";
import { ListTransactionsByBlockHashOutputSchema } from "./list-transactions-by-block-hash/schema.js";
import { GetLastMinedBlockOutputSchema } from "./get-last-mined-block/schema.js";
import { ListLatestMinedBlocksOutputSchema } from "./list-latest-mined-blocks/schema.js";

/**
 * Flat schema for all UTXO block data actions
 * API will validate specific action+blockchain+network combinations
 */
export const UtxoBlockToolSchema = z
    .object({
        action: UtxoBlockAction.describe("Action to perform"),
        blockchain: UtxoBlockchain.describe("Blockchain protocol"),
        network: UtxoNetwork.describe("Network name"),
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

export type UtxoBlockInput = z.infer<typeof UtxoBlockToolSchema>;

// Re-export base schema
export { UtxoBlockAction, UtxoBlockchain, UtxoNetwork } from "./base-schema.js";

// Re-export output schemas
export { GetBlockByHeightOutputSchema } from "./get-block-by-height/schema.js";
export { GetBlockByHashOutputSchema } from "./get-block-by-hash/schema.js";
export { ListTransactionsByBlockHeightOutputSchema } from "./list-transactions-by-block-height/schema.js";
export { ListTransactionsByBlockHashOutputSchema } from "./list-transactions-by-block-hash/schema.js";
export { GetLastMinedBlockOutputSchema } from "./get-last-mined-block/schema.js";
export { ListLatestMinedBlocksOutputSchema } from "./list-latest-mined-blocks/schema.js";
