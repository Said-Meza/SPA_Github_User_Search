export function FormIcon(){

    const $figure=document.createElement("figure"),
          $img=document.createElement("img");
 
 
          $figure.classList.add("form__figure")
          $img.classList.add("form__icon")
 
          $img.src="app/assest/img/lupa.svg";
          $img.alt="Search";
 
          $figure.appendChild($img);
 
          return $figure
 }
 