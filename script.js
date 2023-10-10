function toggleMenu(){
    const menuMobile = document.getElementById("menuMobile")

    if(menuMobile.className === "menuMobile-active"){
        menuMobile.className = "menuMobile"
    }else{
        menuMobile.className = "menuMobile-active"    
    }   
}
