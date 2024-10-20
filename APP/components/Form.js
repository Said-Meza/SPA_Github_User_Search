import { FormIcon } from "./FormIcon.js";
import { InputSearch } from "./FormSearch.js";

export function Form(){
    
    const $section=document.createElement("section"),
        $form=document.createElement("form"),
        $div=document.createElement("div"),
        $btn=document.createElement("button");

    $section.classList.add("main__form");

    $form.classList.add("form__form");
    $form.method="post";

    $div.classList.add("form__search")

    $btn.classList.add("form__btn")
    $btn.textContent="Search"


    $div.appendChild(FormIcon())
    $div.appendChild(InputSearch())
    $div.appendChild($btn)
    $form.appendChild($div)
    $section.appendChild($form)

    return $section;


}