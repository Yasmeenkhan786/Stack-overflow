import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "./HomeMainbar.css";
import QuestionsList from "./QuestionsList";

const HomeMainbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  var user = useSelector((state) => state.currentUserReducer);
  const questionList = useSelector(state => state.questionReducer);
  
  const checkAuth =()=>{
    if (user === null) {
          alert("Login or signup to ask a question");
          navigate("/Auth");
        } else {
    navigate("/AskQuestions")
        }
  }
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? <h1>Top Questions</h1> : <h1>All Questions</h1>}
        <button onClick={()=>{
          checkAuth()
        }} className="ask-btn">
          Ask question
        </button>
      </div>
      <div>
        {questionList.data === null ? (
          <h1>Loading....</h1>
        ) : (
          <>
            <p>{questionList.data.length} questions</p>
            <QuestionsList questionList={questionList.data} />
                    </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
