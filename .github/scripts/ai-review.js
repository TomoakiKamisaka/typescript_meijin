import OpenAI from "openai";
import { execSync } from "child_process";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 差分取得
const diff = execSync("git diff origin/main...HEAD --unified=0").toString();

// ChatGPTにレビュー依頼
const prompt = `
あなたはTypeScriptとReactの熟練エンジニアです。
以下のPull Requestの差分をレビューし、改善点・潜在的なバグ・命名の違和感を指摘してください。

---差分---
${diff}
`;

const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{ role: "user", content: prompt }],
});

console.log("=== AI Code Review ===");
console.log(response.choices[0].message.content);

