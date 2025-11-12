import { query } from '@anthropic-ai/claude-agent-sdk';
import type { HookJSONOutput } from "@anthropic-ai/claude-agent-sdk";
import * as path from "path";

async function main() {
  const q = query({
    prompt: 'Hello, Claude! Please introduce yourself in one sentence.',
  });

  const response: string[] = [];

  for await (const message of q) {
    if (message.type === 'assistant' && message.message) {
      const textContent = message.message.content.find((c: any) => c.type === 'text');
      if (textContent && 'text' in textContent) {
        console.log('Claude says:', textContent.text);
        response.push('Claude says:', textContent.text);
      }
    }
  }
  return response;
}

export { main };
