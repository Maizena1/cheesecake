const heroTitle = document.getElementById("hero-title");
const highlightsDots = document.getElementById("highlights-dots");
const loadData = async () => (await fetch("../data-hero.json")).json();
const heroFragment = document.createDocumentFragment();
const dotsFragment = document.createDocumentFragment();


async function init(){
    const data = await loadData();
    data.forEach((item) => {

        const lengthDataArray = data.length;

        if (item.title){
            const h1 = document.createElement("h1");
            h1.textContent = item.title;
            heroFragment.appendChild(h1);
        }

        const dot = document.createElement("button");
        dot.classList.add("dot")
        dotsFragment.appendChild(dot);
    });
    
    heroTitle.appendChild(heroFragment);
    highlightsDots.appendChild(dotsFragment);
}




init()
