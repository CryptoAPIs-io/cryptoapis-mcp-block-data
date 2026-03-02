import type {
    CryptoApisHttpClient,
    RequestMetadata,
} from "@cryptoapis-io/mcp-shared";
import type { GetBlockByHashRequest } from "./types.js";

export type GetBlockByHashInput = GetBlockByHashRequest & RequestMetadata;

export async function getBlockByHash(
    client: CryptoApisHttpClient,
    input: GetBlockByHashInput
) {
    const path = `/blocks/evm/${input.blockchain}/${input.network}/hash/${input.blockHash}/details`;

    return client.request<unknown>("GET", path, {
        query: { context: input.context },
    });
}
