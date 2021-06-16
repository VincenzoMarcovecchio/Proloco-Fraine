// in src/components/LearningOptions/LearningOptions.jsx

import React from "react";


const LearningOptions = (props) => {
  const options = [
    { text: "Problemi di cinghiali", handler: () => {}, id: 1 },
    { text: "Problemi di serpenti", handler: () => {}, id: 2 },
    { text: "Tasse", handler: () => {}, id: 3 },
    { text: "boh", handler: () => {}, id: 4 },
    { text: "boh2", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <> <style>{`
  .learning-options-container {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .learning-option-button {
    padding: 0.5rem;
    border-radius: 25px;
    background: transparent;
    border: 1px solid green;
    margin: 3px;
  }`}</style> <div className="learning-options-container">{optionsMarkup}</div>;

</>
};

export default LearningOptions;
