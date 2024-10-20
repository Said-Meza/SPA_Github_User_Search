import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./helpers/Router.js";

export function App(){
    
    const $root = document.getElementById("root");
     $root.innerHTML="";
     $root.appendChild(Header());

     $root.appendChild(Main());

     Router();


}