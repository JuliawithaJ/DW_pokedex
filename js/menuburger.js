document.getElementById("btn-open-menu").addEventListener("click", function(){
    document.getElementById("menu").classList.add("menu-is-open");
    document.getElementById("menu").classList.remove("menu-is-closed");
});
document.getElementById("btn-close-menu").addEventListener("click", function(){
    document.getElementById("menu").classList.add("menu-is-closed");
    document.getElementById("menu").classList.remove("menu-is-open");
});

