import type { CryptoApisHttpClient, RequestMetadata } from "@cryptoapis-io/mcp-shared";
import type { GetLastMinedBlockRequest } from "./types.js";

export type GetLastMinedBlockInput = GetLastMinedBlockRequest & RequestMetadata;

export async function getLastMinedBlock(
    client: CryptoApisHttpClient,
    input: GetLastMinedBlockInput
) {
    const path = `/blocks/xrp/${input.network}/latest/details`;

    return client.request<unknown>("GET", path, {
        query: { context: input.context },
    });
}
