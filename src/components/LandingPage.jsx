import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPlayerName, setError } from "../redux/reducers/playerSlice";
import openingMessage from "../utils/openingMessage";

const LandingPage = () => {
  const playerName = useSelector((state) => state.player.playerName);
  const error = useSelector((state) => state.player.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    const newName = event.target.value;
    dispatch(setPlayerName(newName));
    if (error) {
      dispatch(setError(null));
    }
  };

  const handlePlayClick = () => {
    if (!playerName) {
      dispatch(setError("Please enter your name"));
    } else {
      navigate("/play");
    }
  };

  return (
    <div className="container">
      <div className="landing-text">
        <h1>US Mobile Tech Challenge - Lilah August</h1>
        <p>{openingMessage}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          className="form-field"
          value={playerName}
          onChange={handleNameChange}
          style={{ borderColor: error ? "red" : "#ccc" }}
        />
      </div>
      <div>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <div className="error-space" />
        )}
      </div>
      <div>
        <button className="play-button" onClick={handlePlayClick}>
          Play!
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
