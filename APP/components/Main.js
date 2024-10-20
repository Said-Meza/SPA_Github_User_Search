import { Content } from "./Content.js";
import { Form } from "./Form.js";


export function Main(){
    
    const $main=document.createElement("main");

    $main.classList.add("main");
    $main.classList.add("container");

    //hijo 1
    $main.appendChild(Form());
    
    //hijo 2
    $main.appendChild(Content());

    


    return $main
}