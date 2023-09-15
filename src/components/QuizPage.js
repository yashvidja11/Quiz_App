import { QuizData, HindiQuizData } from "../QuizData";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./css/QuizPage.css";
import { useEffect, useState } from "react";
// import { answershow } from "./AnswerSlice";
// import { youranswershow } from "./YourAnswerSlice";
// import { scoreshow } from "./scoreSlice";
import { answershow } from "./slice/AnswerSlice";
import { youranswershow } from "./slice/YourAnswerSlice";
import { scoreshow } from "./slice/scoreSlice";
// import { ansdata } from "./Slice/QuizdataSlice";
const QuizPage = () => {
  const dispatch = useDispatch();
  const [score, setScore] = useState(0);
  const [correctOption, setCorrectOption] = useState([]);
  const[color,setcolor] = useState()

  const language = useSelector((state)=>state.Data.value);
  const data = language ? QuizData : HindiQuizData;
  let { quizID } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(score);
    dispatch(scoreshow(score))
  }, [score]);

  const chnageQuestionHandler = () => {
    // updateData();
    // console.log(score);

    dispatch(youranswershow({ i: quizID, value: correctOption }));
    
    if (correctOption === data[quizID - 1].answer) {
      setScore(score + 1);
      //  dispatch(scoreshow(score))
    }

    if (quizID < QuizData.length) {
      navigate(`/quiz/${Number(quizID) + 1}`);
    }
    
  };
  const previesQuestion = () => {
    if (quizID > 1) {
      navigate(`/quiz/${quizID - 1}`);
    } else {
    }
  };
  // const updateData = () => {
  //   if (correctOption === data[quizID - 1].answer) {
  //     setScore(score + 1);
  //   }
  // };
  // console.log(correctOption, { i: quizID, value: correctOption });
  return (
    <div className="bodydata">
      <div className="page-data">
        <div className="main-div">
          <div className="container">
            <span>{quizID}.</span>
            <span>{data[quizID - 1].question}</span>
          </div>
          <div className="option">
            {data[quizID - 1].options.map((option, i) => (
              <button
                className={`mcqbtn ${
                  correctOption === option ? "colorchange" : null
                }`}
                key={i}
                onClick={() => {
                  setCorrectOption(option);
                  // console.log(correctOption)
                }}
              required>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div>
        {quizID !== "1" && (
          <button className="previus" onClick={previesQuestion}>
            Previes
          </button>
        )}
        {quizID !== "5" && (
          <button className="next" onClick={chnageQuestionHandler}>
            Next
          </button>
        )}
        {quizID === "5" && (
          <input
            onClick={() => {
              setScore(score + 1);
              if (correctOption === data[quizID - 1].answer){
                dispatch(scoreshow(score+1))

              }
              
              dispatch(answershow(data));
              // dispatch(ansdata(data[quizID-1].answer))
              dispatch(youranswershow({ i: quizID, value: correctOption }));
              
              
              navigate("/result");
              
            }}
            className="next"
            type="submit"
          />
        )}
      </div>
      <div className="pagebtn">
        <button onClick={()=> navigate("/quiz/1")}>1</button>
        <button onClick={()=> navigate("/quiz/2")}>2</button>
        <button onClick={()=> navigate("/quiz/3")}>3</button>
        <button onClick={()=> navigate("/quiz/4")}>4</button>
        <button onClick={()=> navigate("/quiz/5")}>5</button>
        
      
      </div>
    </div>
  );
};
export default QuizPage;
