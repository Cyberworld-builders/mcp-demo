import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "Translation Service",
  version: "1.0.0",
});

server.tool(
  "translate",
  {
    text: z.string().describe("The text to translate"),
    targetLanguage: z.enum(["spanish", "french", "german"]).describe("The target language"),
  },
  async ({ text, targetLanguage }) => {
    // Mock translation for simplicity
    const translatedText = `[Translated: "${text}" to ${targetLanguage}]`;
    return {
      content: [{ type: "text", text: translatedText }],
    };
  }
);

const transport = new StdioServerTransport();
server.connect(transport);