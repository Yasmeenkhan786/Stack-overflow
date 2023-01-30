import React from "react";
import * as api from "../api";

export const askquestion = (questionData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postQuestion(questionData);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllquestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllquestions = () => async (dispatch) => {
  try {
    const { data } = await api.getAllquestions();
    dispatch({ type: "FETCH_ALL_QUESTIONS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuestion = (id, navigate) => async (dispatch) => {
  try {
    const { data } = api.deleteQuestion(id);
    dispatch(fetchAllquestions());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const voteQuestion = (id,value,userId)=> async (dispatch) =>{
  try {
    const {data} = await api.voteQuestion (id,value,userId)
    dispatch(fetchAllquestions())
  } catch (error) {
    console.log(error)
  }
}


export const postAnswer = (answerdata) => async (dispatch) => {
  try {
    const { id, noOfanswers, answerBody, userAnswered ,userId } = answerdata;
    const { data } = await api.postAnswer(id, noOfanswers, answerBody, userAnswered, userId);
    dispatch({ type: "POST_ANSWER", payload: data });
    dispatch(fetchAllquestions());
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = (id, answerId, noOfanswers) => async (dispatch) => {
  try {
    const { data } = await api.deleteAnswer(id, answerId, noOfanswers);
    dispatch(fetchAllquestions());
  } catch (error) {
    console.log(error);
    console.log('cannot delete');
  }
};
