console.log("Hello World!");
var sheet, rules;
window.onload = () => {
    const heroImage = document.getElementById("hero__image");
    const hoverChangeElementArray = [...document.querySelectorAll(".changeImageOnHover")];
    hoverChangeElementArray.forEach((element,index) => {
        element.addEventListener("mouseover", (e) => {
            const newSource = e.target.dataset.src;
            let ext = ".jpg";
            if (newSource.substr(0,4) === "nzxt") {
                ext = ".png";
            }
            heroImage.src = "/img/" + newSource + ext;
            heroImage.alt = newSource;
            console.log("Hello")
        })
    })
    const articleContent = document.querySelector("p.article + *");
    sheet = document.styleSheets[0];
    rules = sheet.cssRules;
    document.addEventListener("keyup", (e) => {
        console.log(e.code);
       if(e.code === "KeyH") {
            e.preventDefault();
            console.log(rules);
            [...rules].forEach((rule, index) => {
                if(rule.selectorText === "p.article + *") {
                    let newRule = rule;
                    if(rule.style.display === "block") {
                        console.log("Putting away article...");
                        console.log(index);
                        console.log(typeof index)
                        //newRule.style.display = "none";
                        //console.log(rules);
                        rules[index].style.display = 'none';
                        //console.log(rules);
                        return;
                    }
                    if(rule.style.display === "none") {
                        newRule.style.display = "block";
                        rules[index].style.display = "block";
                        return;
                    }
                    console.log(newRule);
                    //rules[index] = newRule;

                    console.log(rules); 
                }
            })
        }     
    });
}

function changeToFD() {
    document.getElementById("hero__image").src = "./img/fractal-design-torrent-nano-case-hero.jpg";
}

function changeToNZXT() {
    document.getElementById("hero__image").src = "./img/nzxt-h1-v2-case-hero-2.png";
}

function changeToLianLi() {
    document.getElementById("hero__image").src = "./img/lian-li-tu150-case-hero.jpg";
}

function cycleImg(interval=1000) {
    setTimeout(changeToNZXT,interval*1);
    setTimeout(changeToLianLi, interval*2);
    setTimeout(changeToFD, interval*3);

}