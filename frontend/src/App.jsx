import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [questionData, setQuestionData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalResponse,setTotalResponse] = useState(0);

  const handleSubmit = useCallback(
    async (e) => {
      e && e.preventDefault();
      try {
        let res = await axios.post(
          `http://localhost:3000/question?title=${question}&page=${page}`,
          { question: question }
        );
        console.log(res.data);
        setQuestionData(res.data.Document);
        setTotalResponse(res.data.TotalResponse[0].count);
      } catch (error) {
        console.error("Error fetching data:", error);
        setQuestionData([]);
      }
    },
    [page, question]
  );

  useEffect(() => {
    handleSubmit();
  }, [page, handleSubmit]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <label>
        Question:
        <input
          type="text"
          name="question"
          onChange={(e) => setQuestion(e.target.value)}
          className="bg-red-50 m-3"
        />
      </label>
      {questionData.length === 0 ? (
        <h1>No data found</h1>
      ) : (
        questionData.map((data) => (
          <div className="m-10" key={data._id}>
            <h1>{data.title}</h1>
            <h2>{data.solution}</h2>
          </div>
        ))
      )}
      {questionData.length >=10 && <button onClick={handleNext}>Next</button>}<br />
      {page >= 1 && <button onClick={handlePrev}>Prev</button>}
    </>
  );
}

export default App;
