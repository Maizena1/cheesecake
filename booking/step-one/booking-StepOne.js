
const divLocationFragment = document.createDocumentFragment()
const optionStateFragment = document.createDocumentFragment()
const h5Fragment = document.createDocumentFragment()

let state = "";

const pickBranchContainer = document.getElementById("pick-branch-container")
const pickBranch = document.getElementById("pick-branch")
const branchCountrySelect = document.getElementById("branch-country-select")
const headerBranchHeader = document.getElementById("header-branch-header")



const loadDataBranch = async () => (await fetch("../data-location.json")).json()
const loadDataState = async () => (await fetch("../../states.json")).json()



async function initState(){
    const dataStates = await loadDataState()
    
    
    dataStates.forEach((item) => {

        const option = document.createElement("option")
        option.textContent = item.state
        optionStateFragment.appendChild(option)
        
    })
    
    branchCountrySelect.appendChild(optionStateFragment)

}


async function initBranch(){
    const data = await loadDataBranch()

    const stateInit = branchCountrySelect.options[branchCountrySelect.selectedIndex].text

    data.forEach((item) => {

        const div = document.createElement("div")
        div.classList.add("pick-branch")

        if(stateInit === "Selecciona una opcion"){
            div.innerHTML = `  
            
            <div id="info-branch-container" class="info-branch-container">
                <div id="info-location-branch" class="info-branch">
                    <p class="branch-name">${item.name}</p>
                    <p class="branch-location">${item.location}</p>
                    <p class="branch-tel">${item.tel}</p>
                </div>
                <div id="branch-button" class="branch-button">
                    <button id="${item.name}" class="pick-branch-button">Agendar</button>
                </div>
                                
            </div>         
            <div class="span-select-branch"></div>`;
            
            
            divLocationFragment.appendChild(div)

        }else if(state === item.state){
            div.innerHTML = `  
            <div id="info-branch-container" class="info-branch-container">
                <div id="info-location-branch" class="info-branch">
                    <p class="branch-name">${item.name}</p>
                    <p class="branch-location">${item.location}</p>
                    <p class="branch-tel">${item.tel}</p>
                </div>
                <div id="branch-button" class="branch-button">
                    <button id="${item.name}" class="pick-branch-button">Agendar</button>
                </div>   
            </div>
            <div class="span-select-branch"></div>`;

            divLocationFragment.appendChild(div)
        }

    });
    

    pickBranch.appendChild(divLocationFragment)
    const buttons = document.getElementsByClassName("pick-branch-button")


    for(const button of buttons){
        button.addEventListener(("click"), () => {
            window.location.replace("../step-two/index.html")
        })
    }
       
}




branchCountrySelect.addEventListener(("change"), () => {
    state = branchCountrySelect.options[branchCountrySelect.selectedIndex].text
    pickBranch.innerHTML = "";
    initBranch()
    
})

initState()
initBranch()



