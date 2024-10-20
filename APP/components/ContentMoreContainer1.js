export function ContentMoreContainer1() {

    const $divcontent1=document.createElement("div"),
         $divmore1=document.createElement("div"),
         $divmore2=document.createElement("div"),
         $figure1=document.createElement("figure"),
         $figure2=document.createElement("figure"),
         $img1=document.createElement("img"),
         $img2=document.createElement("img"),
         $p1=document.createElement("p"),
         $a1=document.createElement("a");

    
    $divcontent1.classList.add("more_container")


    $divmore1.classList.add("more__inf")
    $figure1.classList.add("more__figure")
    $img1.classList.add("more__img")
    $img1.src="app/assest/img/gps.svg"
    $img1.alt="location"
    $p1.textContent="Bielorrusia"
    $p1.id="gps"
    $p1.classList.add("more__text");

    $figure1.appendChild($img1)
    $divmore1.appendChild($figure1)
    $divmore1.appendChild($p1)

    $divmore2.classList.add("more__inf")
    $figure2.classList.add("more__figure")
    $img2.classList.add("more__img")
    $img2.src="app/assest/img/enlace.svg"
    $img2.alt="location"

    $a1.textContent="htps://github.blog"
    $a1.id="github"
    $a1.href="#";
    $a1.classList.add("more__text");
    $a1.classList.add("more__text__a");

    $figure2.appendChild($img2)
    $divmore2.appendChild($figure2)
    $divmore2.appendChild($a1)

    

    $divcontent1.appendChild($divmore1)
    $divcontent1.appendChild($divmore2)




  
    return $divcontent1;
  }
  