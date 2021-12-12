const lightboxDiv = document.createElement("div");
lightboxDiv.id = "lightBoxBg";
document.body.appendChild(lightboxDiv);

const images = document.querySelectorAll(".card-roundnet-image img");
images.forEach( image => {
    image.addEventListener("click", e => {
        lightboxDiv.classList.add("active");
        const lightBoxImg = document.createElement("img");
        lightBoxImg.id = "lightBoxImg";
        lightBoxImg.src = image.src;
        lightboxDiv.appendChild(lightBoxImg);
    })
})

lightboxDiv.addEventListener("click", e => {
    cleanHTML();
    lightboxDiv.classList.remove("active");
});

// functions
function cleanHTML(){
    while(lightboxDiv.firstChild){
        lightboxDiv.removeChild(lightboxDiv.firstChild);
    }
}