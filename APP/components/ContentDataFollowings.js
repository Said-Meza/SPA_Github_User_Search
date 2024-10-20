export function ContentDataFollowings() {

    const $Followings=document.createElement("div"),
         $h3=document.createElement("h3"),
         $h2=document.createElement("h2");

        $Followings.classList.add("conteiner")

        $h3.classList.add("data__inf");
        $h3.textContent="Following";

        $h2.classList.add("data__number");
        $h2.id="followings";
        $h2.textContent="52";

        $Followings.appendChild($h3);
        $Followings.appendChild($h2);
    

    return $Followings
  }