console.log("Hello World!");
window.onload = () => {
    const heroImage = document.getElementById("hero__image");
    const hoverChangeElementArray = [...document.querySelectorAll(".changeImageOnHover")];
    hoverChangeElementArray.forEach((element,index) => {
        element.addEventListener("mouseover", (e) => {
            const newSource = e.target.dataset.src;
            heroImage.src = "/img/" + newSource + ".jpg";
            heroImage.alt = newSource;
            console.log("Hello")
        })
    })
}