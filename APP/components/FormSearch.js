export function InputSearch(){
    
    const $input=document.createElement("input");
    
    $input.classList.add("form__search__input")
    $input.type="search";
    $input.placeholder="Search GitHub username...";
    $input.name="txtsearch";
    $input.id="txtsearch";
    $input.required="true"
    $input.autocomplete="false"

    return $input;

}