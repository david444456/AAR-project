const root = document.documentElement;

eventListeners();

function eventListeners() {
    window.addEventListener('resize', changeValueOfScreen);
}

function changeValueOfScreen(){
    const value = window.screen.availWidth + "px";
    root.style.setProperty("--screen-x", value);
    console.log(window.screen.width + " " + root.style.getPropertyValue("--screen-x"));
}