import React from "react";

function App({ questions, answers }) {
  return (
    <div>
      <h1>Q&A Tool</h1>
      {questions.map(({ questionsId, content }) => (
        <div key={questionsId}>
          <h3>{content}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
