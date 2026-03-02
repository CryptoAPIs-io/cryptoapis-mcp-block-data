import type { CryptoApisHttpClient, RequestResult } from "@cryptoapis-io/mcp-shared";
import type { McpToolDef } from "../types.js";
import { XrpBlockToolSchema, type XrpBlockInput } from "./schema.js";
import { handleGetBlockByHeight } from "./get-block-by-height/index.js";
import { credits as getBlockByHeightCredits } from "./get-block-by-height/credits.js";
import { handleGetBlockByHash } from "./get-block-by-hash/index.js";
import { credits as getBlockByHashCredits } from "./get-block-by-hash/credits.js";
import { handleListTransactionsByBlockHeight } from "./list-transactions-by-block-height/index.js";
import { credits as listTransactionsByBlockHeightCredits } from "./list-transactions-by-block-height/credits.js";
import { handleListTransactionsByBlockHash } from "./list-transactions-by-block-hash/index.js";
import { credits as listTransactionsByBlockHashCredits } from "./list-transactions-by-block-hash/credits.js";
import { handleGetLastMinedBlock } from "./get-last-mined-block/index.js";
import { credits as getLastMinedBlockCredits } from "./get-last-mined-block/credits.js";
import { handleListLatestMinedBlocks } from "./list-latest-mined-blocks/index.js";
import { credits as listLatestMinedBlocksCredits } from "./list-latest-mined-blocks/credits.js";

const XRP_DESCRIPTION = `Get XRP block details (Block Data product). Path uses network only (no blockchain). Networks: mainnet, testnet.`;

export const xrpBlockTool: McpToolDef<typeof XrpBlockToolSchema> = {
    name: "xrp_block_data",
    description: `${XRP_DESCRIPTION}

Actions:
• get-block-by-height: Get block details by block height (number)
• get-block-by-hash: Get block details by block hash
• list-transactions-by-block-height: List transactions in a block by block height
• list-transactions-by-block-hash: List transactions in a block by block hash
• get-last-mined-block: Get the latest mined block details
• list-latest-mined-blocks: List the latest mined blocks`,
    credits: {
        "get-block-by-height": getBlockByHeightCredits,
        "get-block-by-hash": getBlockByHashCredits,
        "list-transactions-by-block-height": listTransactionsByBlockHeightCredits,
        "list-transactions-by-block-hash": listTransactionsByBlockHashCredits,
        "get-last-mined-block": getLastMinedBlockCredits,
        "list-latest-mined-blocks": listLatestMinedBlocksCredits,
    },
    inputSchema: XrpBlockToolSchema,
    handler:
        (client: CryptoApisHttpClient) =>
        async (input: XrpBlockInput) => {
            let result: RequestResult<unknown>;

            const baseParams = {
                network: input.network,
                context: input.context,
            };

            switch (input.action) {
                case "get-block-by-height":
                    result = await handleGetBlockByHeight(client, {
                        ...baseParams,
                        blockHeight: input.blockHeight!,
                    });
                    break;
                case "get-block-by-hash":
                    result = await handleGetBlockByHash(client, {
                        ...baseParams,
                        blockHash: input.blockHash!,
                    });
                    break;
                case "list-transactions-by-block-height":
                    result = await handleListTransactionsByBlockHeight(client, {
                        ...baseParams,
                        blockHeight: input.blockHeight!,
                        limit: input.limit,
                        offset: input.offset,
                    });
                    break;
                case "list-transactions-by-block-hash":
                    result = await handleListTransactionsByBlockHash(client, {
                        ...baseParams,
                        blockHash: input.blockHash!,
                        limit: input.limit,
                        offset: input.offset,
                    });
                    break;
                case "get-last-mined-block":
                    result = await handleGetLastMinedBlock(client, baseParams);
                    break;
                case "list-latest-mined-blocks":
                    result = await handleListLatestMinedBlocks(client, {
                        ...baseParams,
                        count: input.count,
                    });
                    break;
            }

            return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify({
                            ...(result.data as object),
                            creditsConsumed: result.creditsConsumed,
                            creditsAvailable: result.creditsAvailable,
                            responseTime: result.responseTime,
                            throughputUsage: result.throughputUsage,
                        }),
                    },
                ],
            };
        },
};

export { XrpBlockToolSchema, type XrpBlockInput } from "./schema.js";
