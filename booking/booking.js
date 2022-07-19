
const divLocationFragment = document.createDocumentFragment()

const pickBranch = document.getElementById("pick-branch")

const loadData = async () => (await fetch("./data-location.json")).json()

async function init(){
    const data = await loadData()
    
    data.forEach((item) => {

    
        const div = document.createElement("div")
        div.classList.add("pick-branch")
        div.innerHTML = `  
        <div id="info-branch-container" class="info-branch-container">

            <div id="info-location-branch" class="info-branch">
                <p class="branch-name">${item.name}</p>
                <p class="branch-location">${item.location}</p>
                <p class="branch-tel">${item.tel}</p>
            </div>
                    
            <div id="branch-button" class="branch-button">
                <button class="pick-branch-button">Agendar</button>
            </div>
                            
        </div>
                        
        <div class="span-select-branch"></div>`;
        
        divLocationFragment.appendChild(div)

    });

    pickBranch.appendChild(divLocationFragment)





}

init()