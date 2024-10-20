import { ContentDataFollowers } from "./ContentDataFollowers.js";
import { ContentDataFollowings } from "./ContentDataFollowings.js";
import { ContentDataRepos } from "./ContentDataRepos.js";

export function ContentData() {
    const $data=document.createElement("section")

    $data.classList.add("main__data")
    $data.classList.add("container")

    $data.appendChild(ContentDataRepos())
    $data.appendChild(ContentDataFollowers())
    $data.appendChild(ContentDataFollowings())

    return $data;
  }
  