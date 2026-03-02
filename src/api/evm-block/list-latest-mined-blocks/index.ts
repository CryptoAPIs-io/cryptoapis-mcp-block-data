import type { CryptoApisHttpClient, RequestMetadata } from "@cryptoapis-io/mcp-shared";
import type { ListLatestMinedBlocksRequest } from "./types.js";

export type ListLatestMinedBlocksInput = ListLatestMinedBlocksRequest & RequestMetadata & { count?: number };

export async function listLatestMinedBlocks(
    client: CryptoApisHttpClient,
    input: ListLatestMinedBlocksInput
) {
    const path = `/blocks/evm/${input.blockchain}/${input.network}/latest`;

    return client.request<unknown>("GET", path, {
        query: { context: input.context, count: input.count },
    });
}
