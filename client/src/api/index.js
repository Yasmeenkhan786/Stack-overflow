import axios from "axios";

// const API = axios.create({ baseURL: "https://stack-overflow-yasmeen.vercel.app" });
const API = axios.create({ baseURL: "https://stackoverflow-clone-server-chi.vercel.app" });

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);


export const postQuestion = (questionData) => API.post("/questions/Ask", questionData);
export const getAllquestions = () => API.get("/questions/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) =>
  API.patch(`/questions/vote/${id}`, { value, userId });

export const postAnswer = (id, noOfanswers, answerBody, userAnswered, userId) =>
  API.patch(`/answer/post/${id}`, { noOfanswers, answerBody, userAnswered, userId });
export const deleteAnswer = (id, answerId, noOfanswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfanswers });

export const getAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile =(id ,updateData)=> API.patch(`/user/update/${id}`,updateData)
