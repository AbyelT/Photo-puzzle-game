import "./styles.scss";
import { sum } from "./utils";
import { PhotoPuzzleGame } from "./puzzle";

// const para = document.createElement("p");
// para.textContent = `Hello World, 2 + 5 = ${sum(2, 5)}`;
// document.body.append(para);

// Get HTML elements, width, height and image
let start = document.getElementById("start-area")
let template = document.getElementById("template-area");
let height = document.querySelector(".puzzle-container").clientHeight
let width = document.querySelector(".puzzle-container").clientWidth
let imgsrc = "https://media.istockphoto.com/photos/panoramic-view-of-stockholm-old-town-sweden-picture-id1014912224?k=20&m=1014912224&s=612x612&w=0&h=9qR-eeodmWibz9Lx91OsQ3Wr7rk85yvLSw0TXYHZw88="

// start an instance
const photoTest = new PhotoPuzzleGame(start, template, width, height, imgsrc)
photoTest.setup();
