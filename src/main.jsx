import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.jsx";
import store from "./store/store";

const container = document.getElementById("root");
const root = createRoot(container);

const render = () => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

render();

store.subscribe(render);
