import "./css/language.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { changedata } from "./QuizdataSlice";
import { changedata } from "./slice/QuizdataSlice";

const Language = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const HindiDataHandler = () => {
    dispatch(changedata(false));
    // navigate('/hindiquiz/1')
    navigate("/quiz/1");
  };
  return (
    <div>
        <div className="hclass"><h1 className="lanselect">Which Language You Choose?</h1></div>
      <div className="button">
        <button
          onClick={() => {
            dispatch(changedata(true));
            navigate("/quiz/1");
          }}
        >
          English
        </button>
        <button onClick={HindiDataHandler}>Hindi</button>
      </div>
    </div>
  );
};
export default Language;
