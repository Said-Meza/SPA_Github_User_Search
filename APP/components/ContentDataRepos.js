export function ContentDataRepos() {

    const $repos=document.createElement("div"),
         $h3=document.createElement("h3"),
         $h2=document.createElement("h2");

        $repos.classList.add("conteiner")

        $h3.classList.add("data__inf");
        $h3.textContent="Repos";

        $h2.classList.add("data__number");
        $h2.textContent="33";
        $h2.id="repos";

        $repos.appendChild($h3);
        $repos.appendChild($h2);
    

    return $repos
  }
  