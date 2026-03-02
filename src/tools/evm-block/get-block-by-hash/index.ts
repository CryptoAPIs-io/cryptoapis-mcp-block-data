import type { CryptoApisHttpClient } from "@cryptoapis-io/mcp-shared";
import { getBlockByHash, type GetBlockByHashInput } from "../../../api/evm-block/get-block-by-hash/index.js";

export async function handleGetBlockByHash(client: CryptoApisHttpClient, input: GetBlockByHashInput) {
    return getBlockByHash(client, input);
}
