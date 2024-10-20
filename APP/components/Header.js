import { Logo } from "./Logo.js";
import { Btndarkmode } from "./Btndarkmode.js";

export function Header(){


    const $header=document.createElement("header"),
     $div=document.createElement("div");


    $header.classList.add("hero"),
    $header.classList.add("container")
    $div.classList.add("hero__header")


    $div.appendChild(Logo());
    $div.appendChild(Btndarkmode());


    $header.appendChild($div);


    return $header;
}