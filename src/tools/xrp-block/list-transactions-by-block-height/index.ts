import type { CryptoApisHttpClient } from "@cryptoapis-io/mcp-shared";
import {
    listTransactionsByBlockHeight,
    type ListTransactionsByBlockHeightInput,
} from "../../../api/xrp-block/list-transactions-by-block-height/index.js";

export async function handleListTransactionsByBlockHeight(
    client: CryptoApisHttpClient,
    input: ListTransactionsByBlockHeightInput
) {
    return listTransactionsByBlockHeight(client, input);
}
