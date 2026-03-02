import type {
    CryptoApisHttpClient,
    RequestMetadata,
    OffsetPaginationParams,
} from "@cryptoapis-io/mcp-shared";
import type { ListTransactionsByBlockHashRequest } from "./types.js";

export type ListTransactionsByBlockHashInput = ListTransactionsByBlockHashRequest &
    RequestMetadata &
    OffsetPaginationParams;

export async function listTransactionsByBlockHash(
    client: CryptoApisHttpClient,
    input: ListTransactionsByBlockHashInput
) {
    const path = `/blocks/utxo/${input.blockchain}/${input.network}/hash/${input.blockHash}/transactions`;

    return client.request<unknown>("GET", path, {
        query: {
            context: input.context,
            limit: input.limit,
            offset: input.offset,
        },
    });
}
