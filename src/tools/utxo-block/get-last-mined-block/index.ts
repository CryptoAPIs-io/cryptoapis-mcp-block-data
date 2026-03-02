import type { CryptoApisHttpClient } from "@cryptoapis-io/mcp-shared";
import {
    getLastMinedBlock,
    type GetLastMinedBlockInput,
} from "../../../api/utxo-block/get-last-mined-block/index.js";

export async function handleGetLastMinedBlock(
    client: CryptoApisHttpClient,
    input: GetLastMinedBlockInput
) {
    return getLastMinedBlock(client, input);
}
