import type { CryptoApisHttpClient } from "@cryptoapis-io/mcp-shared";
import {
    listTransactionsByBlockHash,
    type ListTransactionsByBlockHashInput,
} from "../../../api/utxo-block/list-transactions-by-block-hash/index.js";

export async function handleListTransactionsByBlockHash(
    client: CryptoApisHttpClient,
    input: ListTransactionsByBlockHashInput
) {
    return listTransactionsByBlockHash(client, input);
}
