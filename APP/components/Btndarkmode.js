import { BtnIcon } from "./BtnIcon.js"
import { light,dark } from "../helpers/darkmode.js"

export function Btndarkmode(){
    let darkmode=false;
    const $btndarkmode=document.createElement("div"),
         $a=document.createElement("a"),
         $span=document.createElement("span")

    $btndarkmode.classList.add("hero__dark")
    $btndarkmode.classList.add("darkmode")

    $a.classList.add("hero__dark__btn")
    $a.href="#"

    $span.classList.add("hero__span");
    $span.id="modetxt";
    $span.textContent="LIGHT";


    $a.appendChild($span)
    $a.appendChild(BtnIcon())


    $btndarkmode.appendChild($a)

    document.addEventListener("click", (e) => {

        if (e.target.matches(".hero__dark__btn") || e.target.matches(".hero__span") || e.target.matches(".hero__img")) {
            e.preventDefault();
           
            darkmode = !darkmode;
    
            if (darkmode) {
                light();
                $span.textContent = "DARK";
            }
            else {
                dark();
                $span.textContent = "LIGHT"
            }
        }
    })

    return $btndarkmode;
}