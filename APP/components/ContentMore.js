import { ContentMoreContainer1 } from "./ContentMoreContainer1.js";
import { ContentMoreContainer2 } from "./ContentMoreContainer2.js";

export function ContentMore() {

    const $more=document.createElement("section");
    
    $more.classList.add("main__more")
    $more.classList.add("container")


    //section 1
    $more.appendChild(ContentMoreContainer1())
    //section 2
    $more.appendChild(ContentMoreContainer2())


    return $more;
  }
  