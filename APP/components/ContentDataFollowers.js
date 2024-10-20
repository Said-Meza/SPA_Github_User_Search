export function ContentDataFollowers() {

    const $Followers=document.createElement("div"),
         $h3=document.createElement("h3"),
         $h2=document.createElement("h2");

        $Followers.classList.add("conteiner")

        $h3.classList.add("data__inf");
        $h3.textContent="followers";

        $h2.classList.add("data__number");
        $h2.id="followers";
        $h2.textContent="3456";

        $Followers.appendChild($h3);
        $Followers.appendChild($h2);
    

    return $Followers
  }