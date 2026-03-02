import type {
    CryptoApisHttpClient,
    RequestMetadata,
    OffsetPaginationParams,
} from "@cryptoapis-io/mcp-shared";
import type { ListTransactionsByBlockHeightRequest } from "./types.js";

export type ListTransactionsByBlockHeightInput = ListTransactionsByBlockHeightRequest &
    RequestMetadata &
    OffsetPaginationParams;

export async function listTransactionsByBlockHeight(
    client: CryptoApisHttpClient,
    input: ListTransactionsByBlockHeightInput
) {
    const path = `/blocks/xrp/${input.network}/height/${input.blockHeight}/transactions`;

    return client.request<unknown>("GET", path, {
        query: {
            context: input.context,
            limit: input.limit,
            offset: input.offset,
        },
    });
}
