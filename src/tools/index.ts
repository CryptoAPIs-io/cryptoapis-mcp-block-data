import { systemInfoTool } from "@cryptoapis-io/mcp-shared";
import { evmBlockTool } from "./evm-block/index.js";
import { utxoBlockTool } from "./utxo-block/index.js";
import { xrpBlockTool } from "./xrp-block/index.js";

export const tools = [evmBlockTool, utxoBlockTool, xrpBlockTool, systemInfoTool] as const;
