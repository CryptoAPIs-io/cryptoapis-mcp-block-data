import type { CryptoApisHttpClient } from "@cryptoapis-io/mcp-shared";
import {
    listLatestMinedBlocks,
    type ListLatestMinedBlocksInput,
} from "../../../api/xrp-block/list-latest-mined-blocks/index.js";

export async function handleListLatestMinedBlocks(
    client: CryptoApisHttpClient,
    input: ListLatestMinedBlocksInput
) {
    return listLatestMinedBlocks(client, input);
}
