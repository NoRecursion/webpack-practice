import "./styles.css"
import { greeting } from "./greeting.js";
import logo from "./images/logo.svg"

console.log(greeting);
const image = document.createElement("img");
image.src = logo;
document.body.appendChild(image);