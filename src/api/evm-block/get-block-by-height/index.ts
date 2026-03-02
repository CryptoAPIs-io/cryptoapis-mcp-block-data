import type {
    CryptoApisHttpClient,
    RequestMetadata,
} from "@cryptoapis-io/mcp-shared";
import type { GetBlockByHeightRequest } from "./types.js";

export type GetBlockByHeightInput = GetBlockByHeightRequest & RequestMetadata;

export async function getBlockByHeight(
    client: CryptoApisHttpClient,
    input: GetBlockByHeightInput
) {
    const path = `/blocks/evm/${input.blockchain}/${input.network}/height/${input.blockHeight}/details`;

    return client.request<unknown>("GET", path, {
        query: { context: input.context },
    });
}
