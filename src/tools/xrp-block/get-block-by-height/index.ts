import type { CryptoApisHttpClient } from "@cryptoapis-io/mcp-shared";
import {
    getBlockByHeight,
    type GetBlockByHeightInput,
} from "../../../api/xrp-block/get-block-by-height/index.js";

export async function handleGetBlockByHeight(
    client: CryptoApisHttpClient,
    input: GetBlockByHeightInput
) {
    return getBlockByHeight(client, input);
}
