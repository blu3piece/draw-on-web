import { createRoot } from "react-dom/client";
import App from "./app/App";

const root = document.createElement('div');
root.id = "drw-root";
document.body.appendChild(root);

createRoot(root).render(
  <App />
)
