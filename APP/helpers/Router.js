import Api from "./Api.js"

export async function Router(){

    const d = document,
    $input = d.getElementById("txtsearch"),
    $name = d.getElementById("inf__name"),
    $username = d.getElementById("username"),
    $date = d.getElementById("date_start"),
    $bio = d.getElementById("main__paragraph"),
    $repos = d.getElementById("repos"),
    $followers = d.getElementById("followers"),
    $followings = d.getElementById("followings"),
    $gps = d.getElementById("gps"),
    $github = d.getElementById("github"),
    $x = d.getElementById("x"),
    $home = d.getElementById("home"),
    $avatar = d.getElementById("user_img"),
    $main = d.querySelector(".main__content");


    d.addEventListener("submit", async (e)=>{

        e.preventDefault()

        if (!e.target.matches(".form__form")) {
            return;
        }

        if (e.target.matches(".form__form")) {

            if (e.target.txtsearch.value === null || e.target.txtsearch.value === "") {
                return;
            }else {
                

                let url = `${Api.api}${e.target.txtsearch.value}`;

                try {
                    const res = await fetch(url);
                    const data = await res.json();
    
                    if (!res.ok) {
                        throw { status: res.status, statusText: res.statusText }
                    }
    
                    let date = new Date(data.created_at)
                    let fecha = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' })
    
                    $avatar.src = `${data.avatar_url ? (data.avatar_url) : ("app/assest/img/perfil.svg")} `;
                    $name.textContent = `${data.name}`;
                    $username.textContent = `${data.login}`;
                    $date.textContent = `Joined ${fecha}`;
                    $bio.textContent = `${data.bio ? (data.bio) : ("Not Text")}`;
                    $repos.textContent = `${data.public_repos}`;
                    $followers.textContent = `${data.followers}`;
                    $followings.textContent = `${data.following}`;
                    $gps.textContent = `${data.location ? (data.location) : ("Not Inf")}`;
                    $x.textContent = `${data.twitter_username ? (`@${data.twitter_username}`) : ("Not Account")}`;
                    $github.href = `${data.html_url ? (data.html_url) : "#"}`;
                    $home.href = `${data.blog ? (data.blog) : ("#")}`;
    
    
                } catch (err) {
                    
                    let message = err.statusText || "ocurrio un error";
                    $main.innerHTML=`<p><b>Error ${err.status}: ${message}</b></p>`
                }
    
                $input.value = "";
    
    
            }

        }

     })


}