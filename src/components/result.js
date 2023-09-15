import { useState } from "react";
import { useSelector } from "react-redux";
import "./css/result.css";

const Result = () => {
  const [hide, setHide] = useState(false);

  const Answer = useSelector((state) => state.Answer.answer);

  const Name = useSelector((state) => state.Name.name);

  const SurName = useSelector((state) => state.Name.surname);

  const youranswer = useSelector((state) => state.YourAnswer.youranswer);

  const score = useSelector((state) => state.Score.score);

  const obj = Object.entries(youranswer);
  
  console.log(Answer);

  
  const sc = Answer.reduce((acc, que, i) => {
    if (youranswer[i + 1] === que.answer) acc += 1;
    return acc;
  }, 0);
  console.log({ sc });

  //  {Answer.map((item)=(
  // <div>{item.Answer}</div>
  //  ))}
  // console.log(answer)
  return (
    <div>
      <p>{Answer.question}</p>
      <div className="namemsg">
        <h1>
          Congretulations ! {Name} You are Successfully Complete Your Exam{" "}
        </h1>
      </div>
      {hide && <div>
        <div className="score">
          <span>your score :{sc}</span>
          <span>Total Score : {Answer.length}</span>
        </div>

        <div>
          <div className="result">
            <div className="answer">
              <h2>Your Answer </h2>
              {obj.map((data) => (
                <div className="resultdata">
                  <span>{data[0]}</span>
                  <span>{data[1]}</span>
                </div>
              ))}
            </div>
            <div className="youranswer">
              <h2>CorrectAnswer</h2>

              {Answer.map((item) => (
                <div>{item.answer}</div>
              ))}
            </div>
          </div>
        </div>
      </div>}

      {!hide &&
        <div>
          <button
            className="resultbtn"
            onClick={() => {
              setHide(true);
            }}
          >
            View Your Result
          </button>
        </div>
      }

      
    </div> 
  );
};

export default Result;
