import { ContentData } from "./ContentData.js";
import { ContentMore } from "./ContentMore.js";
import { ContentUser } from "./ContentUser.js";

export function Content(){

    const $content=document.createElement("section");

    $content.classList.add("main__content");

    $content.appendChild(ContentUser())
    $content.appendChild(ContentData())
    $content.appendChild(ContentMore())
    


    return $content;


}