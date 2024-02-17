require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

// Converts the code from one language to another (OpenAi as transpiler):
async function convertCode(input, languagePairs) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          `task: just convert from ${languagePairs.from.toLowerCase()} to ${languagePairs.to.toLowerCase()} executable code\n` +
          "```" +
          `${languagePairs.from.toLowerCase()}\n` +
          input +
          "\n```\n" +
          "output: just the converted code in markdown format.",
      },
    ],
    model: "gpt-4",
  });

  return completion.choices[0].message.content
    .split("\n")
    .splice(1, completion.choices[0].message.content.split("\n").length - 2);
}

// generate response for explaining a line of code (OpenAi as explainer):
async function explainCode(input, languagePairs) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "task: explain very shortly what this line of code does\n```" +
          `${languagePairs.to.toLowerCase()}` +
          input +
          "\n```\n" +
          "output: limit the response, maximum 1000 characters",
      },
    ],
    model: "gpt-4",
  });

  return completion.choices[0].message.content;
}

module.exports = { openai, convertCode, explainCode };
