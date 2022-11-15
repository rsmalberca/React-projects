// this is the first file to execute!!!

import ReactDOM from "react-dom/client";
// we are, here, importing ReactDOM from the react-dom package.

import "./index.css";
import App from "./App";

// WE ONLY DO THIS ONCE FOR OUR ROOT COMPONENT!!!!!
const root = ReactDOM.createRoot(document.getElementById("root"));
// here we are calling a method on it. This creates basically the main entry point, the main hook of the overall user interface we are about to build with React.
// This element with the ID 'root' is a div created in the index.html file (located in the public folder). So it's this div where the React-based user interface should be rendered into.
//the method createRoot is from the react (react-dom) library, in order to tell react that this is the main place where the React application gets rendered to.

root.render(<App />);

// we call the method render on that object stored in the variable 'root', to tell react what should be render on that root element, in this case, App.js.
// './' means: please look in the same folder this index.js is. it's the relative path where that App.js file is stored in.

// IMPORTANT: when you import other JS file or libraries you ommit the .js, only use it (.css,etc) when the file isn't a JS file.
