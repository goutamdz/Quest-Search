import React, { useCallback, useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import axios from 'axios';
import Card from './components/Card';
import Button from './components/Button';
import {baseURL} from "./constant.js"; //getting backend server url from constant.js & there from .env file

function App() {
  const [selectedFilters, setSelectedFilters] = useState(["MCQ"]);
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(0);
  const [questionData, setQuestionData] = useState([]);
  const [totalResponse, setTotalResponse] = useState(0);
  const [loading, setLoading] = useState(false);
  

  const handleSearch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseURL}/question?title=${title}&page=${page}&selectedFilters=${selectedFilters.join(",")}`);

      if (res.data) {
        setQuestionData(res.data.Document);
        setTotalResponse(res.data.total);
      }
      console.log("Response data:", res.data);
    } catch (error) {
      console.error("Error during handleSearch:", error);
    } finally {
      setLoading(false);
    }
  }, [title, page, selectedFilters]);

  useEffect(() => {
    handleSearch();
  }, [page, selectedFilters]);

  // Reset page to 0 whenever filters or title change
  useEffect(() => {
    setPage(0);
  }, [title, selectedFilters]);

  return (
    <div>
      <SearchBox
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        setTitle={setTitle}
        handleSearch={handleSearch}
      />
      {loading && <p>Loading...</p>}
      <div>
        <h3 className='mx-5 text-green-600 font-semibold'>Total Results: {totalResponse}</h3>
        <ul>
          {questionData.map((question, index) => (
            <Card key={index} question={question} />
          ))}
        </ul>
      </div>
      <br />
      {totalResponse>10 &&
        <div className="border p-4 rounded shadow-md bg-white max-w-md mx-auto flex justify-between">
          {page>0 && <Button label="Previous" onClick={(e) => setPage(page - 1)} />}
          <span>Page: {page + 1} of {Math.ceil(totalResponse/10-(page*10))}</span>
          <Button label="Next" onClick={(e) => setPage(page + 1)} />
        </div>
      }

    </div>
  );
}

export default App;
