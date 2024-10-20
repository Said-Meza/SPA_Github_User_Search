import { ContentUserBio } from "./ContentUserBio.js";
import { ContentUserImg } from "./ContentUserImg.js";
import { ContentUserInf } from "./ContentUserInf.js";


export function ContentUser() {
  
    const $user=document.createElement("section");

    $user.classList.add("main__user");
    $user.classList.add("container");

    $user.appendChild(ContentUserImg())
    $user.appendChild(ContentUserInf())
    $user.appendChild(ContentUserBio())
    
    
  return $user
  
  
}
