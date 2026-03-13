import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { GetPromptResult } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import { formatSupportedChains } from "@cryptoapis-io/mcp-shared";
import { supportedChains } from "../resources/supported-chains.js";

export function registerPrompts(server: McpServer): void {
    server.registerPrompt(
        "inspect-block",
        {
            description: "Look up a block by height or hash and summarize its contents",
            argsSchema: {
                blockchain: z.string().describe("Blockchain name (e.g. ethereum, bitcoin, xrp)"),
                network: z.string().describe("Network name (e.g. mainnet, testnet, sepolia)"),
                blockIdentifier: z.string().describe("Block height number or block hash"),
            },
        },
        (args): GetPromptResult => ({
            messages: [
                {
                    role: "user",
                    content: {
                        type: "text",
                        text: `Use the appropriate block data tool (evm_block_data, utxo_block_data, or xrp_block_data) with action 'get-block' to fetch block ${args.blockIdentifier} on ${args.blockchain}/${args.network}. Summarize the block contents including: timestamp, transaction count, block size, miner/validator, and any other notable details.\n\n${formatSupportedChains(supportedChains)}`,
                    },
                },
            ],
        }),
    );
}
