import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config();

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function testKey() {
  try {
    const msg = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 10,
      system: "You are a helpful assistant",
      messages: [{ role: "user", content: "Say hello" }],
    });
    console.log(msg.content[0].text);
  } catch (err) {
    console.error(err);
  }
}

testKey();
