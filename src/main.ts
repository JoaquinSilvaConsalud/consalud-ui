import "./style.css";
import { Button, Input, Card } from "./index";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div style="padding: 20px;">
    <h1>Consalud UI Components</h1>
    <div id="components"></div>
  </div>
`;

import { createElement } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("components");
if (container) {
  const root = createRoot(container);
  root.render(
    createElement("div", null, [
      createElement(Button, { key: "button", children: "Test Button" }),
      createElement(Input, { key: "input", placeholder: "Test Input" }),
      createElement(Card, { key: "card", children: "Test Card" }),
    ])
  );
}
