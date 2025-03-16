let menuIcon = document.getElementById("menu-icon")
let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "100vh";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}
function toggleDropdown() {
    let dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("active");
}


