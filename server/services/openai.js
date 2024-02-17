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
          `task: just convert from ${languagePairs.from.toLowerCase()} to ${languagePairs.to.toLowerCase()} executable code\noutput: just the converted code in markdown format. Strictly don't any extra text except markdown code\n` +
          "```" +
          `${languagePairs.from.toLowerCase()}\n` +
          input +
          "\n```\n",
      },
    ],
    model: "gpt-4",
  });

  return (
    completion.choices[0].message.content
      // .split("```javascript")[1]
      // .split("```")[0]
      .split("\n")
      .splice(1, completion.choices[0].message.content.split("\n").length - 2)
    // .filter((ele) => ele)
  );
}

// generate response for explaining a line of code (OpenAi as explainer):
async function explainCode(input, languagePairs, language = "english") {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "task: explain very shortly what this line of code does in " +
          language +
          "\n```" +
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
