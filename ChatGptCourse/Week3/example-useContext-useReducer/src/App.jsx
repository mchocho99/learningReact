import { useContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AppContext, actions } from "./context/AppContext";
import DecrementButton from "./components/DecrementButton";
import "./App.css";
import SetValueForm from "./components/SetValueForm";

function App() {
  const { state, dispatch } = useContext(AppContext);
  const { count } = state;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            dispatch({ type: actions.INCREMENT });
          }}
        >
          count is {count}
        </button>
        <DecrementButton />
        <br />
        <SetValueForm />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
