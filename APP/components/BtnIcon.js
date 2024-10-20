export function BtnIcon(){

   const $figure=document.createElement("figure"),
         $img=document.createElement("img");


         $figure.classList.add("hero__figure")
         $img.classList.add("hero__img")

         $img.src="app/assest/img/sun.svg";
         $img.alt="Light";

         $figure.appendChild($img);

         return $figure
}
