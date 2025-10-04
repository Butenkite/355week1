import { createRoot } from "react-dom/client";
import { createElement } from "react";

const root = createRoot(document.getElementById("root"));
const reactElement = <h1>Test 2</h1>;
console.log(reactElement);

root.render(reactElement);
