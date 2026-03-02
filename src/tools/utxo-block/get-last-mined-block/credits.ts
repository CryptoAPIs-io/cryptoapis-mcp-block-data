import type { CreditsPerBlockchain } from "@cryptoapis-io/mcp-shared";

/** Credits per blockchain (source: OpenAPI). Block Data UTXO get last mined block. */
export const credits: CreditsPerBlockchain = {
    bitcoin: 20,
    "bitcoin-cash": 24,
    dash: 22,
    dogecoin: 22,
    litecoin: 22,
    zcash: 26,
};
