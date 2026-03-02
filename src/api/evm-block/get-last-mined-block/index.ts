import type { CryptoApisHttpClient, RequestMetadata } from "@cryptoapis-io/mcp-shared";
import type { GetLastMinedBlockRequest } from "./types.js";

export type GetLastMinedBlockInput = GetLastMinedBlockRequest & RequestMetadata;

export async function getLastMinedBlock(
    client: CryptoApisHttpClient,
    input: GetLastMinedBlockInput
) {
    const path = `/blocks/evm/${input.blockchain}/${input.network}/latest/details`;

    return client.request<unknown>("GET", path, {
        query: { context: input.context },
    });
}
