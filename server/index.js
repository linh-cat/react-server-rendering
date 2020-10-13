import React from "react";
import express from "express";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";
import { App } from "../client/App";

const app = new express();
const data = {
  question: [
    {
      questionId: "Q1",
      content: "Should we use Jquery or Fetch for Ajax?",
    },
  ],
  answers: [
    {
      answerId: "A1",
      questionId: "Q1",
      upvotes: 2,
      content: "Jquery",
    },
    {
      answerId: "A2",
      questionId: "Q1",
      upvotes: 1,
      content: "Fetch",
    },
    {
      answerId: "A3",
      questionId: "Q2",
      upvotes: 1,
      content: "Performance",
    },
    {
      answerId: "A4",
      questionId: "Q2",
      upvotes: 2,
      content: "No Description",
    },
  ],
};
app.use(express.static("dist"));

app.get("/", async (_req, res) => {
  const index = readFileSync(`public/index.html`, `utf-8`);
  const rendered = renderToString(<App {...data} />);
  res.send(index.replace("{{rendered}}", rendered));
});

app.listen(8888);

console.info("Server is listening");
