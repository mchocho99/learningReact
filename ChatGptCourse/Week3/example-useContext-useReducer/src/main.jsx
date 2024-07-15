import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import { PeopleProvider } from "./context/People.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <PeopleProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </PeopleProvider>
    </AppProvider>
  </React.StrictMode>
);
