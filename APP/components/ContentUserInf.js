export function ContentUserInf() {
    const $inf=document.createElement("section"),
         $div=document.createElement("div"),
         $h3=document.createElement("h3"),
         $h5=document.createElement("h5"),
         $p=document.createElement("p");
         

    $inf.classList.add("user__inf");
    $div.classList.add("user__inf__name");

    $h3.classList.add("inf__name")
    $h5.classList.add("inf__username")
    $p.classList.add("user__date")

    $h3.id="inf__name";
    $h5.id="username";
    $p.id="date_start";
    
    $h3.textContent="Jardani Jovanovich";
    $h5.textContent="Jonh Wick";
    $p.textContent="joined Octubre 2014";

    $div.appendChild($h3);
    $div.appendChild($h5);

    $inf.appendChild($div)
    $inf.appendChild($p)

   

    return $inf
  }