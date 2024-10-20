export function ContentUserBio() {

    const $bio=document.createElement("section"),
         $p=document.createElement("p");


    $bio.classList.add("main__bio");
    $bio.classList.add("container");

    $p.classList.add("main__paragraph");
    $p.id="main__paragraph";
    $p.textContent="People keep asking if I'm back, and I haven't really had an answer. But now, yeah, I'm thinking I'm back.";

    $bio.appendChild($p);

    return $bio
  }