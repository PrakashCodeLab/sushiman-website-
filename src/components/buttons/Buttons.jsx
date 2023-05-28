
import { AiOutlinePlayCircle } from "react-icons/ai";
import "./Buttons.scss";

const Buttons = ({ BtnStyle, Text }) => {
  return (
    <div>
      <button className={`btn ${BtnStyle}`}>
        {BtnStyle !== "btn-primary" ? (
          <>
            <AiOutlinePlayCircle className="play-icon" /> <span>{Text}</span>
          </>
        ) : (
          Text
        )}
      </button>
    </div>
  );
};

export default Buttons;
