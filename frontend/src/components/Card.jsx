import React from 'react';

const Card = ({ question }) => {
  return (
    <div className="border p-4 rounded shadow-md bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">{question.title}</h2>
      <p className="text-gray-700 mb-2">Type: {question.type}</p>
      {question.anangramType && (
        <p className="text-gray-700 mb-2">Anangram Type: {question.anangramType}</p>
      )}
      {question.blocks && (
        <div className="mb-2">
          <h3 className="font-semibold">Blocks:</h3>
          <ul className="list-disc pl-5">
            {question.blocks.map((block, index) => (
              <li key={index} className="text-gray-700">
                {block.text} - {block.showInOption ? "Shown" : "Hidden"} - {block.isAnswer ? "Answer" : "Not Answer"}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {question.options && (
        <div className="mb-2">
          <h3 className="font-semibold">options:</h3>
          <ul className="list-disc pl-5">
            {question.options.map((option, index) => (
              <li key={index} className="text-gray-700">
                {option.text} - {option.isCorrectAnswer ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      )}

      {question.solution && (
        <p className="text-gray-700 mb-2">Solution: {question.solution}</p>
      )}
    </div>
  );
};

export default Card;
