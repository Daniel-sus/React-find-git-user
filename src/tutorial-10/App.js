import React from "react";
import "./project.css";
import Profile from "./Profile";
import Noprofile from "./Noprofile";
import axios from "axios";

const App = () => {
  const [userInfo, setUserInfo] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [loading, isLoading] = React.useState(false);
  let idRef = React.useRef();

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleGetUser = async () => {
    try {
      isLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${inputValue}`
      );
      isLoading(false);
      setUserInfo(data);
    } catch (error) {
      setUserInfo(null);
      isLoading(false);
    }
  };

  React.useEffect(() => {
    clearInterval(idRef.current);
    if (inputValue) {
      idRef.current = setTimeout(() => {
        handleGetUser();
      }, 600);
    }
  }, [inputValue]);

  return (
    <div id="app">
      <div className="app-container">
        <form className="app-form">
          <input
            value={inputValue}
            onChange={handleInput}
            type="text"
            className="app-input"
            placeholder="Укажите GitHub-аккаунт"
          />
          <button
            disabled={loading ? true : false}
            onClick={handleGetUser}
            className="app-form_btn"
          >
            Найти
          </button>
          {loading ? <h3>идет загрузка</h3> : null}
        </form>
        {userInfo ? (
          <Profile userInfo={userInfo} />
        ) : userInfo === null ? (
          <Noprofile />
        ) : null}
      </div>
    </div>
  );
};

export default App;
