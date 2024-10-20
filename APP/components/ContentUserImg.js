export function ContentUserImg() {
    
    const $figure=document.createElement("figure"),
         $img=document.createElement("img")

         $figure.classList.add("user__figure")
         $img.classList.add("user__img")
         $img.id="user_img";
         $img.alt="user";
         $img.src="app/assest/img/792435-min.jpg";


    
    $figure.appendChild($img)     
    
    return $figure 
  }