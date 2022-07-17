
const dotsFragment = document.createDocumentFragment();
const Highlights = document.getElementById("highlights");
const HighlightsDots = document.getElementById("highlights-dots");

let currentHeroIndex = 0;

const loadData = async () => (await fetch("../data-hero.json")).json();

async function init(){
    const data = await loadData();
    data.forEach((item, index) => {


        const dot = document.createElement("button");
        dot.classList.add("dot")
        dotsFragment.appendChild(dot);

        dot.addEventListener("click", () => {

            const h1 = document.createElement("h1");
            const h2 = document.createElement("h2");

            const heroFragment = document.createDocumentFragment();

            Highlights.innerHTML = "";
 
            h1.textContent = item.title;
            h2.textContent = item.subtitle;

            heroFragment.appendChild(h1);
            heroFragment.appendChild(h2);

            h1.classList.add("title")

            if(item.button){
                
                const button = document.createElement("button");
                button.textContent = item.button;
                heroFragment.appendChild(button);
                button.classList.add("highlights-button");

            }
            
            Highlights.appendChild(heroFragment);
        })

    });
    
    HighlightsDots.appendChild(dotsFragment);
}

init()